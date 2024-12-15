import {CodeLanguage} from "../Store/CodeEditor.ts";
import {getRandomIntInclusive, isObject} from "../util.ts";

type ResponseStatus = "success" | "error";

interface CodeExecutionRequest {
    language: CodeLanguage
    code: string
}

interface CodeExecutionResponseSuccess {
    status: ResponseStatus
    output: string
}

interface CodeExecutionResponseError {
    "status": ResponseStatus,
    "error": string
}

export function isCodeExecutionResponseSuccess (value: unknown): value is CodeExecutionResponseSuccess {
    if (!isObject(value)) return false
    return "status" in value && value.status === "success" && "output" in value && typeof value.output === "string"
}

export function isCodeExecutionResponseError (value: unknown): value is CodeExecutionResponseError {
    if (!isObject(value)) return false
    return "status" in value && value.status === "error" && "error" in value && typeof value.error === "string"
}

export class CodeApi {

    async fetchCodeExecution(request: CodeExecutionRequest){
        // Просто для заглушки
        console.log("request: ", request)

        const emulator  = new Promise<CodeExecutionResponseSuccess>((resolve, reject) => {
            setTimeout(() => {
                const rand = getRandomIntInclusive(1,2)
                if (rand > 1)  reject ({status: "error", error: "SyntaxError: Unexpected token"} as CodeExecutionResponseError)
                resolve ({status: "success", output: "Hello, world!\n"} as CodeExecutionResponseSuccess)
            }, getRandomIntInclusive(1_000, 5_000))
        })

        return  await emulator
    }
}
