import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import Table from '../../../Components/Table';
import { PlayerCareerStats } from '../../../services/queries/Players/interface';

const columnHelper = createColumnHelper<PlayerCareerStats['career']>();
const columns = [
    columnHelper.accessor('total_points', {
        cell: info => info.getValue(),
        header: () => <span>Total de Pontos</span>,
    }),
    columnHelper.accessor('total_assists', {
        cell: info => info.getValue(),
        header: () => <span>Total de Assistências</span>,
    }),
    columnHelper.accessor('total_rebounds', {
        cell: info => info.getValue(),
        header: () => <span>Total de Rebotes</span>,
    }),
];

const CareerStatsTable = ({ data }: { data: PlayerCareerStats }) => {
    return (<>
        <h2 style={{ marginTop: '2rem' }}>Estatísticas Carreira do Jogador</h2>
        <Table data={[data.career]} columns={columns} />
    </>
    );
};

export default CareerStatsTable;