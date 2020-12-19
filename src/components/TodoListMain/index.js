import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown';
import {
  TodoListContainer,
  TodoListWrapper,
  ProgessBarBoxWrapper,
  ProgessBarWrapper,
  ProgressBar,
  ProgessBarTextWrapper,
  ListBoxWrapper,
  TodoListGridBox,
  TopOption,
  TitleWrapper,
  ProgressTextComplate,
} from './styled';
import ListTodo from '../ListTodo';
import { fetchTodo } from '../../redux';
import { useSelector, useDispatch } from 'react-redux';

const TodoListMain = () => {
  const TodoList = useSelector((state) => state.todoList.todo);
  const dispatch = useDispatch();
  const [ShowTodoList, setShowTodoList] = useState([]);
  const [Filter, setFilter] = useState('All');

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  useEffect(() => {
    setShowTodoList(TodoList);
    filterHandler();
  }, [TodoList]);

  useEffect(() => {
    filterHandler();
  }, [Filter]);

  const [CheckedList, setCheckedList] = useState([]);

  const handleCheckedBox = (list) => {
    CheckedList.find((check) => check._id === list._id)
      ? setCheckedList(CheckedList.filter((check) => check._id !== list._id))
      : setCheckedList([...CheckedList, list]);
  };

  const filterHandler = () => {
    let FilterTodo = [...TodoList];
    switch (Filter) {
      case 'Done':
        FilterTodo = TodoList.filter((e) => e.completed === true);
        break;
      case 'Undone':
        FilterTodo = TodoList.filter((e) => e.completed === false);
        break;
      default:
        break;
    }

    setShowTodoList(FilterTodo);
  };

  const onChangeFilter = (type) => {
    setFilter(type);
  };

  const calProgress = () => {
    const total = TodoList.length;
    const completed = TodoList.filter((e) => e.completed === true).length;

    const percent = (completed / total) * 100;

    return percent;
  };

  const completedTasks = () => {
    return TodoList.filter((e) => e.completed === true).length;
  };

  return (
    <TodoListContainer>
      <TodoListWrapper>
        <TodoListGridBox>
          <ProgessBarBoxWrapper>
            <ProgessBarWrapper>
              <ProgessBarTextWrapper>Progress</ProgessBarTextWrapper>
              <ProgressBar percent={calProgress} />
              <ProgressTextComplate>
                {completedTasks()} completed
              </ProgressTextComplate>
            </ProgessBarWrapper>
          </ProgessBarBoxWrapper>
          <TopOption>
            <TitleWrapper>Tasks</TitleWrapper>
            <Dropdown filter={onChangeFilter} btn="All" />
          </TopOption>
          <ListBoxWrapper>
            <ListTodo
              TodoList={ShowTodoList ? ShowTodoList : TodoList}
              handleCheckedBox={handleCheckedBox}
              CheckedList={CheckedList}
            />
          </ListBoxWrapper>
        </TodoListGridBox>
      </TodoListWrapper>
    </TodoListContainer>
  );
};

export default TodoListMain;
