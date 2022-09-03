import {createStore} from "redux";
import {configureStore, createAction, createReducer, createSlice, getDefaultMiddleware} from "@reduxjs/toolkit"

// const ADD = "ADD"
// const DELETE = "DELETE"

/** action creator  - before toolkit*/
// const addTodo = (text) => {
//     return {
//         type: ADD,
//         text
//     }
// }

// const deleteTodo = (id) => {
//     return {
//         type: DELETE,
//         id: parseInt(id)
//     }
// }

/** reducer  - before toolkit*/
// const reducer = (state= localStorageStore, action)=> {
//     switch(action.type) {
//         case addTodo.type:
//             return save([...state, {text:action.payload, id:Date.now()}]);
//         case deleteTodo.type:
//             return save(state.filter(todo => todo.id !== action.payload));
//         default:
//             return state;
//     }

// }

/** before createSlice(action, reducer) */
// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const reducer = createReducer([], {
//     [addTodo]: (state, action ) => {
//         /** 기존 x 새로운 리스트만 넣으면 됨 (toolkit에서는 mutate해도 상관없다) */
//         // return 하지 않았다. return을 할 때는 꼭 새로운 state여야 가능하다. delete처럼
//         // 현재 비어있는 state에 push를 하고 있다
//         state.push({text:action.payload, id:Date.now()})
//     },
//     [deleteTodo]: (state, action ) => 
//     // filter 새로운 배열 리턴하기 때문에 return이 가능하다
//     state.filter(todo => todo.id !== action.payload)
// });

/** local storage에 리스트 저장하기 */
const localStorageMiddleware = JSON.parse(window.localStorage.getItem("todostore"));

// createSlice(action, reducer)제공
const todos = createSlice({
    name: 'toDosReducer',
    initialState: localStorageMiddleware || [],
    reducers: {
        addTodo: (state, action ) => {
            const newToDo = {text:action.payload, id:Date.now()};
            state.push(newToDo);
            window.localStorage.setItem("todostore", JSON.stringify(state));
        },
        deleteTodo: (state, action ) => {
            const filteredToDos = state.filter(todo => todo.id !== action.payload)
            window.localStorage.setItem("todostore", JSON.stringify(filteredToDos));
            return filteredToDos;
        }
    },

});


const store = configureStore({
    reducer: 
    todos.reducer
});





// const store = createStore(reducer)



/** before createSlice(action, reducer) */
// export const actionCreators = {
//     addTodo,
//     deleteTodo
// }

export const {
    addTodo,
    deleteTodo
} = todos.actions

// store.subscribe(); // store의 변동사항에 대해 subscribe를 한다. 모든게 다시 리렌더링되기를 원한다

// store.getState() // 현재의 state를 전달한다
export default store;