
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {

  return (
    <div >

    <Router>
      <Route to="/login" element={<Login/>} />
      
    </Router>
    </div>
  );
}

export default App;
