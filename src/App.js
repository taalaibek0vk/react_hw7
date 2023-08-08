import React, { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue) {
      setTasks([inputValue, ...tasks]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = (
      <span style={{ textDecoration: 'line-through' }}>{tasks[index]}</span>
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Список задач</h1>
      <div className='container'>
        <input
        placeholder='Введи задачу!'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Удалить</button>
            <button onClick={() => toggleTask(index)}>Зачеркнуть</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};