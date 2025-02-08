import { createColumnHelper } from '@tanstack/react-table';
import { SeasonResults } from '../../services/queries/Team/interface';
import Table from '../Table';

interface ResultTableProps {
    data: SeasonResults[];
}

const ResultTable = ({ data }: ResultTableProps) => {
    const columnHelper = createColumnHelper<SeasonResults>();
    const columns = [
        columnHelper.accessor('Total de Vitorias', {
            cell: info => info.getValue(),
            header: () => <span>Total de Vitorias</span>,
        }),
        columnHelper.accessor('Vitorias em Casa', {
            id: 'Vitorias em Casa',
            cell: info => info.renderValue(),
            header: () => <span>Total Vitorias em Casa</span>,
        }),
        columnHelper.accessor('Vitorias Fora de Casa', {
            id: 'Vitorias Fora de Casa',
            header: () => <span>Total Vitorias Fora de Casa</span>,
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('Total de Derrotas', {
            header: () => <span>Total Derrotas</span>,
        }),
        columnHelper.accessor('Derrotas em Casa', {
            header: () => <span>Total Derrotas em Casa</span>,
        }),
        columnHelper.accessor('Derrotas Fora de Casa', {
            header: () => <span>Total Derrotas Fora de Casa</span>,
        }),
    ];

    return (
        <Table data={[Object.values(data ?? [])[0]]} columns={columns} leftComponent={<h1>Resultados</h1>} />
    );
};

export default ResultTable;