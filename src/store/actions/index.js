
import axios from 'axios'
const apiUrl = 'https://coloco.herokuapp.com'

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
        dispatch({ type: "AUTH_USER", payload: response.data.token })
        dispatch({ type: "AUTH_USER_INFO", payload: response.data.user })
        console.log(response.data);
        callback(true)
      }else{
        dispatch(newMassages(response.data.message))
        callback(false)
      }
    } catch (e) {
      dispatch({ type: "AUTH_ERROR", payload: 'Invalid login credentials' });
    }
};

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
