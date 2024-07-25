import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Users = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();
  const [users, setUsers] = useState();

  useEffect(() => {
    console.log("Component mounted");
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/api/v1/users", {
          signal: controller.signal,
        });
        console.log("Response received:", response.data);
        isMounted && setUsers(response.data);
      } catch (error) {
        if (error.name === "CanceledError") {
          console.log("Request canceled");
        } else {
          console.error(error);
          // navigate("/login", { state: { from: location }, replace: true });
        }
      }
    };

    //call function
    getUsers();

    //cleanup
    return () => {
      console.log("Cleanup called");
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
    </article>
  );
};

export default Users;
