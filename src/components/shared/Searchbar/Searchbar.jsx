import { IoSearchSharp } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className=" relative Row-center">
      <i className="absolute right-2 bg-Lightsky text-black ">
        <IoSearchSharp className="size-8 bg-transparent" />
      </i>
      <input
        placeholder="Searching..."
        className="p-3 outline-none rounded-xl bg-Lightsky placeholder:text-black"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default Searchbar;
