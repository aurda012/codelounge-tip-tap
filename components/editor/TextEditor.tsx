"use client";

import { EditorContent, useEditor, JSONContent } from "@tiptap/react";
import { SelectionMenu } from "./SelectionMenu";
import { Toolbar } from "./Toolbar";
import styles from "./TextEditor.module.css";
import "@/styles/text-editor.css";
import "@/styles/index.css";
import { useRef } from "react";
import { LinkMenu } from "./link-menu";
import { ExtensionKit } from "./extensions/extension-kit";

export default function TextEditor({
  onChange,
  content,
}: {
  onChange: (content: any) => void;
  content: JSONContent;
}) {
  const editorRef = useRef(null);

  // Set up editor with plugins, and place user info into Yjs awareness and cursors
  const editor = useEditor({
    editorProps: {
      attributes: {
        // Add styles to editor element
        class: styles.editor,
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
      },
    },
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    extensions: [...ExtensionKit],
  });

  return (
    <div
      className="flex flex-col relative background-light900_dark300 light-border-2 border text-dark300_light700 rounded-[8px]"
      ref={editorRef}
    >
      <div className="flex justify-between items-start padding-3 border-b">
        {editor && <Toolbar editor={editor} />}
      </div>
      <div className="flex-1 overflow-y-scroll">
        {editor && <SelectionMenu editor={editor} />}
        {editor && <LinkMenu editor={editor} appendTo={editorRef} />}
        <EditorContent
          editor={editor}
          className="relative mx-4 my-3 min-h-[250px]"
        />
      </div>
    </div>
  );
}
