import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../Components/Table";
import { PlayerGame } from "../../../services/queries/Players/interface";

const columnHelperGames = createColumnHelper<PlayerGame>();
const columnsGames = [
    columnHelperGames.accessor('Data do Jogo', {
        cell: info => info.getValue(),
        header: () => <span>Data do Jogo</span>,
    }),
    columnHelperGames.accessor('Adversario', {
        cell: info => info.getValue(),
        header: () => <span>Adversário</span>,
    }),
    columnHelperGames.accessor('V ou D', {
        cell: info => info.getValue() === 'W' ? 'Vitória' : 'Derrota',
        header: () => <span>Vitória ou Derrota</span>,
    }),
    columnHelperGames.accessor('Casa/Fora', {
        cell: info => info.getValue(),
        header: () => <span>Local</span>,
    }),
    columnHelperGames.accessor('Tentativas de Cestas de 3', {
        cell: info => info.getValue(),
        header: () => <span>Tentativas de Cestas de 3</span>,
    }),
    columnHelperGames.accessor('Pontos', {
        cell: info => info.getValue(),
        header: () => <span>PTS</span>,
    }),
    columnHelperGames.accessor('Cestas de 3 PTS Marcados', {
        cell: info => info.getValue(),
        header: () => <span>Cestas de 3 PTS Marcados</span>,
    }),
    columnHelperGames.accessor('Rebotes', {
        cell: info => info.getValue(),
        header: () => <span>REB</span>,
    }),
    columnHelperGames.accessor('Assistencias', {
        cell: info => info.getValue(),
        header: () => <span>AST</span>,
    }),
    columnHelperGames.accessor('Placar do Jogo', {
        cell: info => info.getValue(),
        header: () => <span>Placar do Jogo</span>,
    }),
    columnHelperGames.accessor('Tempo de Permanencia do Jogador em Quadra', {
        cell: info => info.getValue(),
        header: () => <span>Tempo de Permanência do Jogador em Quadra</span>,
    }),
];

const GamesTable = ({ data }: { data: PlayerGame[] }) => {

    return (
        <Table data={data} columns={columnsGames} />
    );
};

export default GamesTable;