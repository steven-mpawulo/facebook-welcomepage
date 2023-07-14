import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetPassword from './components/reset_password/ResetPassword';
import CreatePage from "./components/create_page/CreatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/forgot-password" element={<ResetPassword />}></Route>
        <Route path="/create-page" element={<CreatePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
