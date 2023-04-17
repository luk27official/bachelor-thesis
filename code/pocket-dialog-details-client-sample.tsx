import React from "react";

import PocketClientTask from "./pocket-client-task";
import { ClientTaskType } from "../../custom-types";
import { computeTask, renderTask } from "../../tasks/client-sample-task";

export default class PocketDialogDetails extends React.Component
<
//...
> 
{
    //...
    render() {
        return (
            <div>
                //other tasks
                //...
                <PocketClientTask inDialog={this.props.inDialog} title="A sample task" pocket={this.props.pocket} plugin={this.props.plugin} taskType={ClientTaskType.Sample} prediction={this.props.prediction} compute={() => computeTask(this.props.prediction)} renderOnComplete={renderTask}/>
            </div>
        );
    }
}