import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./pages/Error";
import Tasks from "./pages/Tasks";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
