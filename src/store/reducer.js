

const INITIAL_STATE={
    user: [],
    data:[],
    register:[],
    login:[],
};

const AppReducer =(state = INITIAL_STATE,action)=>{
    console.log("reducer==>",action)
    switch (action.type){
        case "GETDATA":
            return{
                ...state,
                user:action.user
            }
        case "GETTABLEDATA":
                return{
                    ...state,
                    data:action.data
                }
        case "REGISTERDATA":
                    return{
                        ...state,
                        register:action.user
                    }
        case "LOGINDATA":
                        return{
                            ...state,
                            login:action.user
                        }
        default:
                return state
    }
    
}

export default AppReducer;
