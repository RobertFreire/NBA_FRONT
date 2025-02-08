import { Bar } from 'react-chartjs-2';
import { GraphContainer } from './styles';

interface HistogramGraphProps {
    dates: string[];
    results: number[];
    colors: string[];
    title: string;
}

const HistogramGraph = ({ dates, results, colors, title }: HistogramGraphProps) => {
    const chartData = {
        labels: dates,
        datasets: [
            {
                label: title,
                data: results,
                backgroundColor: colors,
            },
        ],
    };

    return <GraphContainer><Bar data={chartData} /></GraphContainer>;
};

export default HistogramGraph;