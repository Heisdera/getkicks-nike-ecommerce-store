import AppLayout from "./components/AppLayout";
import { usePrefetchData } from "./hooks/usePrefetchData";

function App() {
  usePrefetchData()

  return <AppLayout />;
}

export default App;
