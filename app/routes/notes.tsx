import { redirect } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';

import type { LinksFunction, ActionFunction } from "@remix-run/node";
import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import NoteList, { links as noteListLinks } from '~/components/NoteList';

import { getStoredNotes, storeNotes } from '~/data/notes';


export default function NotesPage() {
    const notes = useLoaderData<typeof loader>();

    return (
        <main>
            <NewNote />
            <NoteList notes={notes} />
        </main>
    );
  }

export async function loader() {
    const notes = await getStoredNotes();
    return notes;
}

export const action: ActionFunction = async ({ request }) => {
    // throw(new Error('This is test error'));

    const formData = await request.formData();
    const noteData = Object.fromEntries(formData) as { [key: string]: any }; // Replace 'any' with a more specific type if possible
    
    // Add validation...
    if (noteData.title.trim().length < 5) {
        return { message: 'Invalid title - must be at least 5 characters long.' };
    }

    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes);
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
    return redirect('/notes');
};
  

export const links: LinksFunction = () => {
    return [...newNoteLinks(), ...noteListLinks()]
}

export function CatchBoundary() {
    const caughtResponse = useCatch();
  
    const message = caughtResponse.data?.message || 'Data not found.';
  
    return (
      <main>
        <NewNote />
        <p className='info-message'>{message}</p>
      </main>
    );
  }

export function ErrorBoundary() {
    return (
      <main className="error">
        <h1>An error related to your notes occurred!</h1>
        <p>Error in Notes Route</p>
        <p>
          Back to <Link to="/">safety</Link>!
        </p>
      </main>
    );
}