import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const PostTask = () => {
  const {user} = useContext(AuthContext)
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'low',
    dueDate: '',
    status: 'pending',
    email: user.email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://task-management-server-hazel.vercel.app/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if (!response.ok) {
        throw new Error('Failed to post task');
      }

      // Reset form after successful submission
      setTask({
        title: '',
        description: '',
        priority: 'low',
        dueDate: ''
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Error posting task:', error);
    }
  };

  return (
   <div className='text-slate-300'>
     <div className="max-w-md mx-auto bg-gray-400 p-6 mt-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add a Task</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="taskTitle" className="block text-gray-700 font-semibold mb-2">Task Title</label>
          <input type="text" id="taskTitle" required name="title" value={task.title} onChange={handleChange} placeholder="Enter task title" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black" />
        </div>

        <div className="mb-4">
          <label htmlFor="taskDescription" className="block text-gray-700 font-semibold mb-2">Task Description</label>
          <textarea id="taskDescription" required name="description" value={task.description} onChange={handleChange} placeholder="Enter task description" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="taskPriority" className="block text-gray-700 font-semibold mb-2">Priority</label>
          <select id="taskPriority" required name="priority" value={task.priority} onChange={handleChange} className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-gray-700 font-semibold mb-2">Due Date</label>
          <input type="date" id="dueDate" name="dueDate" value={task.dueDate} onChange={handleChange} className="text-black w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Task</button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default PostTask;
