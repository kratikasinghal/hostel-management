import SignUpScreen from "./Screens/signUpScreen";
import LoginScreen from "./Screens/loginScreen";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import ResidentScreen from "./Screens/residentScreen";
import Announcement from "./components/Announcement";
import ComplaintScreen from "./Screens/complaintScreen";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/loginScreen" element={<LoginScreen />} />
      <Route exact path="/signup" element={<SignUpScreen />} />
        <Route exact path="/resident/homePage" element={<ResidentScreen />} />
        <Route exact path="/complaintScreen" element={<ComplaintScreen />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
