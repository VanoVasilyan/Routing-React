import { Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts";
import PersonPage from "./pages/Accounts/PersonPage/PersonPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/accounts" element={<Accounts />} />
        <Route path="accounts/:id" element={<PersonPage />} />
      </Routes>
    </div>
  );
}

export default App;
