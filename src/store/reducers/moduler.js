const initialState = {
    addModuler:false,
    asment:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'ASMENT':
    return { ...state, asment: payload }
  case 'ADDMODULER':
    return { ...state, addModuler: payload }
  default:
    return state
  }
}
