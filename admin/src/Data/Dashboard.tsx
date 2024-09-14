import { Box, MessageSquare, Navigation, Users } from "react-feather";

export const TopDashboardCardsData = [
  {
    id: 1,
    type: "Earnings",
    bgColor: "bg-warning",
    count: 6659,
    label: "This Month",
    icon: <Navigation className="font-warning" />,
  },
  {
    id: 2,
    type: "Products",
    bgColor: "bg-secondary",
    icon: <Box className="font-secondary" />,
    count: 9856,
    label: "This Month",
  },
  {
    id: 3,
    type: "Messages",
    bgColor: "bg-primary",
    icon: <MessageSquare className="font-primary" />,
    count: 8933,
    label: "This Month",
  },
  {
    id: 4,
    type: "New Vendors",
    bgColor: "bg-danger",
    icon: <Users className="font-danger" />,
    count: 45631,
    label: "This Month",
  },
];

export const MarketValueChartData = {
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

export const MarketValueChartOptions: any = {
  hAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  vAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  colors: ["#ff8084"],
  legend: "none",
};

export const TotalSalesOptions = {
  hAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  vAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  colors: ["#ff8084"],
  legend: "none",
};

export const TotalPurchaseOptions = {
  hAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  vAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  colors: ["#13c9ca"],
  chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
  legend: "none",
};
export const TotalCashOptions = {
  hAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  vAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  colors: ["#f5ce8a"],
  chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
  legend: "none",
};
export const DailyDepositOptions = {
  hAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  vAxis: {
    textPosition: "none",
    baselineColor: "transparent",
    gridlineColor: "transparent",
  },
  colors: ["#a5a5a5"],
  chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
  legend: "none",
};
export const TotalPurchaseData = [
  ["x", "time"],
  [0, 85],
  [1, 83],
  [2, 90],
  [3, 70],
  [4, 85],
  [5, 60],
  [6, 65],
  [7, 63],
  [8, 68],
  [9, 68],
  [10, 65],
  [11, 40],
  [12, 60],
  [13, 75],
  [14, 70],
  [15, 90],
];

export const TotalSalesData = [
  ["x", "time"],
  [0, 20],
  [1, 5],
  [2, 120],
  [3, 10],
  [4, 140],
  [5, 15],
];

export const TotalCashData = [
  ["x", "time"],
  [0, 85],
  [1, 83],
  [2, 90],
  [3, 70],
  [4, 85],
  [5, 60],
  [6, 65],
  [7, 63],
  [8, 68],
  [9, 68],
  [10, 65],
  [11, 40],
  [12, 60],
  [13, 75],
  [14, 70],
  [15, 90],
];

export const DailyDepositsData = [
  ["x", "time"],
  [0, 85],
  [1, 83],
  [2, 90],
  [3, 70],
  [4, 85],
  [5, 60],
  [6, 65],
  [7, 63],
  [8, 68],
  [9, 68],
  [10, 65],
  [11, 40],
  [12, 60],
  [13, 75],
  [14, 70],
  [15, 90],
];

export const BuySellChartData = {
  labels: ["", "10", "20", "30", "40", "50"],
  datasets: [
    {
      backgroundColor: "transparent",
      borderColor: "#13c9ca",
      data: [20, 5, 80, 10, 100, 15],
      lineTension: 0.4,
    },
    {
      backgroundColor: "transparent",
      borderColor: "#a5a5a5",
      data: [0, 50, 20, 70, 30, 27],
      lineTension: 0.4,
    },
    {
      backgroundColor: "transparent",
      borderColor: "#ff8084",
      data: [0, 30, 40, 10, 86, 40],
      lineTension: 0.4,
    },
  ],
};

export const BuySellChartOptions: any = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: {
      gridLines: {
        color: "#f8f8f8",
      },
    },
    yAxes: {
      gridLines: {
        color: "#f8f8f8",
      },
    },
  },
};
export const SalesStatusDonutChart: any = {
  title: "",
  pieHole: 0.35,
  pieSliceBorderColor: "none",
  colors: ["#ff8084", "#13c9ca", "#a5a5a5"],
  legend: {
    position: "none",
  },
  pieSliceText: "none",
  tooltip: {
    trigger: "none",
  },
  animation: {
    startup: true,
    easing: "linear",
    duration: 1500,
  },
  chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
  enableInteractivity: false,
};
export const SalesStatusDonutChartData = [
  ["Task", "Hours per Day"],
  ["Saint Lucia", 300],
  ["Kenya", 50],
  ["Liberia", 100],
];

export const SalesByLocationData = [
  ["Task", "Hours per Day"],
  ["Saint Lucia", 300],
  ["Kenya", 50],
  ["Liberia", 100],
];
export const SalesByLocationOptions = {
  title: "",
  pieHole: 1,
  slices: [
    {
      color: "#ff8084",
    },
    {
      color: "#13c9ca",
    },
    {
      color: "#f0b54d",
    },
  ],
  tooltip: {
    showColorCode: false,
  },
  chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
  legend: "none",
};

export const EmployeeChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      lineTension: 0.4,
      data: [60, 78, 60, 89, 76, 87, 47],
      borderColor: "#ff8084",
      backgroundColor: "rgba(255, 128, 132, 0.1)",
      fill: true,
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
};

export const SalesStatusCountry = [
  { country: "Saint Lucia", amount: 157, color: "primary" },
  { country: "Kenya", amount: 347, color: "secondary" },
  { country: "Liberia", amount: 468, color: "danger" },
  { country: "Christmas Island", amount: 742, color: "warning" },
  { country: "Saint Helena", amount: 647, color: "success" },
];

export const EmployeeStatusData = [
  {
    name: "John Deo",
    onlineStatus: "14+ Online",
    role: "Designer",
    progress: { value: 30, color: "bg-primary" },
    experience: "2 Year",
    imageSrc: "user2.jpg",
  },
  {
    name: "Holio Mako",
    onlineStatus: "250+ Online",
    role: "Developer",
    progress: { value: 70, color: "bg-secondary" },
    experience: "3 Year",
    imageSrc: "user1.jpg",
  },
  {
    name: "Mohsib lara",
    onlineStatus: "99+ Online",
    role: "Tester",
    progress: { value: 60, color: "bg-primary" },
    experience: "5 Month",
    imageSrc: "man.png",
  },
  {
    name: "Hileri Soli",
    onlineStatus: "150+ Online",
    role: "Designer",
    progress: { value: 30, color: "bg-secondary" },
    experience: "3 Month",
    imageSrc: "user5.jpg",
  },
  {
    name: "Pusiz bia",
    onlineStatus: "14+ Online",
    role: "Designer",
    progress: { value: 90, color: "bg-primary" },
    experience: "5 Year",
    imageSrc: "designer.jpg",
  },
];

export const SalesStatusCountry2 = [
  { location: "Germany", percentage: 25, color: "primary" },
  { location: "Brasil", percentage: 10, color: "secondary" },
  { location: "United Kingdom", percentage: 34, color: "danger" },
  { location: "Australia", percentage: 5, color: "warning" },
  { location: "Canada", percentage: 25, color: "success" },
];
