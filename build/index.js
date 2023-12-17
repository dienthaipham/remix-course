var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  Link
} from "@remix-run/react";

// app/components/MainNavigation.tsx
import { NavLink } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function MainNavigation() {
  return /* @__PURE__ */ jsxDEV2("nav", { id: "main-navigation", children: /* @__PURE__ */ jsxDEV2("ul", { children: [
    /* @__PURE__ */ jsxDEV2("li", { className: "nav-item", children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/", children: "Home" }, void 0, !1, {
      fileName: "app/components/MainNavigation.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("li", { className: "nav-item", children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/notes", children: "My Notes" }, void 0, !1, {
      fileName: "app/components/MainNavigation.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MainNavigation.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/MainNavigation.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var MainNavigation_default = MainNavigation;

// app/styles/main.css
var main_default = "/build/_assets/main-THLKTWJO.css";

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: main_default }];
function App() {
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3("header", { children: /* @__PURE__ */ jsxDEV3(MainNavigation_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = useRouteError();
  return /* @__PURE__ */ jsxDEV3("html", { children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3("header", { children: /* @__PURE__ */ jsxDEV3(MainNavigation_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("main", { className: "error", children: [
        /* @__PURE__ */ jsxDEV3("h1", { children: "An error occurred!" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("p", { children: error.message }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("p", { children: [
          "Back to ",
          /* @__PURE__ */ jsxDEV3(Link, { to: "/", children: "safety" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 21
          }, this),
          "!"
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/notes.$noteId.tsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  default: () => Contact
});
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Contact() {
  let contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: !0
  };
  return /* @__PURE__ */ jsxDEV4("div", { id: "contact", children: /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4(
    "img",
    {
      alt: `${contact.first} ${contact.last} avatar`,
      src: contact.avatar
    },
    contact.avatar,
    !1,
    {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2
});
import { Link as Link2 } from "@remix-run/react";

// app/styles/home.css
var home_default = "/build/_assets/home-PJIINAIX.css";

// app/routes/_index.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV5("main", { id: "content", children: [
    /* @__PURE__ */ jsxDEV5("h1", { children: "A better way of keeping track of your notes" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: "Try our early beta and never loose track of your notes again!" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { id: "cta", children: /* @__PURE__ */ jsxDEV5(Link2, { to: "/notes", children: "Try Now!" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var links2 = () => [{ rel: "stylesheet", href: home_default }];

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => NotesPage,
  links: () => links5,
  loader: () => loader
});
import { redirect } from "@remix-run/node";
import { useLoaderData, Link as Link4 } from "@remix-run/react";

// app/components/NewNote.tsx
import { Form, useNavigation, useActionData } from "@remix-run/react";

// app/components/NewNote.css
var NewNote_default = "/build/_assets/NewNote-HBKIPWFQ.css";

// app/components/NewNote.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function NewNote() {
  let navigation = useNavigation(), data = useActionData(), isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsxDEV6(Form, { method: "post", id: "note-form", children: [
    data?.message && /* @__PURE__ */ jsxDEV6("p", { children: data.message }, void 0, !1, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 13,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ jsxDEV6("p", { children: [
      /* @__PURE__ */ jsxDEV6("label", { htmlFor: "title", children: "Title" }, void 0, !1, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("input", { type: "text", id: "title", name: "title", required: !0 }, void 0, !1, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("p", { children: [
      /* @__PURE__ */ jsxDEV6("label", { htmlFor: "content", children: "Content" }, void 0, !1, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("textarea", { id: "content", name: "content", rows: 5, required: !0 }, void 0, !1, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "form-actions", children: /* @__PURE__ */ jsxDEV6("button", { disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Note" }, void 0, !1, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewNote.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var NewNote_default2 = NewNote, links3 = () => [{ rel: "stylesheet", href: NewNote_default }];

// app/components/NoteList.tsx
import { Link as Link3 } from "@remix-run/react";

// app/components/NoteList.css
var NoteList_default = "/build/_assets/NoteList-KS7CKPGL.css";

// app/components/NoteList.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function NoteList({ notes }) {
  return /* @__PURE__ */ jsxDEV7("ul", { id: "note-list", children: notes.map(
    (note, index) => /* @__PURE__ */ jsxDEV7("li", { className: "note", children: /* @__PURE__ */ jsxDEV7(Link3, { to: note.id, children: /* @__PURE__ */ jsxDEV7("article", { children: [
      /* @__PURE__ */ jsxDEV7("header", { children: [
        /* @__PURE__ */ jsxDEV7("ul", { className: "note-meta", children: [
          /* @__PURE__ */ jsxDEV7("li", { children: [
            "#",
            index + 1
          ] }, void 0, !0, {
            fileName: "app/components/NoteList.tsx",
            lineNumber: 27,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV7("li", { children: /* @__PURE__ */ jsxDEV7("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) }, void 0, !1, {
            fileName: "app/components/NoteList.tsx",
            lineNumber: 29,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/NoteList.tsx",
            lineNumber: 28,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/NoteList.tsx",
          lineNumber: 26,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV7("h2", { children: note.title }, void 0, !1, {
          fileName: "app/components/NoteList.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NoteList.tsx",
        lineNumber: 25,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: note.content }, void 0, !1, {
        fileName: "app/components/NoteList.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NoteList.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NoteList.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, note.id, !1, {
      fileName: "app/components/NoteList.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ) }, void 0, !1, {
    fileName: "app/components/NoteList.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var NoteList_default2 = NoteList, links4 = () => [{ rel: "stylesheet", href: NoteList_default }];

// app/data/notes.js
import fs from "fs/promises";
async function getStoredNotes() {
  let rawFileContent = await fs.readFile("notes.json", { encoding: "utf-8" });
  return JSON.parse(rawFileContent).notes ?? [];
}
function storeNotes(notes) {
  return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}

// app/routes/notes.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function NotesPage() {
  let notes = useLoaderData();
  return /* @__PURE__ */ jsxDEV8("main", { children: [
    /* @__PURE__ */ jsxDEV8(NewNote_default2, {}, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8(NoteList_default2, { notes }, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}
async function loader() {
  return await getStoredNotes();
}
var action = async ({ request }) => {
  let formData = await request.formData(), noteData = Object.fromEntries(formData);
  if (noteData.title.trim().length < 5)
    return { message: "Invalid title - must be at least 5 characters long." };
  let existingNotes = await getStoredNotes();
  noteData.id = (/* @__PURE__ */ new Date()).toISOString();
  let updatedNotes = existingNotes.concat(noteData);
  return await storeNotes(updatedNotes), await new Promise((resolve, reject) => setTimeout(() => resolve(), 2e3)), redirect("/notes");
}, links5 = () => [...links3(), ...links4()];
function CatchBoundary() {
  let message = useCatch().data?.message || "Data not found.";
  return /* @__PURE__ */ jsxDEV8("main", { children: [
    /* @__PURE__ */ jsxDEV8(NewNote_default2, {}, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("p", { className: "info-message", children: message }, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this);
}
function ErrorBoundary2() {
  return /* @__PURE__ */ jsxDEV8("main", { className: "error", children: [
    /* @__PURE__ */ jsxDEV8("h1", { children: "An error related to your notes occurred!" }, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("p", { children: "Error in Notes Route" }, void 0, !1, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("p", { children: [
      "Back to ",
      /* @__PURE__ */ jsxDEV8(Link4, { to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 70,
        columnNumber: 19
      }, this),
      "!"
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-U3GWNNHJ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-KASALJ6B.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-F4V7FCDA.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UT7ACLZW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QQ5ELJD5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-2IZW2WCR.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-GO76RZMG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "1c5c083e", hmr: { runtime: "/build/_shared\\chunk-F4V7FCDA.js", timestamp: 1702831338209 }, url: "/build/manifest-1C5C083E.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
