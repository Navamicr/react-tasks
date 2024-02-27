const UserReducer=(state,action)=>{
  let {singleUser}=action;
   switch(action.type){
    case'FETCH':
      return{
        ...state,
        users:action.payload,
        isLoading:false
      };
    case 'SINGLE_USER':
      // let filteredData=state.filter(user=>user.id===user.id);
      return{
        ...state,
        // filteredData,
        singleUser,
      }
    default:
        return{
            state,
        }
   }
}

export default UserReducer