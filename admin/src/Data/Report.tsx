import { BarElement, CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export const ReportsData = [
  {
    name: "Gray Brody",
    transfer_id: "14783112",
    date: "Nov 20, 2022",
    total: "$745",
  },
  {
    name: "Perez Alonzo",
    transfer_id: "87541221",
    date: "Dec 25, 2022",
    total: "$8136",
  },
  {
    name: "woters maxine",
    transfer_id: "213514462",
    date: "Feb 04, 2022",
    total: "$564",
  },
  {
    name: "Rowan torres",
    transfer_id: "7512785568",
    date: "Jan 07, 2022",
    total: "$2364",
  },
  {
    name: "Lane Skylar",
    transfer_id: "7614585124",
    date: "Apr 15, 2022",
    total: "$671",
  },
  {
    name: "alexander",
    transfer_id: "574225447",
    date: "Mar 21, 2022",
    total: "$8914",
  },
  {
    name: "christian",
    transfer_id: "235896144",
    date: "Mar 28, 2022",
    total: "$7952",
  },
  {
    name: "stephanie",
    transfer_id: "5781425474",
    date: "Feb 30, 2022",
    total: "$1236",
  },
  {
    name: "victoria",
    transfer_id: "636512214",
    date: "Mar 12, 2022",
    total: "$8914",
  },
  {
    name: "campbell",
    transfer_id: "461178242",
    date: "Apr 19, 2022",
    total: "$94174",
  },
  {
    name: "austin",
    transfer_id: "548212314",
    date: "Jan 26, 2022",
    total: "$8914",
  },
  {
    name: "julian",
    transfer_id: "6124612367",
    date: "Mar 28, 2022",
    total: "$3125",
  },
];

export const EmployeeChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [60, 78, 60, 89, 76, 87, 47],
      borderColor: "#ff8084",
      backgroundColor: "rgba(255, 128, 132, 0.1)",
      fill: "origin",
      lineTension: 0.4,
    },
  ],
};
export const EmployeeChartOptions: any = {
  maintainAspectRatio: false,
  height: 45,
  width: 500,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: {
      gridLines: {
        color: "rgba(0, 0, 0, 0)",
      },
      display: false,
    },
    yAxes: {
      gridLines: {
        color: "rgba(0, 0, 0, 0)",
      },
      display: false,
    },
  },
};

export const ReportExpensesChartData = {
  labels: ["2019", "2020", "2021", "2022"],
  datasets: [
    {
      label: "Expenses",
      data: [400, 550, 1120, 540],
      borderColor: "#7d9299",
      backgroundColor: "rgba(211,216,219,0.5)",
      fill: "origin",
      lineTension: 0,
    },
    {
      label: "Sales",
      data: [1000, 1170, 660, 1030],
      borderColor: "#ff8084",
      backgroundColor: "rgba(255, 128, 132, 0.1)",
      fill: "origin",
      lineTension: 0,
    },
  ],
};

export const ReportExpensesChartOptions: any = {
  maintainAspectRatio: false,
  title: {
    display: true,
    text: "Company Performance",
    position: "top",
  },
  legend: {
    display: true,
    label: {
      fontColor: "rgb(9,9,9)",
      position: "right",
    },
  },
  animation: false,
};

export const ReportPurchaseChartData = {
  labels: ["100", "200", "300", "400", "500", "600", "700", "800"],
  datasets: [
    {
      data: [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
      borderColor: "#ff8084",
      backgroundColor: "#ff8084",
      borderWidth: 2,
      barPercentage: 0.7,
      categoryPercentage: 0.4,
    },
    {
      data: [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8],
      borderColor: "#a5a5a5",
      backgroundColor: "#a5a5a5",
      borderWidth: 2,
      barPercentage: 0.7,
      categoryPercentage: 0.4,
    },
  ],
};

export const ReportPurchaseChartOptions: any = {
  maintainAspectRatio: false,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: {
      barPercentage: 0.7,
      categoryPercentage: 0.4,
    },
    yAxes: {
      barPercentage: 0.7,
      categoryPercentage: 0.4,
    },
  },
};

export const ReportPurchaseReturnData = {
  labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
  datasets: [
    {
      backgroundColor: "transparent",
      borderColor: "#ff8084",
      data: [20, 40, 20, 50, 20, 60, 10, 40, 20],
      lineTension: 0,
    },
    {
      backgroundColor: "transparent",
      borderColor: "#a5a5a5",
      data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
      lineTension: 0,
    },
  ],
};
export const ReportPurchaseReturnOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const SalesSummaryData = {
  labels: ["", "10", "20", "30", "40", "50"],

  plugins: {
    legend: {
      display: false,
    },
  },
  datasets: [
    {
      backgroundColor: "transparent",
      borderColor: "#01cccd",
      data: [10, 50, 0, 80, 10, 70],
      lineTension: 0.4,
    },
    {
      backgroundColor: "transparent",
      borderColor: "#ff7f83",
      data: [20, 40, 15, 70, 30, 27],
      lineTension: 0.4,
    },
    {
      backgroundColor: "transparent",
      borderColor: "#a5a5a5",
      data: [5, 30, 20, 40, 50, 20],
      lineTension: 0.4,
    },
  ],
};

export const SalesSummaryOptions: any = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: [
      {
        type: "category", // Set the scale type to category for the x-axis
        gridLines: {
          color: "#f8f8f8",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "#f8f8f8",
        },
      },
    ],
  },
};
