import { Container, MarketingText } from './styles'
import { MarketingImage } from '../TeamDetails/styles'
import { getPlayer, getPlayerCareerStats, getPlayerGames, getPlayerGamesHomeAndAway, getPlayerSeasonVsCareer, getPlayerStats } from '../../services/queries/Players';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Select from '../../Components/Select';
import { useMemo, useState } from 'react';
import GamesTable from './Components/GamesTable';
import ReboundsTable from './Components/ReboundsTable';
import AssistsTable from './Components/AssistsTable';
import PointsTable from './Components/PointsTable';
import CareerTable from './Components/CarrerTable';
import CareerStatsTable from './Components/CarrerStatsTable';
import BoxPlotGraph from './Components/BoxPlotGraph';
import DistributionGraph from './Components/DistributionGraph';

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

    const { data: CarrerStats,
        isLoading: isLoadingCarrerStats,
        isError: isErrorCarrerStats,
    } = useQuery({
        queryKey: ['carrerStats', playerId],
        queryFn: () => getPlayerCareerStats(Number(playerId)),
        enabled: !!playerId,
    });

    const { data: CarrerPlayer,
        isLoading: isLoadingCarrerPlayer,
        isError: isErrorCarrerPlayer,
    } = useQuery({
        queryKey: ['carrerPlayer', playerId],
        queryFn: () => getPlayerSeasonVsCareer(Number(playerId)),
        enabled: !!playerId,
    });

    const isLoading = isLoadingPlayerInformation || isLoadingPlayerGames || isLoadingPlayerGamesHomeAndAway || isLoadingPlayerStats || isLoadingCarrerPlayer || isLoadingCarrerStats
    const isError = isErrorPlayerInformation || isErrorPlayerGames || isErrorPlayerGamesHomeAndAway || isErrorPlayerStats || isErrorCarrerPlayer || isErrorCarrerStats

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
            case 'Carreira':
                return (<>
                    {CarrerStats &&
                        <CareerStatsTable data={CarrerStats} />}
                    {CarrerPlayer &&
                        <CareerTable data={CarrerPlayer} />}
                </>)
            case 'Gráficos':
                return (
                    <>
                        {PlayerStats && (
                            <>
                                <DistributionGraph
                                    labels={['Jogador 1']}
                                    average={[PlayerStats.average.points]}
                                    median={[PlayerStats.median.points]}
                                    mode={[PlayerStats.mode.points]}
                                    title="Distribuição de Pontos"
                                />
                                <DistributionGraph
                                    labels={['Jogador 1']}
                                    average={[PlayerStats.average.rebounds]}
                                    median={[PlayerStats.median.rebounds]}
                                    mode={[PlayerStats.mode.rebounds]}
                                    title="Distribuição de Rebotes"
                                />
                                <DistributionGraph
                                    labels={['Jogador 1']}
                                    average={[PlayerStats.average.assists]}
                                    median={[PlayerStats.median.assists]}
                                    mode={[PlayerStats.mode.assists]}
                                    title="Distribuição de Assistências"
                                />
                                <BoxPlotGraph
                                    labels={['Pontos', 'Rebotes', 'Assistências']}
                                    data={[
                                        [PlayerStats.average.points, PlayerStats.median.points, PlayerStats.mode.points],
                                        [PlayerStats.average.rebounds, PlayerStats.median.rebounds, PlayerStats.mode.rebounds],
                                        [PlayerStats.average.assists, PlayerStats.median.assists, PlayerStats.mode.assists],
                                    ]}
                                    title="Box Plot de Pontos, Rebotes e Assistências"
                                />
                            </>
                        )}
                    </>
                );
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

                <Select options={['Jogos', 'Carreira', 'Estatisticas', 'Gráficos']} onChange={setSelectedTab} />

                {renderTabContent()}
            </Container>
        </div>
    )
}

export default PlayerDetails