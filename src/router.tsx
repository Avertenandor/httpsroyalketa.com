import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import Home from './pages/Home';
import HatcheryTour from './pages/HatcheryTour';
import Science from './pages/Science';
import Caviar from './pages/Caviar';
import Investment from './pages/Investment';
import Contacts from './pages/Contacts';
import About from './pages/About';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hatchery-tour',
        element: <HatcheryTour />,
      },
      {
        path: 'science',
        element: <Science />,
      },
      {
        path: 'caviar',
        element: <Caviar />,
      },
      {
        path: 'investment',
        element: <Investment />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
