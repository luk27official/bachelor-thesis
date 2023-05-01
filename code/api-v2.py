from .docking_task import DockingTask
from flask import Blueprint, request
api_v2 = Blueprint("api_v2", __name__)
# ...
@api_v2.route(
    "/docking/<database_name>/<prediction_name>/post",
    methods=["POST"]
)
def route_post_docking_file(database_name: str, prediction_name: str):
    data = request.get_json(force=True) or {}
    dt = DockingTask(database_name=database_name)
    return dt.post_task(prediction_name.upper(), data)

@api_v2.route(
    "/docking/<database_name>/<prediction_name>/public/<file_name>",
    methods=["POST"]
)
def route_get_docking_file_with_param(database_name: str, prediction_name: str, file_name: str):
    data = request.get_json(force=True)
    param = data.get("hash", None)
    if data is None or param is None:
        return "", 404
    dt = DockingTask(database_name=database_name)
    return dt.get_file_with_post_param(prediction_name.upper(), file_name, param)

@api_v2.route(
    "/docking/<database_name>/<prediction_name>/tasks",
    methods=["GET"]
)
def route_get_all_docking_tasks(database_name: str, prediction_name: str):
    dt = DockingTask(database_name=database_name)
    return dt.get_all_tasks(prediction_name.upper())