
import axios from 'axios'
// const apiUrl = 'https://coloco.herokuapp.com'
const apiUrl = 'http://127.0.0.1:5000'

export const acModular = (prVal) => {
    let payload = prVal
    return {
        type: 'ADDMODULER',
        payload: payload
    };
}

export const acModularAsment = (prVal) => {
    let payload = prVal
    return {
        type: 'ASMENT',
        payload: payload
    };
}

//Autn 


export const acSignin = (formProps, callback) => async dispatch => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/accounts/login`,
        formProps
      )
      if (response.data.success) {
        dispatch(newMassages(response.data.message,response.data.success))
        localStorage.setItem('token', response.data.token)
        dispatch({ type: "USER_LOADED", payload: response.data.user })
        callback(true)
      }else{
        dispatch({ type: "LOGIN_FAIL"})
        dispatch(newMassages(response.data.message))
        callback(false)
      }
    } catch (e) {
      dispatch(newMassages(e))
      dispatch({ type: "AUTH_ERROR"});
    }
};

export const acSignOut = () => dispatch => {
  dispatch(newMassages("LOGOUT_SUCCESS"))
  return {
    type: "LOGOUT_SUCCESS",
  }
}



////messages

export const newMassages = (text) => {
    let payload = {
      text:text
    }
    return {
      type: "FLASH_MESSAGES",
      payload: payload
    };
}


///routes

export const acRoute = (text) => {
  let payload = {
    text:text
  }
  return {
    type: "ROUTED_ID",
    payload: payload
  };
}
