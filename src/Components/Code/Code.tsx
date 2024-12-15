import {observer} from "mobx-react-lite";

import Button from "antd/es/button";
import Card from "antd/es/card";
import Select from "antd/es/select";
import {useRootStore} from "../../Store/RootStoreContext.ts";
import {CodeLanguage} from "../../Store/CodeEditor.ts";

import AceEditor from "react-ace";

import modeGolang from "ace-builds/src-noconflict/mode-golang";
import modePython from "ace-builds/src-noconflict/mode-python";
import githubTheme from "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import { config } from "ace-builds";
config.setModuleUrl("ace/mode/golang", modeGolang);
config.setModuleUrl("ace/mode/python", modePython);
config.setModuleUrl("ace/theme/github", githubTheme);

const items = [
    {
        value: 'golang',
        label: (<p>Go</p>),
    },
    {
        value: 'python',
        label: (<p>Python</p>),
    }
]

export const Code = observer(() => {
    const {codeEditorStore: {setText, language, run, setLanguage}} = useRootStore()

    const onChangeHandler = (value: string) => {

        setText(value)
    }

    const languageHandler = (value: CodeLanguage) => {
        setLanguage (value)
    }


    return (
        <Card title="Code" size="small"
              style={{width: "100%", height: "100%", textAlign: "left", overflowY: "auto"}}
              styles={{body: { height: "100%"}}}
              extra={
                  <>
                      <Select options={items} style={{width: "80px"}} value={language} onSelect={(value) => {languageHandler(value)}}/>
                      <Button type="link" onClick={() => { run()}}>Run</Button>
                  </>
              }
        >
            <AceEditor
                height="100%"
                width="100%"
                mode={language}
                highlightActiveLine={false}
                debounceChangePeriod={500}
                onChange={(value) => onChangeHandler(value)}
                name="UNIQUE_ID_OF_DIV"
            />
        </Card>
    )
})

export default Code