import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/task"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.styleWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        <View style={styles.taskList}>
            <Task task={"my task 1"}/>
            <Task task={"my task 2"}/>
            <Task task={"my task 3"}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  styleWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle:{
    fontSize: 30,
    fontWeight: "bold",
  },
  taskList: { 
    marginTop: 30,
  }
});
