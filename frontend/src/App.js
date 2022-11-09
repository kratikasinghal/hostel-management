import SignUpScreen from "./Screens/signUpScreen";
import LoginScreen from "./Screens/loginScreen";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ResidentScreen from "./Screens/residentScreen";
import Announcement from "./components/Announcement";
import ComplaintScreen from "./Screens/complaintScreen";
import ApproveScreen from "./Screens/approveScreen";
import WorkerScreen from "./Screens/workerScreen";
import AssignPending from "./Screens/AssignPending";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/signup" element={<SignUpScreen />} />
        <Route exact path="/resident/homePage" element={<ResidentScreen />} />
        <Route exact path="/complaintScreen" element={<ComplaintScreen />} />
        <Route exact path="/approveScreen" element={<ApproveScreen />} />
        <Route exact path="/AssignPending" element={<AssignPending />} />
        <Route exact path="/resident/complaints" element={<ComplaintScreen />} />
        <Route exact path="/worker/complaints" element={<WorkerScreen />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
