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
import SalmonInfo from './pages/SalmonInfo';
import SturgeonInfo from './pages/SturgeonInfo';
import Legal from './pages/Legal';
import Mercury from './pages/Mercury';
import NotFound from './pages/NotFound';
import PinkSalmon from './pages/species/PinkSalmon';
import ChumSalmon from './pages/species/ChumSalmon';
import SockeyeSalmon from './pages/species/SockeyeSalmon';
import KingSalmon from './pages/species/KingSalmon';
import CohoSalmon from './pages/species/CohoSalmon';
import CherrySalmon from './pages/species/CherrySalmon';
import FishSpeciesPage from './components/FishSpeciesPage';

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
        path: 'salmon-info',
        element: <SalmonInfo />,
      },
      {
        path: 'species/pink-salmon',
        element: <PinkSalmon />,
      },
      {
        path: 'species/keta',
        element: <ChumSalmon />,
      },
      {
        path: 'species/nerka',
        element: <SockeyeSalmon />,
      },
      {
        path: 'species/chavycha',
        element: <KingSalmon />,
      },
      {
        path: 'species/kizhuch',
        element: <CohoSalmon />,
      },
      {
        path: 'species/sima',
        element: <CherrySalmon />,
      },
      // Additional salmon species using universal component
      {
        path: 'species/semga',
        element: <FishSpeciesPage speciesId="semga" />,
      },
      // Sturgeon species pages
      {
        path: 'species/beluga',
        element: <FishSpeciesPage speciesId="beluga" />,
      },
      {
        path: 'species/kaluga',
        element: <FishSpeciesPage speciesId="kaluga" />,
      },
      {
        path: 'species/russian-sturgeon',
        element: <FishSpeciesPage speciesId="russian-sturgeon" />,
      },
      {
        path: 'species/siberian-sturgeon',
        element: <FishSpeciesPage speciesId="siberian-sturgeon" />,
      },
      {
        path: 'species/sevruga',
        element: <FishSpeciesPage speciesId="sevruga" />,
      },
      {
        path: 'species/sterlet',
        element: <FishSpeciesPage speciesId="sterlet" />,
      },
      {
        path: 'species/amur-sturgeon',
        element: <FishSpeciesPage speciesId="amur-sturgeon" />,
      },
      {
        path: 'species/sakhalin-sturgeon',
        element: <FishSpeciesPage speciesId="sakhalin-sturgeon" />,
      },
      {
        path: 'sturgeon-info',
        element: <SturgeonInfo />,
      },
      {
        path: 'legal',
        element: <Legal />,
      },
      {
        path: 'mercury',
        element: <Mercury />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
