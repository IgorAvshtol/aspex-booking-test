import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from '@/pages/Home';
import { Profile } from '@/pages/Profile';
import { Booking } from '@/pages/Booking';

export const routes = [
  { id: 1, path: '/', element: <Home /> },
  { id: 2, path: '/profile', element: <Profile /> },
  { id: 3, path: '/booking/:title', element: <Booking /> },
];

export function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element, id }) => (
            <Route path={path} element={element} key={id} />
          ))}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
