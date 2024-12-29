import styles from "./App.css"
import MainTitle from "../src/components/MainTitle/MainTitle";
import TaskForm from "../src/components/TaskForm/TaskForm";
import Table from "../src/components/Table/Table";
function App() {

  return(
      <div className={styles.container}>
        <MainTitle></MainTitle>
        <TaskForm></TaskForm>
        <Table></Table>
      </div>
  );
}

export default App
