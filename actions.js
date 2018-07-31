
let nextId = 0

export const addTodo = text => ({
    type: 'CREATE',
    id: nextId++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE',
    id
})

export const deleteTodo = id => ({
    type: 'DELETE',
    id
})