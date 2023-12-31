import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionType";
import { initialState } from "./initialState";

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
    return maxId + 1;

}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state)

                }
            ]
        case TOGGLED:
            return state.map((todo => {
                if(todo.id !== action.payload){
                    return todo;
                }else{
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                    
                }
            }))

        case COLORSELECTED:
            const {todoId, color} = action.payload;
            return state.map((todo)=>{
                if(todo.id !== todoId){
                    return todo;
                }return{
                    ...todo,
                    color:color
                }
            })
        
        case DELETED:
            return state.filter((todo)=>todo.id !== action.payload)
        
        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed:true
                }
            })
        
        case CLEARCOMPLETED:
            return state.filter(todo => todo.completed != true)
        default:
            state;
    }
}

export default todoReducer;