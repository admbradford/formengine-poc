import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import DefaultForm from './DefaultForm'
import CustomizedFormLayout from './CustomizedFormLayout'
import CustomFields from './CustomFields'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Default Form</Link>
        <Link to="/customized">Customized Form</Link>
        <Link to="/custom-fields">Custom Fields</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DefaultForm />} />
        <Route path="/customized" element={<CustomizedFormLayout />} />
        <Route path="/custom-fields" element={<CustomFields />} />
      </Routes>
    </Router>
  )
}

export default App