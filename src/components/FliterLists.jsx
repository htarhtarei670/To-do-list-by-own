// import { useEffect } from "react";
import { useState } from "react";

const FliterLists = ({ todos }) => {
  const [category, setCategory] = useState('all')
  // const [fliterTodo,setFliterTodo]=useState([])

  const categories = [
    { name: "all", label: "All" },
    { name: "pending", label: "pending" },
    { name: 'completed', label: "Completed" }
  ]  

  // if (todos.length !== 0) {
  //   const tasks=todos
  //   if (todos.categery !== 'all') {
      
  //   }
  
  //   useEffect(() => {
  //     getFliterData()
  //   },[category])
  // }

  return (
    <>
      <div className="my-4">
        <ul className="flex justify-between mx-4 items-center">
          {
            categories.map(cat => <li key={cat.name} onClick={()=>{setCategory(cat.name)}}>{cat.label}</li>)
          }
          <li  id='clearAll'>
            <button className="bg-orange-500 p-2 text-white rounded-md">
              Clear All
            </button>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
}

export default FliterLists
