
import {
	FaHome,
	FaBasketballBall,
} from 'react-icons/fa';
import { GiBasketballBasket, GiBasketballJersey } from "react-icons/gi";
import { PiBasketballFill } from "react-icons/pi";
import * as S from './styles';
import { SidebarLink } from './Components/SidebarLink';
import { useLocation } from 'react-router-dom';

export function Sidebar() {

	const { pathname } = useLocation();

	function SidebarContent() {
		return (
			<S.SidebarContainer>
				<S.CompanyDisplay>
					<S.CompanyLogo>
						<img
							src={'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/no.png'}
							alt={`Logo da new Orleans pelicans`}
						/>
					</S.CompanyLogo>

					<span>New Orleans pelicans</span>
				</S.CompanyDisplay>
				<div>
					<SidebarLink
						icon={FaHome}
						title='Dashboard'
						path={`/`}
						current_page={pathname === '/'}
					/>
					<SidebarLink
						icon={FaBasketballBall}
						title='Times'
						path={`/teams`}
						current_page={pathname.includes('teams')}
					/>
					<SidebarLink
						icon={GiBasketballJersey}
						title='Jogadores'
						path={`/players/1610612740`}
						current_page={pathname.includes('players')}
					/>
					<SidebarLink
						icon={PiBasketballFill}
						title='Partidas'
						path={`/matches`}
						current_page={pathname.includes('matches')}
					/>
					<SidebarLink
						icon={GiBasketballBasket}
						title='Análises'
						path={`/analysis`}
						current_page={pathname.includes('analysis')}
					/>
				</div>
			</S.SidebarContainer>
		);
	}

	return (
		<>
			<SidebarContent />
		</>
	);
}
