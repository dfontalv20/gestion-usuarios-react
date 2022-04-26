import { createContext, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

export const UsersContext = createContext();

function App() {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div className="container">
        <h1 className="text-center my-4">GESTION DE USUARIOS</h1>
        <div className="row">
          <div className="col-md-3">
            <UserForm />
          </div>
          <div className="col-md-9">
            <UsersList />
          </div>

        </div>

      </div>
    </UsersContext.Provider>
  );
}

export default App;
