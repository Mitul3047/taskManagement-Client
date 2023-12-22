import  { useState, useEffect, useContext } from 'react';
import 'daisyui/dist/full.css';
import { AuthContext } from '../../Providers/AuthProvider';

function TaskTable() {
  const {user} = useContext(AuthContext)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://task-management-server-hazel.vercel.app/task')
      .then(response => response.json())
      .then(data => {
        // Set the fetched data to the state
        setTasks(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const userTask = tasks.filter(item => item.email === user.email)

  return (
    <div className="w-[80%] pt-10 mx-auto overflow-x-auto">
      <table className="table ">
        <thead className='bg-gray-300'>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className='bg-gray-100'>
          {userTask.map(task => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.priority}</td>
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
