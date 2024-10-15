import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import CreateUser from './components/CreateUser';
import Update from './components/Update';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<Update />} /> {/* Corrected route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
