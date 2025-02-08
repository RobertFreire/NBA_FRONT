import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { DefensiveStats } from '../../services/queries/Team/interface';
import Table from '../Table';

interface StatsDefensiveProps {
    data: DefensiveStats[];
}

const columnHelper = createColumnHelper<DefensiveStats>();

const columns = [
    columnHelper.accessor('Total de Erros por Jogo', {
        cell: info => info.getValue(),
        header: () => <span>Total de Erros por Jogo</span>,
    }),
    columnHelper.accessor('Total de Roubos de Bola', {
        cell: info => info.getValue(),
        header: () => <span>Total de Roubos de Bola por Jogo</span>,
    }),
    columnHelper.accessor('Total de Faltas por Jogo', {
        cell: info => info.getValue(),
        header: () => <span>Total de Faltas por Jogo</span>,
    }),
    columnHelper.accessor('Total de Rebotes Defensivos', {
        cell: info => info.getValue(),
        header: () => <span>Total de Rebotes Defensivos</span>,
    }),
    columnHelper.accessor('Total de Tocos por Jogo', {
        cell: info => info.getValue(),
        header: () => <span>Total de Tocos por Jogo</span>,
    }),
];

const StatsDefensiveTable = ({ data }: StatsDefensiveProps) => {
    return (
        <Table data={data} columns={columns} />
    );
};

export default StatsDefensiveTable;