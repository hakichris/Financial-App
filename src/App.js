import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import CompanyFinancial from './pages/CompanyFinancial';
import CompanyFinancialDetails from './pages/Details';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CompanyFinancial />} />
          <Route path="details/:id" element={<CompanyFinancialDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
