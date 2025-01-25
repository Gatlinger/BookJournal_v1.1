import { Route, Routes } from 'react-router-dom';
import './App.css';
import { InfoBar } from './components/InfoBar';
import { ToolBar } from './components/ToolBar';
import { BookShelfPage } from './pages/BookShelfPage';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <div className='App'>
      <ToolBar />
      <Routes>
        <Route path='/' element={<BookShelfPage />} />
        <Route path='/*' element={<BookShelfPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
      <InfoBar />
    </div>

  );
}

export default App;
