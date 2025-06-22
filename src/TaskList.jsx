import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div style={styles.container}>
      <h3>Completed Tasks</h3>
      <ul style={styles.list}>
        {tasks.map(task =>
          task.completed && (
            <li key={task.id} style={styles.item}>
              <span style={styles.checkmark}>✓</span> {task.title}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '400px'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  item: {
    padding: '8px 0',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center'
  },
  checkmark: {
    color: 'green',
    marginRight: '10px',
    fontWeight: 'bold'
  }
};

export default TaskList;
