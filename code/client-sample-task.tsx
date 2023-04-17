import React from "react";
import { ClientTaskData, ClientTaskType } from "../custom-types";

export async function computeTask(params: any): Promise<ClientTaskData> {
    //Do some computation here...
    return {
        "data": 42069, //computed value (any type)
        "type": ClientTaskType.SampleTaskCount
    }
};

export function renderTask(data: ClientTaskData): JSX.Element {
    return <span style={{float: "right", marginLeft: "1rem"}}>{data.data}</span>;
}