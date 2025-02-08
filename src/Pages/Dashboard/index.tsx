
import Tab from '../../Components/Tab/Tab';
import { Container, MarketingImage, MarketingText } from './styles'
import Model from '../../Assets/Model.png'
import { useQuery } from '@tanstack/react-query'
import { getTeamGames, getTeamGraphLines, getTeamGraphScatter, getTeamPointsGraph, getTeamResult, getTeamStats, getTeamStatsDefensive, getTeamStatsDivided, getTeamWinGraphBar, getTeamWinGraphBarHomeAway, getTeamWinGraphHistogram, getTeamWinGraphPie } from '../../services/queries/Team'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale, PointElement, LineElement } from 'chart.js'
import ResultTable from '../../Components/Tables/ResultTable'
import StatsTable from '../../Components/Tables/StatsTable'
import StatsDividedTable from '../../Components/Tables/StatsDividedTable'
import StatsDefensiveTable from '../../Components/Tables/StatsDefensiveTable'
import GamesTable from '../../Components/Tables/GamesTable'
import BarGraph from '../../Components/Graphs/BarGraph'
import PieGraph from '../../Components/Graphs/PieGraph'
import HistogramGraph from '../../Components/Graphs/HistogramGraph'
import RadarGraph from '../../Components/Graphs/RadarGraph'
import LineGraph from '../../Components/Graphs/LineGraph'
import ScatterGraph from '../../Components/Graphs/ScatterGraph'
import Select from '../../Components/Select';
import { useState } from 'react';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale, PointElement, LineElement)

