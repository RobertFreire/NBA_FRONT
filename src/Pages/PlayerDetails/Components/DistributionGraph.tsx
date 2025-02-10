import { Bar } from 'react-chartjs-2';
import { GraphContainer } from '../../../Components/Graphs/styles';

interface DistributionGraphProps {
    labels: string[];
    average: number[];
    median: number[];
    mode: number[];
    title: string;
}

const DistributionGraph = ({ labels, average, median, mode, title }: DistributionGraphProps) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Média',
                data: average,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Mediana',
                data: median,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
            {
                label: 'Moda',
                data: mode,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{title}</h2>
            <GraphContainer><Bar data={chartData} /></GraphContainer>
        </div>
    );
};

export default DistributionGraph;