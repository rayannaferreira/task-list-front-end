import { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, onClickCallBack, onDeleteCallBack}) => {
  //const [complete, setComplete] = useState(isComplete);
  let buttonClass = '';
  if (isComplete){
  buttonClass='tasks__item__toggle--completed';
  }

  const handleToggle = () => {
  onClickCallBack(id);

  };
  const handleDelete = () => {
    onDeleteCallBack(id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={handleToggle}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={handleDelete}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onClickCallBack: PropTypes.func,
  onDeleteCallBack: PropTypes.func,
};

export default Task;
