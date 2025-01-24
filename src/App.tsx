import './App.css';
import { InfoBar } from './components/InfoBar';
import { ToolBar } from './components/ToolBar';
import { BookshelfPage } from './pages/BookShelfPage';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <div className='App'>
      <ToolBar />
      <BookshelfPage />
      <SearchPage />
      <InfoBar />
    </div>
  );
}

export default App;
