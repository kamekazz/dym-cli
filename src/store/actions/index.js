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

export const signin = (formProps, callback) => async dispatch => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/accounts/login`,
        formProps
      )
      if (response.data.success) {
        dispatch(newMassages(response.data.message,response.data.success))
        localStorage.setItem('token', response.data.token)
        dispatch({ type: AUTH_USER, payload: response.data.token })
        dispatch({ type: AUTH_USER_INFO, payload: response.data.user })
  
        callback(true)
      }else{
  
        dispatch(newMassages(response.data.message,response.data.success))
        callback(false)
      }
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
    }
  };

