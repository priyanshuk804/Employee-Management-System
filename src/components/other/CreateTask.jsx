import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  // You can keep newTask state if you like, but it's not needed
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a task object locally
    const task = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true, // key matches your employee object
      failed: false,
      completed: false,
    };

    // Update userData immutably
    const updatedData = userData.map((elem) => {
      if (assignTo === elem.firstname) {
        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskCount: {
            ...elem.taskCount,
            newTask: elem.taskCount.newTask + 1,
          },
        };
      }
      return elem;
    });

    // Update state and localStorage
    setUserData(updatedData);
    console.log(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));

    // Reset form fields
    setTitle("");
    setCategory("");
    setAssignTo("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex w-full flex-wrap items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design,dev,etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
