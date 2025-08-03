import { HashRouter as Router } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        {/* <h1 style={{ color: 'red' }}>App loaded</h1> */}
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
