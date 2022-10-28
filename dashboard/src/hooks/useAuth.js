import {useState , useContext} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { UserContext } from './UserContext'


export default function useAuth(){
    let history = useHistory()
    const {setUser} = useContext(UserContext)
    const [error,setError] = useState(null)

    const setUserContext = async ()=>{
        return await axios.get('/user').then(res=>{
            setUser(res.data.currentUser)
            history.push('/dashboard')
        }).catch((err)=>{
            setError(err.response.data)
        })
    }

const loginUser = async (data) => {
    const { username, password } = data;
        return axios.post(`api/adminLogin`, {
           username, password
        }).then(async () => {
            await setUserContext();
        }).catch((err) => {
            setError(err.response.data);
   })
}

   return{
    loginUser,
    error
   }
}