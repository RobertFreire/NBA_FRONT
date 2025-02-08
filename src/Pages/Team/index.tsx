import { SectionContainer } from '../../Components/Section/SectionContainer'
import { Container, TableContainer } from './styles'
import { MarketingImage, MarketingText } from '../Dashboard/styles'
import { getTeamRanking } from '../../services/queries/Team'
import { useQuery } from '@tanstack/react-query'
import { ConferenceRanking, TeamRanking } from '../../services/queries/Team/interface'
import { createColumnHelper } from '@tanstack/react-table'
import Table from '../../Components/Table'
import { useNavigate } from 'react-router-dom'
import { CgDetailsMore } from 'react-icons/cg'

const columnHelper = createColumnHelper<TeamRanking>();
const columns = [
    columnHelper.accessor('ConferenceRank', {
        cell: info => info.getValue(),
        header: () => <span>Ranking</span>,
    }),
    columnHelper.accessor(row => `${row.TeamCity} ${row.TeamName}`, {
        id: 'TeamNameCity',
        cell: info => info.getValue(),
        header: () => <span>Nome do Time</span>,
    }),
    columnHelper.accessor('TeamID', {
        cell: info => info.getValue(),
        header: () => <span>ID</span>,
    }),
    columnHelper.display({
        id: 'details',
        cell: info => {
            const navigate = useNavigate();
            return (
                <CgDetailsMore
                    size={30}
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/teams/${info.row.original.TeamID}`,
                        { state: { teamName: `${info.row.original.TeamName} ${info.row.original.TeamCity}` } })}
                />
            );
        },
        header: () => <span>Detalhes</span>,
    }),
];

const Team = () => {

    const { data: TeamRankingData, isLoading, isError } = useQuery<ConferenceRanking>({
        queryKey: ['TeamRanking'],
        queryFn: getTeamRanking,
    });

    console.log(TeamRankingData)

    if (!TeamRankingData) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Container>
                <MarketingImage>
                    {/* <img src={Model} alt="Marketing Image" /> */}
                    <MarketingText>
                        <h1> Ranking dos Times </h1>
                    </MarketingText>
                </MarketingImage>

                <TableContainer>
                    <div>
                        <h1>Conferencia Leste</h1>
                        <Table data={TeamRankingData?.["Conferencia Leste"] ?? []} columns={columns} />
                    </div>
                    <div>
                        <h1>Conferencia Oeste</h1>
                        <Table data={TeamRankingData?.["Conferencia Oeste"] ?? []} columns={columns} />
                    </div>
                </TableContainer>
            </Container>
        </div>
    )
}

export default Team