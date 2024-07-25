import { useReducer } from "react";
import { Task, TaskState } from "../interfaces/tasks";
import TaskReducer from "./TaskReducer";
import axios from "axios";
import { endpoints } from "../constants/endpoints";
import { TaskContext } from "./TaskContext";
import { ENV } from "../constants/services";
import { dateToString } from "../utils/date";

const INITIAL_VALUES: TaskState = {
  data: [],
  task: {
    day: "",
    description: "",
    title: "",
    isDone: false,
    id: "",
    userId: "",
  },
  loading: false,
  taskCreated: false,
  selectedDay: dateToString(new Date()),
  calendarLoading: false,
};

interface TaskProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TaskContextProvider = ({ children }: TaskProviderProps) => {
  const [state, dispatch] = useReducer(TaskReducer, INITIAL_VALUES);

  const getTasks = async (date: string) => {
    dispatch({ type: "setLoading", payload: true });
    try {
      let response = await axios.get(endpoints.get_tasks(ENV.USER_ID, date));
      dispatch({ type: "getTasks", payload: response.data });
      dispatch({ type: "setLoading", payload: false });
    } catch (error) {
      console.log("errorGetTask", error);
      dispatch({ type: "setLoading", payload: false });
    } finally {
      dispatch({ type: "setLoading", payload: false });
    }
  };

  const createTask = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data: Task = {
      day: state.selectedDay,
      description: state.task.description,
      isDone: state.task.isDone,
      title: state.task.title,
      userId: ENV.USER_ID,
    };

    dispatch({ type: "setLoading", payload: true });

    await axios
      .post(endpoints.create_task(), data, config)
      .then(() => {
        dispatch({ type: "setTaskCreated", payload: true });
        dispatch({ type: "setLoading", payload: false });
        dispatch({ type: "setTaskCreated", payload: false });
        clearValues();
      })
      .catch((error) => {
        console.log(error, "POSTTASKERROR");
        dispatch({ type: "setLoading", payload: false });
      })
      .finally(() => {
        dispatch({ type: "setLoading", payload: false });
      });
  };

  const setTitle = (title: string) => {
    dispatch({ type: "setTitle", payload: title });
  };

  const setDescription = (description: string) => {
    dispatch({ type: "setDescription", payload: description });
  };

  const setDate = (date: string) => {
    dispatch({ type: "setDate", payload: date });
  };

  const clearValues = () => {
    dispatch({
      type: "clearValues",
      payload: {
        day: "",
        description: "",
        isDone: false,
        title: "",
        userId: ENV.USER_ID,
      },
    });
  };

  return (
    <TaskContext.Provider
      value={{
        state,
        getTasks,
        createTask,
        setTitle,
        setDescription,
        clearValues,
        setDate,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
