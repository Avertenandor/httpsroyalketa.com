import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import Home from './pages/Home';
import HatcheryTour from './pages/HatcheryTour';
import Science from './pages/Science';
import Caviar from './pages/Caviar';
import Investment from './pages/Investment';
import Tokenization from './pages/Tokenization';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Partners from './pages/Partners';
import Crabbing from './pages/Crabbing';
import Legal from './pages/Legal';
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
        path: 'tokenization',
        element: <Tokenization />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
      },
      {
        path: 'faq',
        element: <FAQ />,
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
        path: 'partners',
        element: <Partners />,
      },
      {
        path: 'crabbing',
        element: <Crabbing />,
      },
      {
        path: 'legal',
        element: <Legal />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
