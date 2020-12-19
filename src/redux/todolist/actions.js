import { FETCH_TODO_SUCCESS, EDIT_LOADING } from './type';
import axios from 'axios';

export const fetchTodo = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3001/todos')
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          //store data to redux
          dispatch({ type: FETCH_TODO_SUCCESS, payload: res.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const EditTodo = (editedTodo) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    title: editedTodo.title,
    completed: editedTodo.completed,
  });

  return (dispatch) => {
    dispatch({ type: EDIT_LOADING });
    axios
      .put(`http://localhost:3001/todos/${editedTodo.id}`, body, headers)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          //store data to redux
          dispatch(fetchTodo());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const CreateTodo = (newTodo) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    title: newTodo.title,
    completed: newTodo.completed,
  });

  return (dispatch) => {
    axios
      .post('http://localhost:3001/todos/', body, headers)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          //store data to redux
          dispatch(fetchTodo());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const DeleteTodo = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          //store data to redux
          dispatch(fetchTodo());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
