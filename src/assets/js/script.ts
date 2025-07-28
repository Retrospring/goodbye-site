import Chart from "./vendor/chart.js";

document.addEventListener("DOMContentLoaded", function () {
  const chartContainer = document.querySelector(".js-chart");
  if (!chartContainer) return;

  const chartData = JSON.parse(
    decodeURI(chartContainer.getAttribute("data-charts")!),
  );
  const datasets = chartData.datasets.map((ds) => ({
    label: ds.label.replace("_count", "").replace(
      /^\w/,
      (c) => c.toUpperCase(),
    ),
    data: ds.data,
    fill: false,
    borderWidth: 2,
    pointRadius: 0,
    tension: 0.1,
  }));

  const config = {
    type: "line",
    data: {
      labels: chartData.labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: false },
      },
      scales: {
        x: {
          display: true,
          title: { display: true, text: "Date" },
          ticks: { maxTicksLimit: 12 },
        },
        y: {
          display: true,
          title: { display: true, text: "Count" },
        },
      },
    },
  };

  new Chart(chartContainer, config);
});
