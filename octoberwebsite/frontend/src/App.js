
import{
  HashRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import DonutsListPage from './pages/DonutsListPage'
import DonutPage from './pages/DonutPage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
        <Header/>
        <Route path="/" exact component={ DonutsListPage } />
        <Route path="/donut/:id" component={DonutPage} /> 
        </div>
      </div>
   </Router>
  );
}

export default App;
