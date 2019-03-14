

const INITIAL_STATE = {
  newMessages:[],
  dialog:false,
  routeId:''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FLASH_MESSAGES":
      return { ...state, newMessages: action.payload };
    case "ROUTED_ID":
      return { ...state, routeId: action.payload };
    default:
       return state;
  }
 
}