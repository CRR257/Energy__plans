<template>
  <div>
    <Header :name="title"></Header>
    <div>
      <router-link class="nav-link" :to="{ name: 'Welcome' }" exact
        >Go to main page</router-link
      >
    </div>
    <div class="container">
      <div class="container__info">
        <span>
          At Energy_plans we have different plans with different prices depending
            on the hour of the day you use the energy:
        </span>
        <br />
        <span>
          - The easiest one is the <span class="fare__one">"unprecio"</span> which
            has 1 period so you pay energy at the same price all day
        </span>
        <br />
        <span>
          - Then we have a more clever option which is <span class="fare__two">
            "dosprecios"</span> which has one price from 13h to 23h and another
            price on the rest of hours
        </span>
        <br />
        <span>
          - And finally, companies can benefit from <span class="fare__tree">
            "3.0a"</span> which has multiple periods with multiple prices.
        </span>
      </div>
      <main class="energy__chart">
        <canvas id="energy__chart"></canvas>
      </main>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';
import Header from './Header.vue';
import pricesData from '../services/prices.json';

export default {
  name: 'EnergyPlans',
  data() {
    return {
      fares: pricesData,
      loaded: false,
      parsedFaresChart: [],
      data: [],
      hoursFirstPrice: [],
      title: 'Energy Plans',
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.getChart('energy__chart', this.priceData);
  },
  methods: {
    getChart() {
      const parsedPrices = {};
      const faresData = Object.entries(this.fares);
      faresData.forEach((fare) => {
        const fareName = fare[0];
        const fareInfo = fare[1];
        let priceArr = [];
        fareInfo.forEach((hourSegment) => {
          const hourSegmentInterval = Object.keys(hourSegment)[0];
          const hourSegmentPrice = Object.values(hourSegment)[0];
          const init = hourSegmentInterval.substring(0, hourSegmentInterval.indexOf('-'));
          const end = hourSegmentInterval.substring(hourSegmentInterval.indexOf('-') + 1);
          priceArr = priceArr.concat(Array(end - init + 1).fill(hourSegmentPrice));
        });
        parsedPrices[fareName] = priceArr;
      });
      console.log(parsedPrices);
      const keys = Object.keys(parsedPrices);
      const values = Object.values(parsedPrices);
      for (let i = 0; i < keys.length; i += 1) {
        this.parsedFaresChart.push(keys[i]);
      }
      for (let i = 0; i < values.length; i += 1) {
        this.data.push(values[i]);
      }
      const energyChart = document.getElementById('energy__chart');
      this.chart = new Chart(energyChart, {
        type: 'line',
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21, 22, 23],
          datasets: [
            {
              label: this.parsedFaresChart[0],
              type: 'line',
              borderColor: '#cc1024',
              fill: false,
              steppedLine: true,
              data: this.data[0],
            },
            {
              label: this.parsedFaresChart[1],
              type: 'line',
              borderColor: '#0322ab',
              fill: false,
              steppedLine: true,
              data: this.data[1],
            },
            {
              label: this.parsedFaresChart[2],
              type: 'line',
              borderColor: '#fd8e0b',
              fill: false,
              steppedLine: true,
              data: this.data[2],
            },
          ],
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Show fares',
          },
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Prices in euro cents',
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Hours/Day',
                },
              },
            ],
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  position: absolute;
  top: 66px;
  left: 12px;
  font-size: 15px;
  letter-spacing: 1.4px;
  padding: 5px 15px 0 0;
  border-right: 1px solid black;
}
.container {
  max-width: 1000px;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  &__info {
    position: relative;
    top: 8rem;
    text-align: left;
  }
}
canvas {
  padding: 3rem 0;
}
span {
  letter-spacing: 1.1px;
  line-height: 1.3;
}
.energy__chart {
  position: relative;
  top: 8rem;
}
.fare {
  &__one {
    background-color: red;
  }
  &__two {
  background-color: blue;
  }
  &__tree {
  background-color: orange;
  }
}
</style>
