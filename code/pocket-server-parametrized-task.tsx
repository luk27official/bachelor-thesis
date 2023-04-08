import React from "react";
import { PocketData, ServerTaskData, ServerTaskType } from '../../custom-types';
import { PluginUIContext } from "molstar/lib/mol-plugin-ui/context";
import { PredictionInfo } from "../../prankweb-api";

export default class PocketServerParametrizedTask extends React.Component
    <{
        title: string,
        inDialog: boolean,
        pocket: PocketData,
        plugin: PluginUIContext,
        taskType: ServerTaskType,
        prediction: PredictionInfo,
        serverTasks: ServerTaskData[],
        modalDescription: string,
        compute: (hash: string) => Promise<any>
        renderOnComplete: (responseData: ServerTaskData, hash: string) => JSX.Element
    }, {
        taskData: ServerTaskData | undefined,
        computed: boolean,
        loading: boolean,
        modalOpen: boolean,
        formData: string,
        hash: string
    }> {
        //...
    }