const Dashboard = () => {

    const [selectedTab, setSelectedTab] = useState('Jogos');
    const [selectedSeason, setSelectedSeason] = useState('2023-24');

    const teamid = 1610612740

    const { data: TeamResult,
        isLoading: isLoadingTeamResult,
        isError: isErrorTeamResult,
    } = useQuery({
        queryKey: ['teamResult', teamid],
        queryFn: () => getTeamResult(teamid),
    });

    const { data: TeamStats,
        isLoading: isLoadingTeamStats,
        isError: isErrorTeamStats
    } = useQuery({
        queryKey: ['teamStats', teamid],
        queryFn: () => getTeamStats(teamid),
    });

    const { data: TeamStatsDivided,
        isLoading: isLoadingTeamStatsDivided,
        isError: isErrorTeamStatsDivided
    } = useQuery({
        queryKey: ['teamStatsDivided', teamid],
        queryFn: () => getTeamStatsDivided(teamid),
    });

    const { data: TeamStatsDefensive,
        isLoading: isLoadingTeamStatsDefensive,
        isError: isErrorTeamStatsDefensive
    } = useQuery({
        queryKey: ['teamStatsDefensive', teamid],
        queryFn: () => getTeamStatsDefensive(teamid),
    });

    const { data: TeamGames,
        isLoading: isLoadingTeamGames,
        isError: isErrorTeamGames
    } = useQuery({
        queryKey: ['teamGames', teamid],
        queryFn: () => getTeamGames(teamid),
    });

    const { data: TeamWinGraph,
        isLoading: isLoadingTeamWinGraph,
        isError: isErrorTeamWinGraph
    } = useQuery({
        queryKey: ['teamWinGraph', teamid],
        queryFn: () => getTeamWinGraphBar(teamid),
    });

    const { data: TeamWinGraphPie,
        isLoading: isLoadingTeamWinGraphPie,
        isError: isErrorTeamWinGraphPie
    } = useQuery({
        queryKey: ['teamWinGraphPie', teamid],
        queryFn: () => getTeamWinGraphPie(teamid),
    });

    const { data: TeamWinGraphBarHomeAway,
        isLoading: isLoadingTeamWinGraphBarHomeAway,
        isError: isErrorTeamWinGraphBarHomeAway
    } = useQuery({
        queryKey: ['teamWinGraphBarHomeAway', teamid],
        queryFn: () => getTeamWinGraphBarHomeAway(teamid),
    });

    const { data: TeamWinGraphHistogram,
        isLoading: isLoadingTeamWinGraphHistogram,
        isError: isErrorTeamWinGraphHistogram
    } = useQuery({
        queryKey: ['TeamWinGraphHistogram', teamid],
        queryFn: () => getTeamWinGraphHistogram(teamid),
    });

    const { data: TeamWinGraphRadar,
        isLoading: isLoadingTeamWinGraphRadar,
        isError: isErrorTeamWinGraphRadar
    } = useQuery({
        queryKey: ['TeamWinGraphRadar', teamid],
        queryFn: () => getTeamPointsGraph(teamid),
    });

    const { data: TeamWinGraphLines,
        isLoading: isLoadingTeamWinGraphLines,
        isError: isErrorTeamWinGraphLines
    } = useQuery({
        queryKey: ['TeamWinGraphLines', teamid],
        queryFn: () => getTeamGraphLines(teamid),
    });

    const { data: TeamWinGraphScatter,
        isLoading: isLoadingTeamWinGraphScatter,
        isError: isErrorTeamWinGraphScatter
    } = useQuery({
        queryKey: ['TeamWinGraphScatter', teamid],
        queryFn: () => getTeamGraphScatter(teamid),
    });


    const isLoading = isLoadingTeamResult || isLoadingTeamStats || isLoadingTeamStatsDivided || isLoadingTeamStatsDefensive || isLoadingTeamGames || isLoadingTeamWinGraph || isLoadingTeamWinGraphPie || isLoadingTeamWinGraphBarHomeAway || isLoadingTeamWinGraphHistogram || isLoadingTeamWinGraphRadar || isLoadingTeamWinGraphLines || isLoadingTeamWinGraphScatter
    const isErrorQuery = isErrorTeamResult || isErrorTeamStats || isErrorTeamStatsDivided || isErrorTeamStatsDefensive || isErrorTeamGames || isErrorTeamWinGraph || isErrorTeamWinGraphPie || isErrorTeamWinGraphBarHomeAway || isErrorTeamWinGraphHistogram || isErrorTeamWinGraphRadar || isErrorTeamWinGraphLines || isErrorTeamWinGraphScatter

    if (isLoading || isErrorQuery) return <div>Loading...</div>;

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'Jogos':
                console.log(TeamGames?.[selectedSeason]?.games)
                return <GamesTable data={TeamGames?.[selectedSeason]?.games ?? []} />;
            case 'Estatisticas':
                const ResultSeason = selectedSeason === '2023-24' ? 0 : 1;
                return (
                    <>
                        <ResultTable data={[Object.values(TeamResult?.results ?? [])[ResultSeason]]} />
                        <StatsTable data={TeamStats?.[selectedSeason]?.stats ? [TeamStats[selectedSeason].stats] : []} />
                        <StatsDividedTable data={TeamStatsDivided?.[selectedSeason]?.stats ? [TeamStatsDivided[selectedSeason].stats] : []} />
                        <StatsDefensiveTable data={TeamStatsDefensive?.[selectedSeason]?.stats ? [TeamStatsDefensive[selectedSeason].stats] : []} />
                    </>
                );
            case 'Gráficos':
                return (<>
                    {TeamWinGraph?.seasons[selectedSeason] && (
                        <BarGraph
                            labels={TeamWinGraph.seasons[selectedSeason].labels}
                            values={TeamWinGraph.seasons[selectedSeason].values}
                            backgroundColor={TeamWinGraph.seasons[selectedSeason].colors}
                            title="Gráfico de Vitórias e Derrotas 2023-24"
                        />
                    )}
                    {TeamWinGraphPie?.seasons[selectedSeason] && (
                        <PieGraph
                            labels={TeamWinGraphPie.seasons[selectedSeason].labels}
                            values={TeamWinGraphPie.seasons[selectedSeason].values}
                            backgroundColor={TeamWinGraphPie.seasons[selectedSeason].colors}
                            title="Percentual de Vitórias e Derrotas (Casa ou Fora)"
                        />
                    )}

                    {TeamWinGraphHistogram?.seasons[selectedSeason] && (
                        <HistogramGraph
                            dates={TeamWinGraphHistogram.seasons[selectedSeason].dates}
                            results={TeamWinGraphHistogram.seasons[selectedSeason].results}
                            colors={TeamWinGraphHistogram.seasons[selectedSeason].colors}
                            title="Histograma de Vitórias e Derrotas 2023-24"
                        />
                    )}
                    {TeamWinGraphRadar?.seasons[selectedSeason] && (
                        <RadarGraph
                            labels={TeamWinGraphRadar.seasons[selectedSeason].labels}
                            data={TeamWinGraphRadar.seasons[selectedSeason].values}
                            backgroundColor={TeamWinGraphRadar.seasons[selectedSeason].colors[0]}
                            borderColor={TeamWinGraphRadar.seasons[selectedSeason].colors[1]}
                        />
                    )}
                    {TeamWinGraphLines?.seasons[selectedSeason] && (
                        <LineGraph
                            labels={TeamWinGraphLines.seasons[selectedSeason].labels}
                            data={TeamWinGraphLines.seasons[selectedSeason].values}
                            backgroundColor={TeamWinGraphLines.seasons[selectedSeason].colors[0]}
                            borderColor={TeamWinGraphLines.seasons[selectedSeason].colors[1]}
                        />
                    )}
                    {TeamWinGraphBarHomeAway?.seasons[selectedSeason] && (
                        <PieGraph
                            labels={TeamWinGraphBarHomeAway.seasons[selectedSeason].labels}
                            values={TeamWinGraphBarHomeAway.seasons[selectedSeason].values}
                            backgroundColor={TeamWinGraphBarHomeAway.seasons[selectedSeason].colors}
                            title="Gráfico de Vitórias e Derrotas (Casa ou Fora)"
                        />
                    )}
                    {TeamWinGraphScatter?.seasons[selectedSeason] && (
                        <ScatterGraph
                            data={{
                                datasets: [
                                    {
                                        label: 'Pontos',
                                        data: TeamWinGraphScatter.seasons[selectedSeason].labels.map((_, index) => ({
                                            x: index,
                                            y: TeamWinGraphScatter.seasons[selectedSeason].values[index],
                                        })),
                                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                                        borderColor: 'rgba(255, 159, 64, 1)',
                                    },
                                ],
                            }}
                        />)}
                </>);
            case 'Jogadores':
                return <div>Sem Dados</div>;
            default:
                return <></>;
        }
    };

    return (
        <div>
            <Container>
                <MarketingImage>
                    <img src={Model} alt="Marketing Image" />
                    <MarketingText>
                        <h1> NEW ORLEANS PELICANS</h1>
                    </MarketingText>
                </MarketingImage>

                <Select options={['Jogos', 'Estatisticas', 'Gráficos', 'Jogadores']} onChange={setSelectedTab} />

                <Tab labels={['2023-24', '2024-25']} onChange={setSelectedSeason}>
                    {renderTabContent()}
                </Tab>
            </Container>
        </div >
    )
}

export default Dashboard