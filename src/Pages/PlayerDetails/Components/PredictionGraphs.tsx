import { Bar, Line, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { PlayerProbabilities, RocCurve } from '../../../services/queries/Players/interface';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

interface PredictionGraphsProps {
    pointsProbabilities: PlayerProbabilities;
    reboundsProbabilities: PlayerProbabilities;
    assistsProbabilities: PlayerProbabilities;
    pointsConfusionMatrix: number[][];
    pointsRocCurve: RocCurve;
    type: string;
}

const PredictionGraphs = ({ pointsProbabilities, reboundsProbabilities, assistsProbabilities, pointsConfusionMatrix, pointsRocCurve, type }: PredictionGraphsProps) => {

    if (!pointsProbabilities || !reboundsProbabilities || !assistsProbabilities || !pointsConfusionMatrix || !pointsRocCurve) {
        return <div>Dados insuficientes para exibir os gráficos.</div>;
    }

    const labels = Object.keys(pointsProbabilities);

    const data = {
        labels,
        datasets: [
            {
                label: 'Pontos',
                data: Object.values(pointsProbabilities),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Rebotes',
                data: Object.values(reboundsProbabilities),
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
            {
                label: 'Assistências',
                data: Object.values(assistsProbabilities),
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            },
        ],
    };

    const rocData = {
        labels: pointsRocCurve.fpr.map((_, index) => `Point ${index + 1}`),
        datasets: [
            {
                label: 'Curva Roc',
                data: pointsRocCurve.fpr.map((fpr, index) => ({ x: fpr, y: pointsRocCurve.tpr[index] })),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                showLine: true,
            },
        ],
    };

    const confusionMatrixData = {
        labels: ['Predicted Negative', 'Predicted Positive'],
        datasets: [
            {
                label: 'Real Negativo',
                data: pointsConfusionMatrix[0],
                backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
            {
                label: 'Real Positivo',
                data: pointsConfusionMatrix[1],
                backgroundColor: ['rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)'],
                borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ width: '50%' }}>
            <h2>Probabilidades de Previsão - {type}</h2>
            <Bar data={data} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
            <h2>Curva Roc</h2>
            <Scatter data={rocData} options={{ responsive: true, scales: { x: { beginAtZero: true }, y: { beginAtZero: true } } }} />
            <h2>Matriz de Confusão</h2>
            <Bar data={confusionMatrixData} options={{ responsive: true, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } } }} />
        </div>
    );
};

export default PredictionGraphs;