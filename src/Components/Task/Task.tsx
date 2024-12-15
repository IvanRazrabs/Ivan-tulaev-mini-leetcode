import {observer} from "mobx-react-lite";
import Card from "antd/es/card";
import Markdown from "react-markdown"
import {useRootStore} from "../../Store/RootStoreContext.ts";

const Task = observer(() => {
    const {taskStore: {text}} = useRootStore()

    return (
        <Card title={"Task"} style={{ width: "100%", height:"100%", overflow: "auto", textAlign:"left"}} size={"small"} >
            <Markdown>{text}</Markdown>
        </Card>
    )
})

export default Task