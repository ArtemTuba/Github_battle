import {createBrowserRouter} from 'react-router-dom';
import HomePage from './page/Home/HomePage';
import PopularPage from './page/Popular/PopularPage';
import BattlePage from './page/Battle/BattlePage';
import Nav from './components/Nav';
import Results from './page/Battle/Results';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
                    <Nav/>
                </div>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/popular',
                element: <PopularPage/>
            },
            {
                path: '/battle',
                element: <BattlePage/>
            },
            {
                path: 'battle/results',
                element: <Results/>
            },
        ]
    }
    
])

export default router;