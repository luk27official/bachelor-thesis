import os
import celery
prankweb = celery.Celery("prankweb")
prankweb.conf.update({
    "task_routes": {
        # the key is the name of the task, the value is the name of the queue
        'prediction': 'p2rank',
        'docking': 'docking',
    }
})
#...
def submit_directory_for_execution(directory: str):
    prankweb.send_task("prediction", args=[directory])

def submit_directory_for_docking(directory: str, taskId: int):
    prankweb.send_task("docking", args=[directory, taskId])