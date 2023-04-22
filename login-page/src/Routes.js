import { Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './Dashboard';

const Route = () => {
    return (
        <Routes>
            <Route path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Routes>
    );
};

export default Routes;