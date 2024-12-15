import {CodeEditor} from "./CodeEditor.ts";
import {TaskEditor} from "./TaskEditor.ts";
import {makeAutoObservable} from "mobx";


interface IRootStore {
    taskStore: TaskEditor
    codeEditorStore: CodeEditor
}

export class RootStore implements IRootStore {
    codeEditorStore: CodeEditor
    taskStore: TaskEditor

    constructor() {
        makeAutoObservable(this)
        this.codeEditorStore = new CodeEditor()
        this.taskStore = new TaskEditor()
    }
}
