import { IoSearchSharp } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className=" relative Row-center font-medium text-[1.2rem] text-white">
      <i className="absolute right-2 !bg-primary-600">
        <IoSearchSharp className="size-7 !bg-transparent" />
      </i>
      <input
        placeholder="Searching..."
        className="p-3 outline-none rounded-xl bg-primary-600"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default Searchbar;
