import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TablePage from "./pages/TablePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/table" element={<TablePage />} />
    </Routes>
  );
}

export default App;
