import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { PlayerGumbelStats } from '../../../services/queries/Players/interface';
import Table from '../../../Components/Table';
import { Bar } from 'react-chartjs-2';

interface GumbelStatsTableProps {
    data: PlayerGumbelStats;
}

const columnHelper = createColumnHelper<PlayerGumbelStats>();
const columns = [
    columnHelper.accessor('gumbel_points', {
        header: 'Pontos',
        cell: info => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>Acima de X: {info.getValue().above_x}</div>
                <div>Atingir ou Exceder X: {info.getValue().at_least_x}</div>
                <div>Atingir ou Ficar Abaixo de X: {info.getValue().below_x}</div>
                <div>Proporção de Valores Menores ou Iguais a X: {info.getValue().exactly_x}</div>
            </div>
        ),
    }),
    columnHelper.accessor('gumbel_rebounds', {
        header: 'Rebotes',
        cell: info => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>Acima de X: {info.getValue().above_x}</div>
                <div>Atingir ou Exceder X: {info.getValue().at_least_x}</div>
                <div>Atingir ou Ficar Abaixo de X: {info.getValue().below_x}</div>
                <div>Proporção de Valores Menores ou Iguais a X: {info.getValue().exactly_x}</div>
            </div>
        ),
    }),
    columnHelper.accessor('gumbel_assists', {
        header: 'Assistências',
        cell: info => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>Acima de X: {info.getValue().above_x}</div>
                <div>Atingir ou Exceder X: {info.getValue().at_least_x}</div>
                <div>Atingir ou Ficar Abaixo de X: {info.getValue().below_x}</div>
                <div>Proporção de Valores Menores ou Iguais a X: {info.getValue().exactly_x}</div>
            </div>
        ),
    }),
];

const GumbelStatsTable = ({ data }: GumbelStatsTableProps) => {
    const tableData = [data];
    const chartData = {
        labels: ['Acima de X', 'Atingir ou Exceder X', 'Atingir ou Ficar Abaixo de X', 'Proporção de Valores Menores ou Iguais a X'],
        datasets: [
            {
                label: 'Pontos',
                data: [
                    data.gumbel_points.above_x,
                    data.gumbel_points.at_least_x,
                    data.gumbel_points.below_x,
                    data.gumbel_points.exactly_x,
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Rebotes',
                data: [
                    data.gumbel_rebounds.above_x,
                    data.gumbel_rebounds.at_least_x,
                    data.gumbel_rebounds.below_x,
                    data.gumbel_rebounds.exactly_x,
                ],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
            {
                label: 'Assistências',
                data: [
                    data.gumbel_assists.above_x,
                    data.gumbel_assists.at_least_x,
                    data.gumbel_assists.below_x,
                    data.gumbel_assists.exactly_x,
                ],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h2>Estatísticas de Gumbel</h2>
            <div style={{ display: 'flex' }}>
                <Table data={tableData} columns={columns} />
                <Bar
                    style={{ minWidth: '700px', height: '500px' }}
                    data={chartData}
                    options={{
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default GumbelStatsTable;