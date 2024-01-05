import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Post from'./components/Post'
import Header from'./components/Header'
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePost from'./pages/CreatePost';
import { UserContextProvider } from './components/UserContext';
function App() {
  return (
    <div>
      <BrowserRouter>
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>}/> 
        <Route path={'/login'}element={<LoginPage/>}/>
        <Route path={'/Register'}element={<RegisterPage/>}/>
        <Route path={'/Register'}element={<RegisterPage/>}/>
        <Route path={"/create"}element={<CreatePost/>}/>
        </Route>
      </Routes>
      </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
