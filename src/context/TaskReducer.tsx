import { Task, TaskState } from "../interfaces/tasks";

type Action =
  | { type: "getTasks"; payload: TaskState }
  | { type: "setLoading"; payload: boolean }
  | { type: "setTitle"; payload: string }
  | { type: "setDescription"; payload: string }
  | { type: "setDate"; payload: string }
  | { type: "setTaskCreated"; payload: boolean }
  | { type: "clearValues"; payload: Task }
  | { type: "setCalendarLoading"; payload: boolean };

export default function TaskReducer(
  state: TaskState,
  action: Action
): TaskState {
  switch (action.type) {
    case "getTasks":
      return {
        ...state,
        data: action.payload,
      };
    case "setLoading":
      return {
        ...state,
        loading: action.payload,
      };
    case "setTitle":
      state.task.title = action.payload;
      return {
        ...state,
      };
    case "setDescription":
      state.task.description = action.payload;
      return {
        ...state,
      };
    case "setDate":
      return {
        ...state,
        selectedDay: action.payload,
      };
    case "setTaskCreated":
      return {
        ...state,
        taskCreated: action.payload,
      };
    case "clearValues":
      return {
        ...state,
        task: action.payload,
      };

    // case "getCirculoById":
    //   state.items = action.payload;
    //   return {
    //     ...state,
    //     items: state.items,
    //     loading: false,
    //   };
    // case "getUserCircles":
    //   const circleUsing = action.payload.filter((item) => item.using === true);
    //   if (circleUsing.length) {
    //     state.userCircleSelected = circleUsing[0].circleId;
    //   }
    //   return {
    //     ...state,
    //     userCircles: action.payload,
    //   };
    // case "setUserCircle":
    //   return {
    //     ...state,
    //     userCircleSelected: action.payload,
    //   };
    // case "setLoading":
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };
    // case "filtered":
    //   return {
    //     ...state,
    //     filtered: action.payload,
    //   };
    // case "handleChangeFilter":
    //   return {
    //     ...state,
    //     [action.payload.name]: action.payload.value,
    //   };
    // case "clearFilter":
    //   return {
    //     ...state,
    //     filterCircleName: "",
    //     filterCircleId: "",
    //   };
    // case "getProvincias":
    //   return {
    //     ...state,
    //     provincias: action.payload,
    //   };
    // case "getDepartamentos":
    //   return {
    //     ...state,
    //     departamentos: action.payload,
    //   };
    // case "getLocalidades":
    //   return {
    //     ...state,
    //     localidades: action.payload,
    //   };
    default:
      return state;
  }
}
