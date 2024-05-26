import { ScrollRestoration } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { usePrefetchData } from "@/hooks/usePrefetchData";

function App() {
  usePrefetchData()

  return (
    <>
      <ScrollRestoration />

      <AppLayout />
    </>
  );
}

export default App;
