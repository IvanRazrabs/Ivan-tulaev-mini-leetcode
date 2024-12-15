import {makeAutoObservable} from "mobx";
import {CodeApi, isCodeExecutionResponseError, isCodeExecutionResponseSuccess} from "../API/CodeApi.ts";

export type CodeLanguage = "golang" | "python"

type Status = "stop" | "pending" | "error" | "success"

interface ICodeEditor {
    text: string
    setText: (text: string) => void
    language: CodeLanguage
    setLanguage: (language: CodeLanguage) => void
    run: () => void
    status: Status
    result: string
    api: null | CodeApi
}

export class CodeEditor implements ICodeEditor {
    language: CodeLanguage = "golang"
    result: string= ""
    status: Status = "stop"
    text: string = ""
    api: null | CodeApi = null

    constructor() {
        makeAutoObservable(this, undefined, {autoBind: true})
        this.api = new CodeApi()
    }

    get request(){
        return {language: this.language, code: this.text}
    }

    async run () {
        this.status = "pending"
        this.result = ""

        try {
            const res = await this.api?.fetchCodeExecution(this.request)
            if (isCodeExecutionResponseSuccess(res)) {
                this.status = "success"
                this.result = res.output
                return
            }
        }catch (err){
            if (isCodeExecutionResponseError(err)) {
                this.status = "error"
                this.result = err.error
                return
            }
            this.status = "error"
            this.result = "UnknownError"
        }
    }

    setLanguage(language: CodeLanguage): void {
        this.language = language
    }

    setText(text: string): void {
        this.text = text
    }
}
