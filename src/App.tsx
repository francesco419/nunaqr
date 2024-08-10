import { HashRouter, Route, Routes } from 'react-router-dom';
import Front from './front';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Front />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
