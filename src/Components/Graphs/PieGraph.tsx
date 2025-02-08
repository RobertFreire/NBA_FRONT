import { Pie } from 'react-chartjs-2';
import { GraphContainer } from './styles';

interface PieGraphProps {
    labels: string[];
    values: number[];
    backgroundColor: string[];
    title: string;
}

const PieGraph = ({ labels, values, backgroundColor, title }: PieGraphProps) => {
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

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{title}</h2>
            <GraphContainer><Pie data={chartData} /></GraphContainer>
        </div>
    );
};

export default PieGraph;