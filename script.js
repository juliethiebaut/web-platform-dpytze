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
      label: 'Question 1',
      data: [10, 20, 33, 25, 33, 10, 25],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Question 2',
      data: [20, 40, 67, 50, 67, 20, 50],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Question 3',
      data: [30, 60, 100, 75, 100, 30, 75],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Question 4',
      data: [40, 80, 100, 100, 100, 40, 100],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Question 5',
      data: [50, 100, 100, 100, 100, 50, 100],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Question 6',
      data: [60, 100, 100, 100, 100, 60, 100],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Question 7',
      data: [70, 100, 100, 100, 100, 70, 100],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Question 8',
      data: [80, 100, 100, 100, 100, 80, 100],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Question 9',
      data: [90, 100, 100, 100, 100, 90, 100],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Question 10',
      data: [100, 100, 100, 100, 100, 100, 100],
      fill: false,
      // backgroundColor: 'rgba(31, 156, 77, 0.2)',
      // borderColor: 'rgb(31, 156, 77)',
      pointBackgroundColor: 'rgb(171, 171, 171)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(171, 171, 171)',
      lineBorderWidth: 0,
    },
    {
      label: 'Oui',
      data: [40, 40, 67, 50, 0, 70, 50],
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
      data: [90, 80, 100, 83, 100, 100, 75],
      fill: true,
      backgroundColor: 'rgba(242, 0, 0, 0.2)',
      borderColor: 'rgb(171, 171, 171)',
      pointBackgroundColor: 'rgb(242, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(242, 0, 0)',
    },
    {
      label: 'Non pertinent',
      data: [100, 100, 100, 100, 100, 100, 100],
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
    plugins: {
      legend: {
        display: false,
        labels: {
          color: 'rgb(255, 99, 132)',
        },
      },
    },
    scales: {
      r: {
        display: true,
        min: 0,
        max: 100,
        grid: {
          display: true,
        },
        ticks: {
          color: 'none',
        },
        pointLabels: {
          fontSize: 16,
        },
      },
    },
  },
};

Chart.defaults.font.size = 16;

const myChart = new Chart(document.getElementById('myChart'), config);

const stackedBarData = {
  labels: [
    'Trouvez-vous que le réchauffement climatique soit un sujet sérieusement pris en compte dans votre département/service/unité de travail ?',
    'Vous donne-t-on les moyens de mesurer ou de faire diminuer les émissions de gaz à effet de serre des produits ou services sur lesquels vous travaillez ?',
    'Pensez-vous que votre travail contribue à faire baisser les émissions de gaz à effet de serre de la société dans son ensemble ?',
    'Savez-vous si votre entreprise adapte votre lieu de travail et votre travail aux conséquences à venir du changement climatique ?',
  ],
  datasets: [
    {
      label: 'Oui',
      data: [40, 40, 67, 50],
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
      data: [50, 40, 33, 33],
      fill: true,
      backgroundColor: 'rgba(242, 0, 0, 0.2)',
      borderColor: 'rgb(171, 171, 171)',
      pointBackgroundColor: 'rgb(242, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(242, 0, 0)',
    },
    {
      label: 'Non pertinent',
      data: [10, 20, 0, 27],
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

const stackedBar = {
  type: 'bar',
  data: stackedBarData,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 100,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Lutte contre le changement climatique',
      },
    },
  },
};

const myChart2 = new Chart(document.getElementById('myChart2'), stackedBar);

const stackedBarData3 = {
  labels: [
    "Trouvez-vous que l'effondrement de la biodiversité soit un sujet sérieusement pris en compte dans votre département/service/unité de travail ?",
    "Vous donne-t-on les moyens de mesurer ou de faire diminuer l'impact sur la biodiversité des produits ou service sur lesquels vous travaillez ?",
    'Pensez-vous que votre travail contribue à faire baisser la destruction de la biodiversité de la société dans son ensemble ?',
  ],
  datasets: [
    {
      label: 'Oui',
      data: [40, 40, 67],
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
      data: [50, 40, 33],
      fill: true,
      backgroundColor: 'rgba(242, 0, 0, 0.2)',
      borderColor: 'rgb(171, 171, 171)',
      pointBackgroundColor: 'rgb(242, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(242, 0, 0)',
    },
    {
      label: 'Non pertinent',
      data: [10, 20, 0],
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

const stackedBar3 = {
  type: 'bar',
  data: stackedBarData,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 100,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Lutte contre l'effondrement de la biodiversité",
      },
    },
  },
};

