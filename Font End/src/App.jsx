import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  let [list, setTask] = React.useState("");
  const [alltodo, Setalltodo] = useState([]);

  const handleSubmit = async (e) => {
    const resposse = await axios.post("http://localhost:8000/todos/add", {
      list: list,
    });
  };

  const fetchdata = async () => {
    // const response = await axios
    try {
      let response = await axios.get("http://localhost:8000/todos");
      if (response.status === 200) {
        Setalltodo(response.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log(error)
    };
      // .get("http://localhost:8000/todos")
      // .then((res) => {
      //   Setalltodo(res.data);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });

    };
    useEffect(() => {
      fetchdata();
    }, [alltodo]);


    // delete data
    const handleDelete =(id)=>{
      console.log("delete", id);
      axios.delete('http://localhost:8000/todos/delete/${id}')
    }
    
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input
              onChange={(e) => setTask(e.target.value)}
              value={list}
              className="shadow appearance-none border out rounded outline-none w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            />
            <button
              onClick={handleSubmit}
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-emerald-500 hover:bg-teal"
            >
              Add
            </button>
          </div>
        </div>
        <div>
        {alltodo.map((item)=>{
      <div className="flex mb-4 items-center">
        <p className="w-full text-grey-darkest">
          {item.list}
        </p>
        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded  hover:text-emerald-500 text-green border-green hover:bg-green">
          Updated
        </button>
        <button onClick={()=>handleDelete(item. id)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-red-600 hover:bg-red">
          Remove
        </button>
      </div>
        })}
    </div>
      </div>
    </div>
  );
};

export default App;
