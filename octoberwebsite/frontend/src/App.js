
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
    <Header/>
      <div>
        <section class="section-padding">
          <div class="container">
                
                  <Route path="/" exact component={ DonutsListPage } />
                  <Route path="/donut/:id" component={DonutPage} /> 
                
          </div>
        </section>




      
      </div>
   </Router>
    
  );
}

export default App;
