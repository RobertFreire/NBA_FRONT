import { Radar } from 'react-chartjs-2';
import { GraphContainer } from './styles';

interface RadarGraphProps {
    labels: string[];
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
}

const RadarGraph = ({ labels, data, backgroundColor = 'rgba(54, 162, 235, 0.2)', borderColor = 'rgba(54, 162, 235, 1)' }: RadarGraphProps) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Radar Chart',
                data,
                backgroundColor,
                borderColor,
                borderWidth: 1,
            },
        ],
    };

    return <GraphContainer><Radar data={chartData} /></GraphContainer>;
};

export default RadarGraph;