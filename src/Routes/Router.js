import { createBrowserRouter } from 'react-router-dom';
import ContactComponent from '../Components/ContactComponent/ContactComponent';
import Home from '../Components/Home/Home';
import Projects from '../Components/Projects/Projects';
import Main from '../Layout/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <ContactComponent></ContactComponent>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            }
        ]
    }
])