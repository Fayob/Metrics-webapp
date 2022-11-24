import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import './App.css';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
