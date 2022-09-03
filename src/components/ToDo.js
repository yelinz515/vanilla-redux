import React from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
import { deleteTodo } from '../store';
import { Link } from 'react-router-dom'

function ToDo({text, onBtnClick, id}){
    return (
        <li>
            <Link to={`${id}`}>
                {text}
            </Link>
            <button className='btn btn-danger btn-sm'
                onClick={onBtnClick}>DEL</button>
        </li>
    )
}

function mapStateToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(deleteTodo(ownProps.id))
    }
}

export default connect(null, mapStateToProps) (ToDo);