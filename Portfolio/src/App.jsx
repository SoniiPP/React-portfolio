
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './styles/App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;