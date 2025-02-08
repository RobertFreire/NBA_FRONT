import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Game } from '../../services/queries/Team/interface';
import Table from '../Table';

interface GamesTableProps {
    data: Game[];
}

const columnHelperGames = createColumnHelper<Game>();
const columnsGames = [
    columnHelperGames.accessor('Data do Jogo', {
        cell: info => info.getValue(),
        header: () => <span>Data do Jogo</span>,
    }),
    columnHelperGames.accessor('Casa ou Fora', {
        cell: info => info.getValue(),
        header: () => <span>Local</span>,
    }),
    columnHelperGames.accessor('Pontos do Time', {
        cell: info => info.getValue(),
        header: () => <span>Pontos do Time</span>,
    }),
    columnHelperGames.accessor('Adversario', {
        cell: info => info.getValue(),
        header: () => <span>Adversário</span>,
    }),
    columnHelperGames.accessor('Vitoria ou Derrota', {
        cell: info => info.getValue() === 'W' ? 'Vitória' : 'Derrota',
        header: () => <span>Vitória ou Derrota</span>,
    }),
];

const GamesTable = ({ data }: GamesTableProps) => {
    return (
        <Table data={data} columns={columnsGames} />
    );
};

export default GamesTable;