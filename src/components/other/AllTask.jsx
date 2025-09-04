import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
   const [employees] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 h-60  rounded ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 bg-red-600">Employee Name</h2>
        <h3 className="w-1/5 bg-red-600">New Task</h3>
        <h5 className="w-1/5 bg-red-600">Active Task</h5>
        <h5 className="w-1/5 bg-red-600">Completed</h5>
        <h5 className="w-1/5 bg-red-600">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        
        {employees.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className=" border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 font-bold">{elem.firstname}</h2>
              <h3 className="w-1/5 text-white font-bold">
                {elem.taskCount.newTask}
              </h3>
              <h5 className="w-1/5 text-white font-bold">
                {elem.taskCount.active}
              </h5>
              <h5 className="w-1/5 text-white font-bold">
                {elem.taskCount.completed}
              </h5>
              <h5 className="w-1/5 text-white font-bold">
                {elem.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
