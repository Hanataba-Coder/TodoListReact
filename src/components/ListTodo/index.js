import React, { useState, useEffect } from 'react';
import Checkbox from '../CheckboxTodoList';
import {
  ListWrapper,
  List,
  SettingIcon,
  ListInput,
  InlineFlex,
  SaveBtn,
  CancelBtn,
} from './styled';
import ListOptionDropdown from '../ListOptionDropdown';
import { EditTodo, CreateTodo, DeleteTodo } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

const ListTodo = ({ CheckedList, handleCheckedBox, TodoList }) => {
  const loadingEdit = useSelector((state) => state.todoList.loading);
  const [Text, setText] = useState('');
  const [Edit, setEdit] = useState('');
  const [NewTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setEdit('');
  }, [TodoList]);

  const toggleEdit = (id) => {
    setText('');
    setEdit(id);
  };

  const handlerEdit = (editTodo) => {
    console.log(editTodo);
    const editedTodo = {
      id: editTodo.id,
      completed: editTodo.completed,
      title: Text,
    };

    dispatch(EditTodo(editedTodo));
  };

  const handlerChecked = (editTodo) => {
    console.log(editTodo);
    const editedTodo = {
      id: editTodo.id,
      completed: !editTodo.completed,
      title: editTodo.title,
    };

    dispatch(EditTodo(editedTodo));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newTodo = {
        completed: false,
        title: NewTodo,
      };

      dispatch(CreateTodo(newTodo));
      setNewTodo('');
    }
  };

  const CancelEdit = () => {
    setEdit('');
  };

  return (
    <ListWrapper>
      {TodoList.map((e) => (
        <List key={e.id}>
          <InlineFlex style={{ width: '100%' }}>
            {Edit !== e.id && (
              <Checkbox
                checked={e.completed}
                onClick={() => handlerChecked(e)}
              />
            )}
            <ListInput
              disabled={Edit !== e.id}
              defaultValue={e.title}
              value={Edit === e.id ? null : e.title}
              checked={e.completed}
              onChange={(e) => setText(e.target.value)}
            />
          </InlineFlex>
          {Edit === e.id && (
            <InlineFlex>
              <SaveBtn onClick={() => handlerEdit(e)}>
                {loadingEdit ? 'Saving' : 'SAVE'}
              </SaveBtn>
              <CancelBtn onClick={CancelEdit}>Cancel</CancelBtn>
            </InlineFlex>
          )}
          {Edit !== e.id && (
            <ListOptionDropdown
              option={[
                { name: 'Edit', click: () => toggleEdit(e.id) },
                {
                  name: 'Delete',
                  color: 'red',
                  click: () => dispatch(DeleteTodo(e.id)),
                },
              ]}
              btn={<SettingIcon>...</SettingIcon>}
            />
          )}
        </List>
      ))}
      <List>
        <ListInput
          placeholder="Add your todo..."
          onChange={(e) => setNewTodo(e.target.value)}
          value={NewTodo}
          onKeyDown={handleKeyDown}
        />
      </List>
    </ListWrapper>
  );
};

export default ListTodo;
