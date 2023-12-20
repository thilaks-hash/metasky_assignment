import React, { useState } from "react";
import { url } from "../utlities/constants";
import useFetch from "./useFetch";
import Logout from "./Logout";

const UserName = () => {
  const { data, loading } = useFetch(url);
  const [searchText, setSearchText] = useState("");
  const users = data?.results || [];

  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <Logout />
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">S.No</th>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Email ID</th>
              <th className="py-2 px-4 border-b">Password</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.login.uuid}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{user.name.first}</td>
                <td className="py-2 px-4 border-b">{user.name.last}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.login.password}</td>
                <td className="py-2 px-4 border-b">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserName;
