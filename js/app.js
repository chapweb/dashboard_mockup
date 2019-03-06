document.querySelector('.nav').addEventListener('click', e => {
    console.log(e.target);
})





const trafficChart = document.getElementById("trafficChart").getContext("2d");
const dailyTrafficChart = document.getElementById("dailyTrafficChart").getContext("2d");
const mobileUserChart = document.getElementById("mobileUserChart").getContext("2d");

let myTrafficChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ["16-22",
                 "23-29",
                 "30-5",
                 "6-12",
                 "13-19",
                 "20-26",
                 "27-3",
                 "4-10",
                 "11-17",
                 "18-24",
                 "25-31"
                ],
        datasets: [{
            label: 'Traffic',
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: ['rgba(116, 119, 191, 0.2)'],
            borderColor: ['rgba(77,16,114,1)'],
            borderWidth: .5,
            borderCapStyle: 'round',
            borderJoinStyle: 'milter',
            lineTension: 0,
            pointBackgroundColor: 'white',
            pointBorderWidth: 2,
            pointRadius: 5,
        }]
    },
    options: {
        // Chart Responsiveness --------
        responsive: true,
        responsiveAnimationDuration: 500,
        maintainAspectRatio: false,
        aspectRatio: 7,
        // -----------------------------
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        }
    }
});

const myDailyTrafficChart = new Chart(dailyTrafficChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Daily Traffic',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgb(116, 119, 191)',
            borderColor: 'rgb(116, 119, 191)',
            borderWidth: 2,
          hoverBackgroundColor: 'rgb(116, 119, 191, 0.7)'

        }]
    },
    options: {
        // Chart Responsiveness --------
        responsive: true,
        responsiveAnimationDuration: 500,
        maintainAspectRatio: false,
        aspectRatio: 0,
        // -----------------------------
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        }
    }
});

const myMobileChart = new Chart(mobileUserChart, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablet", "Desktop"],
        datasets: [{
            label: 'Mobile Users',
            data: [75, 12.5, 12.5],
            backgroundColor: ['rgb(116, 119, 191)', 'rgb(129, 201, 143)', 'rgb(116, 177, 191)'],
            borderColor: ['rgb(116, 119, 191)', 'rgb(129, 201, 143)', 'rgb(116, 177, 191)'],
            borderWidth: 2,
          hoverBackgroundColor: ['rgb(116, 119, 191, 0.7)', 'rgb(129, 201, 143, 0.7)', 'rgb(116, 177, 191, 0.7)'],
          hoverBorderWidth: 5
        }]
    },
    options: {
        // Chart Responsiveness --------
        responsive: true,
        responsiveAnimationDuration: 500,
        maintainAspectRatio: false,
        aspectRatio: 1,
        // -----------------------------
        legend: {
          display: true,
          position: "right",
        },
        rotation: 2 * Math.PI
    }
});
