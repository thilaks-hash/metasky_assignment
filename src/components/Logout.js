import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../utlities/userSlice";
const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="flex">
      <h1 className="p-10">
        Welcome{" "}
        <span className="user_name text-amber-400 text-xl">{user.name}</span>
      </h1>
      {""}
      <button
        className="bg-black mt-5 p-2 mb-5 rounded-md text-white"
        onClick={(e) => handleLogout(e)}
      >
        Logout
      </button>
    </div>
  );
};
export default Logout;
