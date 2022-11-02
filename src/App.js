import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home_Index from './pages/home_page/Home_Index';
import List_Index from './pages/list/List_Index';
import Hotel_Index from './pages/single_page/Hotel_Index';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_Index />} />
        <Route path="/hotels" element={<List_Index />} />
        <Route path="/hotels/:id" element={<Hotel_Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
