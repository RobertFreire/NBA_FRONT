import React from 'react';
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../Components/Table";
import { PlayerStats } from "../../../services/queries/Players/interface";

const columnHelperPoints = createColumnHelper<PlayerStats>();
const columnsPoints = [
    columnHelperPoints.accessor('average.points', {
        cell: info => info.getValue(),
        header: () => <span>Média de Pontos</span>,
    }),
    columnHelperPoints.accessor('median.points', {
        cell: info => info.getValue(),
        header: () => <span>Mediana de Pontos</span>,
    }),
    columnHelperPoints.accessor('mode.points', {
        cell: info => info.getValue(),
        header: () => <span>Moda de Pontos</span>,
    }),
    columnHelperPoints.accessor('standard_deviation.points', {
        cell: info => info.getValue(),
        header: () => <span>Desvio Padrão de Pontos</span>,
    }),
];

const PointsTable = ({ data }: { data: PlayerStats }) => {
    return (
        <Table data={[data]} columns={columnsPoints} />
    );
};

export default PointsTable;