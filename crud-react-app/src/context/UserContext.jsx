import { createContext, useContext, useEffect, useReducer } from "react";
import UserReducer from "../reducer/userReducer/UserReducer";
import { USER_API_INSTANCE } from "../AxiosInstance/UserAxiosInstance";
export const UserContextApi=createContext();
const initialState={
    users:null,
    singleUser:null,
    isLoading:true,
}

const UserProvider=({children})=>{
    let [users,dispatch]=useReducer(UserReducer,initialState)
    let fetchUsers=async()=>{
        let {data}=await USER_API_INSTANCE.get('/users')
        console.log(data)
        dispatch({type:"FETCH",payload:data})
    };
    const fetchSingleUser=async (id)=>{
        try {
            let {data}=await USER_API_INSTANCE.get(`/users/${id}`);
            dispatch({type:'SINGLE_USER',singleUser:data})
            console.log(data)
        } catch (error) {
            console.log(error)
            
        }
    }
    return <UserContextApi.Provider value={{users,fetchUsers,fetchSingleUser}}>{children}</UserContextApi.Provider>
};


export default UserProvider;

//custom hook
// export let UseAllUsers=()=>{
//     const {users,fetchUsers}=useContext(UserContextApi)
//     useEffect(()=>{
//         fetchUsers()
//     },[])
//     return users;
// }