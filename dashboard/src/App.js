import './App.css';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import CreateMember from './pages/CreateMember';
import CreateSponsor from './pages/CreateSponsor';
import { UserProvider } from './hooks/UserContext';
import { useState } from 'react';
import EditMember from './pages/EditMember';
import MemberPage from './pages/MemberPage'
import PostPage from './pages/PostPage'
import AddPostImages from './pages/AddPostImages'


function App() {

   const [user , setUser] = useState(null);

return (
 <Router basename='/api/'>
 <UserProvider user={user} setUser={setUser}>
   <Routes>
     <Route index element={<Login />}/>
     <Route element={<PrivateRoute user={user}/>}>
        <Route element={<Dashboard/>} path="/dashboard"  exact/>
        <Route element={<CreateMember/>} path="/createmember"  exact/>
        <Route element={<EditMember/>} path="/editmember" exact/>
        <Route element={<CreatePost/>} path="/createpost" exact/>
        <Route element={<EditPost/>} path="/editpost" exact/>
        <Route element={<AddPostImages/>} path="/addpostimages" exact/>
        <Route element={<CreateSponsor/>} path="/createsponsor" exact/>
        <Route element={<MemberPage/>} path="/member/:academic_id" exact/>
        <Route element={<PostPage/>} path="/post/:post_id" exact/>
     </Route>
     <Route element={<NotFound/>}/>
  </Routes>
 </UserProvider>
</Router>
);
}
export default App;