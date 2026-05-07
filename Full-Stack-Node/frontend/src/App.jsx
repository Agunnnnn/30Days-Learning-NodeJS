import UserList from "./components/userList";
import AddUser from "./components/addUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<UserList />} />
                    <Route path='/add' element={<AddUser />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
