export default {
  getData: () => {
    return data;
  }
}

const data = [
  {
    title: "Revenue",
    subtitle: "in US $",
    rangeEnd: 800,
    markerCount: 8,
    poorEnd: 150,
    satisfactoryEnd: 500,
    comparator: 700,
    value: 600
  },
  {
    title: "Customers",
    subtitle: "Count",
    rangeEnd: 2500,
    markerCount: 10,
    poorEnd: 1200,
    satisfactoryEnd: 2000,
    comparator: 2400,
    value: 500
  },
  {
    title: "Satisfaction",
    subtitle: "Customer Rating Avg",
    rangeEnd: 5,
    markerCount: 5,
    poorEnd: 3,
    satisfactoryEnd: 4,
    comparator: 4.2,
    value: 4.6
  },
];
