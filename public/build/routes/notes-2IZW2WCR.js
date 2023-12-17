import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-KASALJ6B.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-F4V7FCDA.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/notes.tsx
var import_node = __toESM(require_node(), 1);

// app/components/NewNote.css
var NewNote_default = "/build/_assets/NewNote-HBKIPWFQ.css";

// app/components/NewNote.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\NewNote.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\NewNote.tsx"
  );
}
function NewNote() {
  _s();
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", id: "note-form", children: [
    data?.message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: data.message }, void 0, false, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 29,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Title" }, void 0, false, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "title", required: true }, void 0, false, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", children: "Content" }, void 0, false, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "content", name: "content", rows: 5, required: true }, void 0, false, {
        fileName: "app/components/NewNote.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Note" }, void 0, false, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/NewNote.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewNote.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(NewNote, "fKFN9xseM5n8F1WPfjaTTyC08vc=", false, function() {
  return [useNavigation, useActionData];
});
_c = NewNote;
var NewNote_default2 = NewNote;
var links = () => {
  return [{
    rel: "stylesheet",
    href: NewNote_default
  }];
};
var _c;
$RefreshReg$(_c, "NewNote");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NoteList.css
var NoteList_default = "/build/_assets/NoteList-KS7CKPGL.css";

// app/components/NoteList.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\NoteList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\NoteList.tsx"
  );
}
function NoteList({
  notes
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { id: "note-list", children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: note.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "note-meta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
          "#",
          index + 1
        ] }, void 0, true, {
          fileName: "app/components/NoteList.tsx",
          lineNumber: 36,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }) }, void 0, false, {
          fileName: "app/components/NoteList.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/NoteList.tsx",
          lineNumber: 37,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NoteList.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: note.title }, void 0, false, {
        fileName: "app/components/NoteList.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NoteList.tsx",
      lineNumber: 34,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: note.content }, void 0, false, {
      fileName: "app/components/NoteList.tsx",
      lineNumber: 51,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NoteList.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/NoteList.tsx",
    lineNumber: 32,
    columnNumber: 11
  }, this) }, note.id, false, {
    fileName: "app/components/NoteList.tsx",
    lineNumber: 31,
    columnNumber: 35
  }, this)) }, void 0, false, {
    fileName: "app/components/NoteList.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c2 = NoteList;
var NoteList_default2 = NoteList;
var links2 = () => {
  return [{
    rel: "stylesheet",
    href: NoteList_default
  }];
};
var _c2;
$RefreshReg$(_c2, "NoteList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/notes.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\notes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\notes.tsx"
  );
  import.meta.hot.lastModified = "1702825677874.0398";
}
function NotesPage() {
  _s2();
  const notes = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewNote_default2, {}, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NoteList_default2, { notes }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s2(NotesPage, "lCYwax5cFMe1PUxNanskqlEV3FQ=", false, function() {
  return [useLoaderData];
});
_c3 = NotesPage;
var links3 = () => {
  return [...links(), ...links2()];
};
function CatchBoundary() {
  _s22();
  const caughtResponse = useCatch();
  const message = caughtResponse.data?.message || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewNote_default2, {}, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "info-message", children: message }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s22(CatchBoundary, "aC0yisvsYUE46qxyVmeMcDtCdmM=", true);
_c22 = CatchBoundary;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "An error related to your notes occurred!" }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Error in Notes Route" }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 84,
        columnNumber: 19
      }, this),
      "!"
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_c32 = ErrorBoundary;
var _c3;
var _c22;
var _c32;
$RefreshReg$(_c3, "NotesPage");
$RefreshReg$(_c22, "CatchBoundary");
$RefreshReg$(_c32, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  NotesPage as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/notes-2IZW2WCR.js.map
