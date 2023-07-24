import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./page/Login";
import Header from "./page/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/header" element={<Header />} />
        <Route exact path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
