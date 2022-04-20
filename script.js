const data = {
  labels: [
    'Lutte contre le changement climatique',
    "Lutte contre l'effondrement de la biodiversité",
    'Lutte contre les pollutions',
    'Réduction de consommation de ressources',
    'Mise en cohérence de la stratégie économique',
    'Implication des salariés',
    "Stratégie d'influence",
  ],
  datasets: [
    {
      label: 'Oui',
      data: [4 / 10, 2 / 5, 2 / 3, 3 / 6, 0, 2 / 3, 2 / 4],
      fill: true,
      backgroundColor: 'rgba(31, 156, 77, 0.2)',
      borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(31, 156, 77)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(31, 156, 77)',
    },
    {
      label: 'Non',
      data: [9 / 10, 4 / 5, 3 / 3, 5 / 6, 3 / 3, 3 / 3, 3 / 4],
      fill: true,
      backgroundColor: 'rgba(171, 171, 171, 0.2)',
      borderColor: 'rgb(171, 171, 171)',
      pointBackgroundColor: 'rgb(242, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(242, 0, 0)',
    },
    {
      label: 'Non pertinent',
      data: [10 / 10, 5 / 5, 3 / 3, 6 / 6, 3 / 3, 3 / 3, 4 / 4],
      fill: true,
      backgroundColor: 'rgba(171, 171, 171, 0.2)',
      borderColor: 'rgb(171, 171, 171)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
    },
  ],
};
const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
};

const myChart = new Chart(document.getElementById('myChart'), config);
