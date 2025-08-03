// App.tsx
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import HomePage from './Pages/HomePage';
// import About from './pages/About'; // only if you're using multiple routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
