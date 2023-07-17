import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { Blog } from './pages/Blog';
import { Admin } from './pages/Admin';
// vercel analytics for page
import { Analytics } from '@vercel/analytics/react';
import { BlogPost } from './pages/BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/:id' element={<BlogPost/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
      <Analytics/>
    </Router>
  );
}

export default App;
