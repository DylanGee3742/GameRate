import { useRef, useEffect } from 'react';
import React  from 'react';
import Chart from 'chart.js/auto';


export function AverageRatingChart({ ratings }) {
    const chartRef = useRef(null);

    useEffect(() => {
      const ctx = chartRef.current;
      const chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['1', '2', '3', '4', '5'],
          datasets: [
            {
              label: 'Rating Counts',
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(54, 162, 235, 0.7)',
              hoverBorderColor: 'rgba(54, 162, 235, 1)',
              data: [0, 0, 0, 0, 0],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
            },
          },
        },
      });
  
      updateChartData(chartInstance, ratings);
  
      return () => {
        chartInstance.destroy();
      };
    }, [ratings]);
  
    const updateChartData = (chart, ratings) => {
      const ratingCounts = [0, 0, 0, 0, 0];
      ratings.forEach((rating) => {
        ratingCounts[rating - 1]++;
      });
      chart.data.datasets[0].data = ratingCounts;
      chart.update();
    };
  
    return <canvas ref={chartRef} />;
}