const myChart3 = new Chart(document.getElementById('myChart3'), stackedBar3);

const stackedBarData4 = {
  labels: [
    "Trouvez-vous que l'effondrement de la biodiversité soit un sujet sérieusement pris en compte dans votre département/service/unité de travail ?",
    "Vous donne-t-on les moyens de mesurer ou de faire diminuer l'impact sur la biodiversité des produits ou service sur lesquels vous travaillez ?",
    'Pensez-vous que votre travail contribue à faire baisser la destruction de la biodiversité de la société dans son ensemble ?',
  ],
  datasets: [
    {
      label: 'Oui',
      data: [40, 40, 67],
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
      data: [50, 40, 33],
      fill: true,
      backgroundColor: 'rgba(242, 0, 0, 0.2)',
      borderColor: 'rgb(171, 171, 171)',
      pointBackgroundColor: 'rgb(242, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(242, 0, 0)',
    },
    {
      label: 'Non pertinent',
      data: [10, 20, 0],
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

const stackedBar4 = {
  type: 'bar',
  data: stackedBarData,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 100,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Lutte contre l'effondrement de la biodiversité",
      },
    },
  },
};

const myChart4 = new Chart(document.getElementById('myChart4'), stackedBar4);

const stackedBarData5 = {
  labels: [
    "Trouvez-vous que la réduction de la surconsommation de matériaux et d'eau soit un sujet sérieusement pris en compte dans votre département/service/unité de travail ?",
    "Vous donne-t-on les moyens de mesurer ou de faire diminuer la consommation de matériaux et d'eau des produits ou service sur lesquels vous travaillez ?",
    "Pensez-vous que votre travail contribue à faire baisser la consommation de matériaux et d'eau de la société dans son ensemble ?",
  ],
  datasets: [
    {
      label: 'Oui',
      data: [40, 40, 67],
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
      data: [50, 40, 33],
      fill: true,
      backgroundColor: 'rgba(242, 0, 0, 0.2)',
      borderColor: 'rgb(171, 171, 171)',
      pointBackgroundColor: 'rgb(242, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(242, 0, 0)',
    },
    {
      label: 'Non pertinent',
      data: [10, 20, 0],
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

const stackedBar5 = {
  type: 'bar',
  data: stackedBarData,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 100,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Réduction de consommation de ressources',
      },
    },
  },
};

const myChart5 = new Chart(document.getElementById('myChart5'), stackedBar5);

const stackedBarData6 = {
  labels: [
    "Vous a-t-on déjà proposé une formation, ou a minima des activités sérieuses d'information et de sensibilisation, sur les enjeux écologiques ?",
    "Vous a-t-on déja proposé une formation qui vous apporterait des compétences nécessaires pour participer à la transformation écologique de l'activité de votre entreprise ?",
    'Votre département/service/unité a-t-il un plan sérieux de réduction des impacts dûs à son fonctionnement quotidien ?',
    "Lors de votre dernier entretien annuel, les enjeux écologiques de l'entreprise ont-ils fait partie de la discussion ?",
    "Etes-vous sollicité par votre direction lors de l'élaboration de la stratégie de votre entreprise en matière d'enjeux écologiques ?",
  ],
  datasets: [
    {
      label: 'Oui',
      data: [40, 40, 67, 50, 20],
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
      data: [50, 40, 33, 25, 40],
      fill: true,
      backgroundColor: 'rgba(242, 0, 0, 0.2)',
      borderColor: 'rgb(171, 171, 171)',
      pointBackgroundColor: 'rgb(242, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(242, 0, 0)',
    },
    {
      label: 'Non pertinent',
      data: [10, 20, 0, 25, 40],
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

const stackedBar6 = {
  type: 'bar',
  data: stackedBarData,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 100,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Conséquences pour les salariés',
      },
    },
  },
};

const myChart6 = new Chart(document.getElementById('myChart6'), stackedBar6);
