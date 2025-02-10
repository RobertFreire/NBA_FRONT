import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import Table from '../../../Components/Table';
import { PlayerSeasonVsCareer } from '../../../services/queries/Players/interface';

// Definição das colunas para os dados da carreira
const careerColumnHelper = createColumnHelper<PlayerSeasonVsCareer['career']>();
const careerColumns = [
    careerColumnHelper.accessor('average_points', {
        cell: info => info.getValue(),
        header: () => <span>Média de Pontos</span>,
    }),
    careerColumnHelper.accessor('average_assists', {
        cell: info => info.getValue(),
        header: () => <span>Média de Assistências</span>,
    }),
    careerColumnHelper.accessor('average_rebounds', {
        cell: info => info.getValue(),
        header: () => <span>Média de Rebotes</span>,
    }),
    careerColumnHelper.accessor('total_games', {
        cell: info => info.getValue(),
        header: () => <span>Total de Jogos</span>,
    }),
    careerColumnHelper.accessor('total_minutes', {
        cell: info => info.getValue(),
        header: () => <span>Total de Minutos</span>,
    }),
];

// Definição das colunas para os dados da temporada atual
const seasonColumnHelper = createColumnHelper<PlayerSeasonVsCareer['season']>();
const seasonColumns = [
    seasonColumnHelper.accessor('average_points', {
        cell: info => info.getValue(),
        header: () => <span>Média de Pontos</span>,
    }),
    seasonColumnHelper.accessor('average_assists', {
        cell: info => info.getValue(),
        header: () => <span>Média de Assistências</span>,
    }),
    seasonColumnHelper.accessor('average_rebounds', {
        cell: info => info.getValue(),
        header: () => <span>Média de Rebotes</span>,
    }),
    seasonColumnHelper.accessor('total_games', {
        cell: info => info.getValue(),
        header: () => <span>Total de Jogos</span>,
    }),
    seasonColumnHelper.accessor('total_minutes', {
        cell: info => info.getValue(),
        header: () => <span>Total de Minutos</span>,
    }),
];

const CareerTable = ({ data }: { data: PlayerSeasonVsCareer }) => {
    const careerData = data.career;
    const seasonData = data.season;

    return (
        <>
            <h2 style={{ marginTop: '2rem' }}>Carreira do Jogador</h2>
            <Table data={[careerData]} columns={careerColumns} />

            <h2 style={{ marginTop: '2rem' }}>Temporada Atual</h2>
            <Table data={[seasonData]} columns={seasonColumns} />
        </>
    );
};

export default CareerTable;