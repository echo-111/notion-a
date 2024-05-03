"use client";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css"
import { useTheme } from "next-themes";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({
  onChange,
  initialContent,
  editable
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const uploadFile = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file
    });
    return response.url;
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent:
      initialContent
      ? JSON.parse(initialContent) as PartialBlock[]
      :undefined,
    uploadFile,
  });

  return (
    <BlockNoteView 
      editable={editable}
      editor={editor} 
      onChange = {()=>{onChange(JSON.stringify(editor.document, null, 2))}}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      
      />
  )
};

export default Editor;
