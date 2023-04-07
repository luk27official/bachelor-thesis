import React from "react";
import { ClientTaskData, ClientTaskType, PocketData } from '../../custom-types';
import { PluginUIContext } from "molstar/lib/mol-plugin-ui/context";
import { PredictionInfo } from "../../prankweb-api";

export default class PocketClientTask extends React.Component
    <{
        title: string,
        inDialog: boolean,
        pocket: PocketData,
        plugin: PluginUIContext,
        taskType: ClientTaskType,
        prediction: PredictionInfo,
        compute: () => Promise<ClientTaskData>,
        renderOnComplete: (data: ClientTaskData) => JSX.Element
    }, {
        taskData: ClientTaskData | undefined,
        computed: boolean,
        loading: boolean
    }> {
        //...
    }