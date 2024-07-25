import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { FloatingButton } from "../../components/FloatingButton/FloatingButton";
import CalendarDays from "react-native-calendar-slider-carousel";
import { icons } from "../../../assets/icons";
import { CardTask } from "../../components/CardTask/CardTask";
import { InputModal } from "../../components/InputModal/InputModal";
import { TaskContext } from "../../context/TaskContext";
import { colors } from "../../../assets/colors";
import DatePicker from "react-native-date-picker";
import {
  stringToDate,
  dateToString,
  getFirstDayOfMonth,
  getLastDayOfMonth,
} from "../../utils/date";

export const Home = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [openMonthPicker, setOpenMonthPicker] = useState<boolean>(false);

  const { state, getTasks, createTask, setDescription, setTitle, setDate } =
    useContext(TaskContext);

  const handleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleMonthPicker = () => {
    setOpenMonthPicker((prev) => !prev);
  };

  useEffect(() => {
    getTasks(state.selectedDay);
  }, [state.taskCreated, state.selectedDay]);

  return (
    <SafeAreaView style={styles.safeAreView}>
      <CalendarDays
        loading={state.loading}
        firstDate={getFirstDayOfMonth(stringToDate(state.selectedDay))}
        lastDate={getLastDayOfMonth(stringToDate(state.selectedDay))}
        selectedDate={state.selectedDay}
        onDateSelect={(date: string) => setDate(date)}
        daysInView={Platform.OS === "android" ? 2.9 : 3.2}
        paginate={true}
      />
      <View style={styles.taskContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.taskTitles}>Tareas - {state.selectedDay}</Text>
        </View>
        <ScrollView>
          <CardTask
            onDelete={() => {}}
            onEdit={handleModal}
            title="Trabajo"
            description="Terminar CRUD"
          ></CardTask>
        </ScrollView>
      </View>
      <View style={styles.floatingButtonContainer}>
        <FloatingButton
          image={icons.settings}
          onPress={() => console.log("hola")}
          containerStyle={{
            width: 50,
            height: 50,
            backgroundColor: "#6564ae",
          }}
        />
        <FloatingButton
          image={icons.calendar}
          onPress={handleMonthPicker}
          containerStyle={{
            width: 55,
            height: 55,
            backgroundColor: "#6564ae",
            marginLeft: Platform.OS === "android" ? 130 : 180,
          }}
        />
        <FloatingButton image={icons.plus} onPress={handleModal} />
      </View>
      <InputModal
        handleModal={handleModal}
        modalVisible={modalVisible}
        description={state.task.description}
        setDescription={(text) => setDescription(text)}
        setTitle={(text) => setTitle(text)}
        title={state.task.title}
        onPress={createTask}
      />
      <DatePicker
        date={stringToDate(state.selectedDay)}
        open={openMonthPicker}
        modal
        mode="date"
        title={"Selecciona una fecha..."}
        confirmText="Confirmar"
        cancelText="Cancelar"
        onConfirm={(date) => {
          setDate(dateToString(date));
        }}
        dividerColor="black"
        locale="es"
        theme="light"
      />
    </SafeAreaView>
  );
};
