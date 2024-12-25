import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, HomeLayout, Landing, Error, NewsLetter, Cocktail, SinglePageError } from './pages';
import { loader as LandingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsLetterAction } from './pages/NewsLetter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: LandingLoader(queryClient),
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        element: <Cocktail />,

        loader: singleCocktailLoader(queryClient),
      },
      {
        path: 'NewsLetter',
        element: <NewsLetter />,
        action: newsLetterAction,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
