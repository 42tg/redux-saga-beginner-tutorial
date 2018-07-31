export default function counter(state = [], action) {
  console.log(action)
  switch (action.type) {
    case 'CREATE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE':
      return state.map(
        todo => (todo.id === action.id) 
          ? {...todo, completed: !todo.completed} 
          : todo
      )
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}
