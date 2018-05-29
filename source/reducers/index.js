const todo = (state = 0, action) => {
    switch(action.type) {
      case 'ADD':
        return action.text.fnum + action.text.lnum
      case 'LESS':
        return action.text.fnum - action.text.lnum
      case 'MULTIPLE':
        return action.text.fnum * action.text.lnum
      case 'EXCEPT':
        return action.text.fnum / action.text.lnum
      default:
        return state
    }
  }
  export default todo