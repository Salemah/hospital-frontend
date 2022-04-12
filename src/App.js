import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Login/Login';
import AdminDashboard from './Pages/AminDashboard.js/AdminDashboard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/dashboard">
         <AdminDashboard></AdminDashboard>
       </Route>
       </Switch></BrowserRouter>
    </div>
  );
}

export default App;
