import { Route, Routes } from 'react-router-dom';
import MainPage from '../../../pages/MainPage/MainPage';
import HomePage from '../../../pages/HomePage/HomePage';
import ProjectPage from '../../../pages/ProjectPage/ProjectPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainPage />} path="/">
                <Route element={<HomePage />} path="/"></Route>
                <Route element={<ProjectPage />} path="/project/:id"></Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
