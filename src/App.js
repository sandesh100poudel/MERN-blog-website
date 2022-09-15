import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
 import Setting from "./pages/settings/Setting";
 import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user=false;
  return (
    <Router>
     
     <Topbar /> 
     <Routes>
      <Route path="/" element={<Home />}>
        </Route>
     </Routes>

     <Routes>
      <Route path="/register" element={user ? <Home /> : <Register />}>
        </Route>
     </Routes>
    
     <Routes>
      <Route path="/login" element={user ? <Home /> : <Login />}>
        </Route>
     </Routes>

     <Routes>
      <Route path="/setting" element={user ? <Setting /> : <Register />}>
        </Route>
     </Routes>

     <Routes>
      <Route path="/write" element={user ? <Write /> : <Register />}>
       </Route>
     </Routes>

     <Routes>
      <Route path="/post/:id" element={<Single />}>
        </Route>
     </Routes>
     
    </Router>
  );
}

export default App;
