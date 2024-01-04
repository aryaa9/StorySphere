import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from'./pages/Home'
import Header from'./components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={
          <main>
          <Header />
         <Home/>
         <Home/>
         <Home/>
         </main>
        }/> 
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
