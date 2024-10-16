import React, { forwardRef } from "react";
import CodeMirror, { Extension, ReactCodeMirrorRef, BasicSetupOptions } from "@uiw/react-codemirror";

interface EditorProps {
  code: string;
  onChange: (newVal: string) => void;
  placeholder?: string;
  loading?: boolean;
  theme?: "light" | "dark" | Extension;
  style?: React.CSSProperties;
  extensions?: Extension[];
  setup?: BasicSetupOptions;
  actionComp?: React.ReactNode;
}

type EditorComponent = React.ForwardRefExoticComponent<EditorProps & React.RefAttributes<ReactCodeMirrorRef>>;

const LiveEditor: EditorComponent = forwardRef(
  ({ code, onChange, placeholder, theme = "light", style, extensions, setup, actionComp = null }, ref) => {
    return (
      <CodeMirror
        style={style}
        ref={ref}
        theme={theme}
        value={code}
        extensions={extensions}
        onChange={onChange}
        placeholder={placeholder}
        basicSetup={setup}
      >
        {actionComp}
      </CodeMirror>
    );
  }
);

export default LiveEditor;
