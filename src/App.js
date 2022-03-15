import { Routes, Route, Navigate } from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts";
import PersonPage from "./pages/Accounts/PersonPage/PersonPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Navigate to="/accounts" />}/>
        <Route path="/accounts" element={<Accounts />} />
        <Route path="accounts/:id" element={<PersonPage />} />
        <Route path="*" element={<Navigate to="/accounts" />}/>
      </Routes>
    </div>
  );
}

export default App;
