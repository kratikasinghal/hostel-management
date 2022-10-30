import Signup from "./signup";
import Login from "./login";
import {Route,Routes} from 'react-router-dom';
function App() {
  
  return(
    
     <div className="app">
     <Routes>
     <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" exact element={<Signup/>}/>
     </Routes>
        
        
    </div>
    
    );
  
}

export default App;
