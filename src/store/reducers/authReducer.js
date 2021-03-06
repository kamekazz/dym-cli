const initialState = {
    isAuthenticated: null,
    isLoading: false,
    user: null,
    position:''
};


export default function(state = initialState, action) {
    switch (action.type) {
      case "USER_LOADING":
        return {
          ...state,
          isLoading: true
        };
      case "USER_LOADED":
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload,
          position:action.payload.position
        };
      case "LOGIN_SUCCESS":
      case "REGISTER_SUCCESS":
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false
        };
      case "AUTH_ERROR":
      case "LOGIN_FAIL":
      case "LOGOUT_SUCCESS":
      case "REGISTER_FAIL":
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
      default:
        return state;
    }
  }