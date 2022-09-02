import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import TablePage from './pages/TablePage';
import { BrowserRouter as Router } from 'react-router-dom';
import {Body} from './routes/index';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Body/>
    </div>
    </Router>
  );
}

export default App;
