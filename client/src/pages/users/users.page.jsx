import { useState, useEffect } from "react";
import axios from "../../api/axios";
import useRefreshToken from "../../hooks/useRefreshToken";

const Users = () => {
  const [users, setUsers] = useState();
  const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    //define function
    const getUsers = async () => {
      try {
        const response = await axios.get("/api/v1/users", {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    //call function
    getUsers();

    //cleanup
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Users</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users</p>
      )}

      <button onClick={() => refresh()}>refresh</button>
    </article>
  );
};

export default Users;
