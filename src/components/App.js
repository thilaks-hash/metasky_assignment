import Login from "./Login";
import { useSelector } from "react-redux";
import UserName from "./UserName";
import { selectUser } from "../utlities/userSlice";
const App = () => {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <div>{user ? <UserName /> : <Login />}</div>
    </div>
  );
};

export default App;
