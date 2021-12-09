import MonacoEditor, {EditorDidMount} from '@monaco-editor/react';

interface CodeEditorProps {
    initialValue: string;

    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({onChange, initialValue}) => {
    const onEditorDidMount = (getValue: () => string, monacoEditor: any) => {
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue())
        })
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
