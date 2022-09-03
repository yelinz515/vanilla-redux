import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
// import { actionCreators } from '../store';
import { addTodo } from '../store';

function Home({todos, addTodo}) {
    // console.log(todos);
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText(""); // 다 작성하고 input을 엔터하면 빈 input이 만들어진다.
        // dispatch(addTodo(text)) // dispatch함으로써 home.js에서 props를 바꿀 수 있는 힘이 생겼다.

    }

    return (
        <>
            <h1>To Dos</h1>
            <form onSubmit={onSubmit}>
                <input type='text' value={text} onChange={onChange}/>
                <button className='btn btn-primary btn-sm'>add</button>
            </form>
            {/* {JSON.stringify(todos)} */}
            <ul>
                {todos.map(todo => (
                <ToDo {...todo} key={todo.id}/> 
                ))}
                </ul> 
        </>
    )
}


// state는 store에서부터 가져온 state이다.
// 이 connet는 home으로 보내는 props에 추가될 수 있도록 허용하고 있다.
// 그래서 어떤 것이 추가되는 현재 컴포넌트인 home의 prop에 추가될 것이다.
// getCurrentState
function mapStateToProps(state) {
    return { todos : state }
}

//
function mapDispatchToProps(dispatch) {
    return { 
        addTodo: text => dispatch(addTodo(text)) // 이 함수들을 props(addTodo)로 전달하고 있다.
     }
}

// connect는 component를 store에 연결시켜 준다.
// connect 안에서 우리는 state를 받아온다. component인 home과 함께
// 우리의 home에다가 store로부터 state를 가져온다
export default connect(mapStateToProps, mapDispatchToProps) (Home);

// connect 대신 useSelector()를 쓸 수 있다?

