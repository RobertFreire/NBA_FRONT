import { Container, MarketingText } from './styles'
import { MarketingImage } from '../TeamDetails/styles'
import { getPlayer, getPlayerGames, getPlayerGamesHomeAndAway, getPlayerStats } from '../../services/queries/Players';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Select from '../../Components/Select';
import { useMemo, useState } from 'react';
import GamesTable from './Components/GamesTable';
import ReboundsTable from './Components/ReboundsTable';
import AssistsTable from './Components/AssistsTable';
import PointsTable from './Components/PointsTable';

const PlayerDetails = () => {

    const { teamId, playerId } = useParams()

    const [selectedTab, setSelectedTab] = useState('Jogos');
    const [selectedAdversary, setSelectedAdversary] = useState<string | null>(null);

    const { data: PlayerInformation,
        isLoading: isLoadingPlayerInformation,
        isError: isErrorPlayerInformation,
    } = useQuery({
        queryKey: ['playerInformation', playerId],
        queryFn: () => getPlayer(Number(playerId)),
        enabled: !!playerId,
    });

    const { data: PlayerGames,
        isLoading: isLoadingPlayerGames,
        isError: isErrorPlayerGames,
    } = useQuery({
        queryKey: ['playerGames', playerId],
        queryFn: () => getPlayerGames(Number(playerId)),
        enabled: !!playerId,
    });

    const { data: PlayerGamesHomeAndAway,
        isLoading: isLoadingPlayerGamesHomeAndAway,
        isError: isErrorPlayerGamesHomeAndAway,
    } = useQuery({
        queryKey: ['playerGamesHomeAndAway', teamId, playerId, selectedAdversary],
        queryFn: () => getPlayerGamesHomeAndAway(Number(teamId), Number(playerId), selectedAdversary ?? ''),
        enabled: !!playerId,
    });

    const { data: PlayerStats,
        isLoading: isLoadingPlayerStats,
        isError: isErrorPlayerStats,
    } = useQuery({
        queryKey: ['playerStats', teamId, playerId, selectedAdversary],
        queryFn: () => getPlayerStats(Number(playerId)),
        enabled: !!playerId,
    });

    const isLoading = isLoadingPlayerInformation || isLoadingPlayerGames || isLoadingPlayerGamesHomeAndAway || isLoadingPlayerStats
    const isError = isErrorPlayerInformation || isErrorPlayerGames || isErrorPlayerGamesHomeAndAway || isErrorPlayerStats

    const adversaries = useMemo(() => {
        if (!PlayerGames) return [];
        const adversarySet = new Set(PlayerGames.map(game => game.Adversario));
        return Array.from(adversarySet);
    }, [PlayerGames]);

    const filteredGames = useMemo(() => {
        if (!PlayerGames) return [];
        if (!selectedAdversary) return PlayerGames;
        return PlayerGames.filter(game => game.Adversario === selectedAdversary);
    }, [PlayerGames, selectedAdversary]);

    console.log(PlayerGamesHomeAndAway)

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'Jogos':
                return (
                    <div>
                        <h1 style={{ marginTop: '2rem' }}>Selecione o Adversário</h1>
                        <Select options={['Todos', ...adversaries]} onChange={value => setSelectedAdversary(value === 'Todos' ? null : value)} />
                        <div style={{ marginTop: '1rem' }}>
                            <h3>Total de jogos em casa: {PlayerGamesHomeAndAway?.[0]?.total_home_games}</h3>
                            <h3>Total de jogos fora de casa: {PlayerGamesHomeAndAway?.[0]?.total_away_games}</h3>
                            {selectedAdversary && (
                                <>
                                    <h3>Jogos em casa contra {selectedAdversary}: {PlayerGamesHomeAndAway?.[0]?.home_vs_opponent}</h3>
                                    <h3>Jogos fora de casa contra {selectedAdversary}: {PlayerGamesHomeAndAway?.[0]?.away_vs_opponent}</h3>
                                </>
                            )}
                        </div>
                        <GamesTable data={filteredGames} />
                    </div>
                );
            case 'Estatisticas':
                return (<div>
                    <h1 style={{ marginTop: '2rem' }}>Estatísticas do Jogador</h1>
                    {PlayerStats && (
                        <>
                            <PointsTable data={PlayerStats} />
                            <ReboundsTable data={PlayerStats} />
                            <AssistsTable data={PlayerStats} />
                        </>
                    )}
                </div>)
            case 'Gráficos':
                return (<></>)
            default:
                return <></>;
        }
    };

    return (
        <div>
            <Container>
                <MarketingImage>
                    <img src={PlayerInformation?.image_url} alt="Marketing Image" />
                    <MarketingText>
                        <h1> {PlayerInformation?.name} </h1>
                        <p>{PlayerInformation?.position}</p>
                    </MarketingText>
                </MarketingImage>

                <Select options={['Jogos', 'Estatisticas', 'Gráficos']} onChange={setSelectedTab} />

                {renderTabContent()}
            </Container>
        </div>
    )
}

export default PlayerDetails