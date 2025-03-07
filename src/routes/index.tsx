
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Team from '../Pages/Team';
import TeamDetails from '../Pages/TeamDetails';
import Players from '../Pages/Player';
import PlayerDetails from '../Pages/PlayerDetails';

const PelicansRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />\
            <Route path='/teams' element={<Team />} />
            <Route path='/teams/:id' element={<TeamDetails />} />
            <Route path='/players/:teamId' element={<Players />} />
            <Route path='/players/:teamId/:playerId' element={<PlayerDetails />} />
            <Route path='/analysis' element={<> </>} />
        </Routes>
    );
};

export default PelicansRoutes;