

const INITIAL_STATE = {
  newMessages:[],
  dialog:false,
  routeId:'',
  userList:[]
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FLASH_MESSAGES":
      return { ...state, newMessages: action.payload };
    case "ROUTED_ID":
      return { ...state, routeId: action.payload };
    case "ALL_USER_LIST":
      return { ...state, userList: action.payload };
    default:
       return state;
  }
 
}