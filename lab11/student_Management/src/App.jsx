import './App.css'
import { useContext } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './components/context/StudentContext'
import Home from './components/Page/home'
import StudentPage from './components/Page/student'
import Contact from './components/Page/contacts'

function App() {
  const { themeText, setThemeText } = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <div className="app-shell">
        <div className="heading-row">
          <h1>College Management System</h1>
          <button
            className="header-theme-btn"
            onClick={() => setThemeText((prev) => (prev === 'Light' ? 'Dark' : 'Light'))}
          >
            {themeText}
          </button>
        </div>

        <nav className="top-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/student">Student</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/student' element={<StudentPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
