import icon from "../assets/image/icon.png";

const Header = () => {
  return (
    <div className="flex gap-2 items-center">
      <h1 className="text-2xl font-extrabold">To-Do List</h1>
      <img src={icon} alt="" className="w-8" />
    </div>
  );
};

export default Header;
