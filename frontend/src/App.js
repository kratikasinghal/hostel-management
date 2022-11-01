import SignUpScreen from "./Screens/signUpScreen";
import LoginScreen from "./Screens/loginScreen";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginScreen />} />
      <Route exact path="/signup" element={<SignUpScreen />} />
    </Routes>
  );
}

export default App;
