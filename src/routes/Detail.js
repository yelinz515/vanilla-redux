import React from 'react';
import { connect} from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({toDos}) {
    const { id } = useParams();
    const toDo = toDos.find(todo => todo.id === parseInt(id))
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Create at:{toDo?.id}</h5>
            <form>
                <h3>상세내용</h3>
                <textarea></textarea>
            </form>
            <button>save</button>
        </>
    )
}

/** 강의대로 하면 react-router-dom 버전 6부터 오류난다. Home.js와 비슷하게 구현하면 된다. */
function mapStateToProps(state) {
    return { toDos: state };
}
  
export default connect(mapStateToProps)(Detail);