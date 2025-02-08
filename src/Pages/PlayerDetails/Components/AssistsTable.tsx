import React from 'react';
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../Components/Table";
import { PlayerStats } from "../../../services/queries/Players/interface";

const columnHelperAssists = createColumnHelper<PlayerStats>();
const columnsAssists = [
    columnHelperAssists.accessor('average.assists', {
        cell: info => info.getValue(),
        header: () => <span>Média de Assistências</span>,
    }),
    columnHelperAssists.accessor('median.assists', {
        cell: info => info.getValue(),
        header: () => <span>Mediana de Assistências</span>,
    }),
    columnHelperAssists.accessor('mode.assists', {
        cell: info => info.getValue(),
        header: () => <span>Moda de Assistências</span>,
    }),
    columnHelperAssists.accessor('standard_deviation.assists', {
        cell: info => info.getValue(),
        header: () => <span>Desvio Padrão de Assistências</span>,
    }),
];

const AssistsTable = ({ data }: { data: PlayerStats }) => {
    return (
        <Table data={[data]} columns={columnsAssists} />
    );
};

export default AssistsTable;