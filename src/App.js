import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router} from './Routes/Router';

function App() {
  return (
    <div className="container mx-auto font-serif p-2 md:p-0">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
