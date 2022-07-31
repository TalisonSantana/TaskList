import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Tasks from './pages/Tasks';

function RoutesApp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/tasks' element={ <Tasks/> } />
      <Route path='*' element={ <Error/> } />
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;