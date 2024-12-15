import {makeAutoObservable, runInAction} from "mobx";

interface ITaskEditor {
    text: string
}

export class TaskEditor implements ITaskEditor {
    text: string = ""

    constructor() {
        makeAutoObservable(this)
        this.fetchDefaultTask()
    }

    async fetchDefaultTask() {
        const fetchDefault = async function() {
            const response = await fetch("TaskText.md")
            return await response.text()
        }
        const text  = await fetchDefault()
        runInAction(() => {
            this.text  =  text
        })
    }
}
