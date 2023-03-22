import './App.css';
import ErrorPage from './components/ErrorPage';
import CompanyFinancial from './pages/CompanyFinancial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyFinancialDetails from './pages/Details';
import Header from './pages/Navbar';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<CompanyFinancial />} />
        <Route path='details/:id' element={<CompanyFinancialDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;
