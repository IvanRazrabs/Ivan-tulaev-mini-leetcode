import Card from "antd/es/card";
import {useRootStore} from "../../Store/RootStoreContext.ts";
import {observer} from "mobx-react-lite";

export const Console = observer(() => {
    const {codeEditorStore: {result, status}} = useRootStore()

    return (
        <Card title="Console" style={{height:"100%", textAlign:"left"}} size="small" loading={status === "pending"}>
            <p>{result}</p>
        </Card>
    )
})