
const EditToDo = () => {
  return (
        <form
            action=""
            className="border rounded-full bg-slate-100 flex justify-between"
        >
            <input
                type="text"
                placeholder="Write today's task"
                className="px-4 py-3 bg-transparent border-none outline-none"
            
            />
            <button
                type="submit"
                className=" bg-orange-600 text-white py-3 px-8 rounded-full"
            >
            Add
            </button>
        </form>
  )
}

export default EditToDo
