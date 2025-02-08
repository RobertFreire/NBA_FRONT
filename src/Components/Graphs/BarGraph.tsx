import { Bar } from 'react-chartjs-2';
import { GraphContainer } from './styles';

interface BarGraphProps {
    labels: string[];
    values: number[];
    backgroundColor: string[];
    title: string;
}

const BarGraph = ({ labels, values, backgroundColor, title }: BarGraphProps) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: title,
                data: values,
                backgroundColor,
            },
        ],
    };

    return <GraphContainer><Bar data={chartData} /></GraphContainer>;
};

export default BarGraph;