import { createColumnHelper } from '@tanstack/react-table';
import { DividedStats } from '../../services/queries/Team/interface';
import Table from '../Table';

interface ResultTableProps {
    data: DividedStats[];
}

const columnHelper = createColumnHelper<DividedStats>();

const columns = [
    columnHelper.accessor('Total de Cestas de 2 Pontos', {
        cell: info => info.getValue(),
        header: () => <span>Total de Cestas de 2 Pontos</span>,
    }),
    columnHelper.accessor('Total de Cestas de 3 Pontos', {
        cell: info => info.getValue(),
        header: () => <span>Total de Cestas de 3 Pontos</span>,
    }),
    columnHelper.accessor('Total de Lances Livres Convertidos', {
        cell: info => info.getValue(),
        header: () => <span>Total de Lances Livres Convertidos</span>,
    }),
    columnHelper.accessor('Total de Pontos', {
        cell: info => info.getValue(),
        header: () => <span>Total de Pontos</span>,
    }),
    columnHelper.accessor('Total de Rebotes', {
        cell: info => info.getValue(),
        header: () => <span>Total de Rebotes</span>,
    }),
    columnHelper.accessor('Total de Rebotes Defensivos', {
        cell: info => info.getValue(),
        header: () => <span>Total de Rebotes Defensivos</span>,
    }),
    columnHelper.accessor('Total de Rebotes Ofensivos', {
        cell: info => info.getValue(),
        header: () => <span>Total de Rebotes Ofensivos</span>,
    }),
];

const StatsDividedTable = ({ data }: ResultTableProps) => {
    return (
        <Table data={data} columns={columns} />
    );
};

export default StatsDividedTable;