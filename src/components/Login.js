import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../utlities/userSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="w-[250px] md:w-[350px] bg-red-600 my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 p-7  sm:w-[250px]"
      >
        <h1 className="font-bold text-3xl py-4 px-10 text-center">Login</h1>

        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mr-7 p-3 mt-5 text-black w-full"
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mr-7 p-3 mt-5 text-black w-full"
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mr-7 p-3 mt-5 text-black w-full"
        ></input>
        <button
          type="submit"
          className="text-black w-full bg-white p-3 mt-5  hover:text-white hover:bg-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
