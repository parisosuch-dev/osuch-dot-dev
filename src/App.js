import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
// vercel analytics for page
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
      </Routes>
      <Analytics/>
    </Router>
  );
}

export default App;
