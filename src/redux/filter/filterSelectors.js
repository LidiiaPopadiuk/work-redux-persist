export const activeTodos = (state) => {
    return state.todos.filter(todo => todo.completed === false)
};  

export const completedTodos = (state) => {
    return state.todos.filter(todo => todo.completed === true)
};  

export const neededTodos = (state) => {
    if (state.filter === "Completed") {
          return completedTodos(state)
    } else if (state.filter === "Active") {
          return activeTodos(state)
    } else {
          return state.todos
    }
}