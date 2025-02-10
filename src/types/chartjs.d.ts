import 'chartjs-chart-box-and-violin-plot';

declare module 'chart.js' {
    interface ChartTypeRegistry {
        boxplot: {
            chartOptions: Chart.ChartOptions;
            datasetOptions: Chart.ChartDataSets;
            defaultDataPoint: number[];
        };
    }
}