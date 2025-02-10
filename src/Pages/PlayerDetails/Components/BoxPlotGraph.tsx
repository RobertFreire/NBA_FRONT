import Plot from 'react-plotly.js';
import { GraphContainer } from '../../../Components/Graphs/styles';

interface BoxPlotGraphProps {
    labels: string[];
    data: number[][];
    title: string;
}

const BoxPlotGraph = ({ labels, data, title }: BoxPlotGraphProps) => {
    const traces = labels.map((label, index) => ({
        type: 'box',
        y: data[index],
        name: label,
        boxpoints: 'all',
        jitter: 0.5,
        whiskerwidth: 0.2,
        fillcolor: 'cls',
        marker: {
            size: 2,
        },
        line: {
            width: 1,
        },
    }));

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{title}</h2>
            <GraphContainer>
                <Plot
                    data={traces}
                    layout={{
                        title,
                        yaxis: {
                            autorange: true,
                            showgrid: true,
                            zeroline: true,
                            dtick: 5,
                            gridcolor: 'rgb(255, 255, 255)',
                            gridwidth: 1,
                            zerolinecolor: 'rgb(255, 255, 255)',
                            zerolinewidth: 2,
                        },
                        margin: {
                            l: 40,
                            r: 30,
                            b: 80,
                            t: 100,
                        },
                        paper_bgcolor: 'rgb(243, 243, 243)',
                        plot_bgcolor: 'rgb(243, 243, 243)',
                        showlegend: false,
                    }}
                    config={{ responsive: true }}
                />
            </GraphContainer>
        </div>
    );
};

export default BoxPlotGraph;