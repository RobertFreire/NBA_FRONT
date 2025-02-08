import { Line } from 'react-chartjs-2';
import { GraphContainer } from './styles';

interface LineGraphProps {
    labels: string[];
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
}

const LineGraph = ({ labels, data, backgroundColor = 'rgba(75, 192, 192, 0.2)', borderColor = 'rgba(75, 192, 192, 1)' }: LineGraphProps) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Vitórias e Derrotas',
                data,
                backgroundColor,
                borderColor,
                fill: true,
            },
        ],
    };

    return <GraphContainer><Line data={chartData} /></GraphContainer>;
};

export default LineGraph;