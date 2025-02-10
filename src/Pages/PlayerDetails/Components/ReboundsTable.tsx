import React from 'react';
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../Components/Table";
import { PlayerStats } from "../../../services/queries/Players/interface";

const columnHelperRebounds = createColumnHelper<PlayerStats>();
const columnsRebounds = [
    columnHelperRebounds.accessor('average.rebounds', {
        cell: info => info.getValue(),
        header: () => <span>Média de Rebotes</span>,
    }),
    columnHelperRebounds.accessor('median.rebounds', {
        cell: info => info.getValue(),
        header: () => <span>Mediana de Rebotes</span>,
    }),
    columnHelperRebounds.accessor('mode.rebounds', {
        cell: info => info.getValue(),
        header: () => <span>Moda de Rebotes</span>,
    }),
    columnHelperRebounds.accessor('standard_deviation.rebounds', {
        cell: info => info.getValue(),
        header: () => <span>Desvio Padrão de Rebotes</span>,
    }),
    columnHelperRebounds.accessor('percentage_below_average.rebounds', {
        cell: info => `${info.getValue()}%`,
        header: () => <span>Porcentagem Abaixo da Média</span>,
    }),
];

const ReboundsTable = ({ data }: { data: PlayerStats }) => {
    return (
        <Table data={[data]} columns={columnsRebounds} />
    );
};

export default ReboundsTable;