import { createColumnHelper } from '@tanstack/react-table';
import { GeneralStats } from '../../services/queries/Team/interface';
import Table from '../Table';

interface StatsTableProps {
    data: GeneralStats[];
}

const StatsTable = ({ data }: StatsTableProps) => {
    const columnHelper = createColumnHelper<GeneralStats>();
    const columns = [
        columnHelper.accessor('Derrotas Fora de Casa', {
            cell: info => info.getValue(),
            header: () => <span>Derrotas Fora de Casa</span>,
        }),
        columnHelper.accessor('Derrotas em Casa', {
            cell: info => info.getValue(),
            header: () => <span>Derrotas em Casa</span>,
        }),
        columnHelper.accessor('Total de Assistencias por Jogo', {
            cell: info => info.getValue(),
            header: () => <span>Total de Assistências por Jogo</span>,
        }),
        columnHelper.accessor('Total de Cestas de 3 Pontos Convertidas', {
            cell: info => info.renderValue(),
            header: () => <span>Total de Cestas de 3 Pontos Convertidas</span>,
        }),
        columnHelper.accessor('Total de Pontos por Jogo', {
            cell: info => info.renderValue(),
            header: () => <span>Total de Pontos por Jogo</span>,
        }),
        columnHelper.accessor('Total de Rebotes por Jogo', {
            cell: info => info.getValue(),
            header: () => <span>Total de Rebotes por Jogo</span>,
        }),
    ];

    return (
        <Table data={data} columns={columns} />
    );
};

export default StatsTable;