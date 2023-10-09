import { useState,useRef } from "react";

const EachToDoList = ({todo}) => {
    const [show, setShow] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const menu = useRef();

  // show condition for dropdown menu
  if (menu.current !== undefined) {
    show
      ? (menu.current.style.display = "block")
      : (menu.current.style.display = "none");
  }

    const clickHandler = () => {
        isCheck ? (todo.categery = "pending") : (todo.categery = "completed");
        setIsCheck(!isCheck)
    } 

    // edit handler
    const editHandler = () => {
        
    }
    
  return (
    <div className="py-4">
      <div className="flex justify-between">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            className="mt-2 accent-orange-500"
            checked={isCheck}
            readOnly
          />
          <div className="" onClick={clickHandler}>
            <span
              className={`decoration-orange-500	decoration-2 ${
                isCheck ? "line-through" : ""
              }`}
            >
              {todo.task}
            </span>
            <p className="text-[.7rem] text-slate-500">{todo.date}</p>
          </div>
        </div>

        <div className="" onClick={() => setShow(!show)}>
          <span>
            <i className="ri-more-fill text-2xl ps-40"></i>
          </span>

          <div
            ref={menu}
            className="absolute hidden right-2 z-10  w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <ul className="">
                <li className="py-3 hover:bg-orange-100 px-4" onClick={editHandler}>Edit</li>
                <li className="py-3 hover:bg-orange-100 px-4">Delete</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachToDoList