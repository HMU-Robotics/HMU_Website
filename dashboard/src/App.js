import './App.css';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import EditUser from './pages/EditUser';
import CreateUser from './pages/CreateUser';
import {UserProvider} from './hooks/UserContext';
import { useState } from 'react';

function App() {

   const [user , setUser] = useState(null);

return (
 <Router basename='/api'>
 <UserProvider user={user} setUser={setUser}>
   {console.log(user)}
   <Routes>
     <Route index element={<Login />}/>
     <Route element={<PrivateRoute user={user}/>}>
        <Route element={<Dashboard/>} path="/dashboard"  exact/>
        <Route element={<CreateUser/>} path="/createuser"  exact/>
        <Route element={<EditUser/>} path="/edituser" exact/>
        <Route element={<CreatePost/>} path="/createpost" exact/>
        <Route element={<EditPost/>} path="/editpost" exact/>
     </Route>
     <Route element={<NotFound/>}/>
  </Routes>
 </UserProvider>
</Router>
);
}
export default App;