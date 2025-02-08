import { Scatter } from 'react-chartjs-2';
import { GraphContainer } from './styles';

interface ScatterGraphProps {
    data: {
        datasets: {
            label: string;
            data: { x: number; y: number }[];
            backgroundColor: string;
            borderColor: string;
        }[];
    };
}

const ScatterGraph = ({ data }: ScatterGraphProps) => {
    return <GraphContainer><Scatter data={data} /></GraphContainer>;
};

export default ScatterGraph;