import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import { About, Home, Projects, Contact, Education, Experience } from './pages';

const App = () => {
  return (
    <div>
        <h1 className='bg-slate-300/20'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
            </Router>
        </h1>
    </div>
  )
}

export default App