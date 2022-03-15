import { Routes, Route, Navigate } from "react-router-dom";
import Accounts from "./pages/Accounts";
import PersonPage from "./pages/PersonPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/accounts/:id" element={<PersonPage />} />
        <Route path="*" element={<Navigate to="/accounts" />}/>
      </Routes>
    </div>
  );
}

export default App;
