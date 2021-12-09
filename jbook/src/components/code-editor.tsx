import MonacoEditor, {EditorDidMount} from '@monaco-editor/react';
import prettier from 'prettier'
import parser from 'prettier/parser-babel'

interface CodeEditorProps {
    initialValue: string;

    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({onChange, initialValue}) => {
    const onEditorDidMount: EditorDidMount = (getValue: () => string, monacoEditor: any) => {
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue())
        })
        monacoEditor.getModel()?.updateOptions({tabSize: 2})
    }
    return <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        language="javascript"
        theme="dark"
        height="50vh"
        width="50vw"
        options={{
            wordWrap: 'on',
            minimap: {enabled: false},
            showUnused: false,
            folding: false,
            lineNumbersMinChars: 2,
            fontSize: 16,
            scrollBeyondLastLine: false,
            automaticLayout: true,
        }}

    />;
};

export default CodeEditor;
