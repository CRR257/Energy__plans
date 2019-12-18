<template>
  <div class="energy">
  <Header />
   <div class="fares">
      <div class="fares__information">
        <span>
          At Energy plans we have different plans with different prices depending
            on the hour of the day you use the energy:
        </span>
        <br />
        <span>
          - The easiest one is the <span class="fare fare__one">"unprecio"</span> which
            has 1 period so you pay energy at the same price all day
        </span>
        <br />
        <span>
          - Then we have a more clever option which is <span class="fare fare__two">
            "dosprecios"</span> which has one price from 13h to 23h and another
            price on the rest of hours
        </span>
        <br />
        <span>
          - And finally, companies can benefit from <span class="fare fare__tree">
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
      parsedFaresChart: [],
      data: [],
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
      /* Object.entries(this.fares) returns the fares object as an array like
          faresData = [
            ["unprecio", [{"0-23":0.123}]],
            ["dosprecios", [{"0-13": 0.079}, {"14-23": 0.074}]],
            ...
          ]
      */
      faresData.forEach((fare) => {
        const fareName = fare[0];
        const fareInfo = fare[1];
        let priceArr = [];
        fareInfo.forEach((hourSegment) => {
          const hourSegmentInterval = Object.keys(hourSegment)[0];
          /* Object.keys always returns an array, need to get the only string
          we have inside position 0 */
          const hourSegmentPrice = Object.values(hourSegment)[0];
          /* Same as above */
          const init = hourSegmentInterval.substring(0, hourSegmentInterval.indexOf('-'));
          const end = hourSegmentInterval.substring(hourSegmentInterval.indexOf('-') + 1);
          priceArr = priceArr.concat(Array(end - init + 1).fill(hourSegmentPrice));
        });
        parsedPrices[fareName] = priceArr;
      });
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
          tooltips: {
            callbacks: {
              label: tooltipItem => (Number(tooltipItem.yLabel).toFixed(3)),
            },
          },
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  callback: value => (`${value.toFixed(3)}€`),
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Prices in euros',
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

.routes {
  display: flex;
  font-size: 18px;
  &__link {
    top: 25px;
    position: relative;
    font-size: 15px;
    color:black;
    text-decoration: unset;
  }
}
.router-link-active {
  color: green;
}
a {
  padding: 5px 15px 0 7px;
  border-right: 1px solid black;
}
.energy {
  width: 80%;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}
.fares{
  max-width: 80%;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  &__information{
    position: relative;
    top: 4rem;
    text-align: left;
  }
}
canvas {
  padding: 4rem 0;
}
span {
  letter-spacing: 1.1px;
  line-height: 1.3;
}
.energy__chart {
  position: relative;
  top: 3rem;
}
.fare {
  border-radius: 3px;
  padding: 1px 2px;
  &__one {
    background-color: #ff0000ba;
  }
  &__two {
    background-color: #0762c9ab;
  }
  &__tree {
  background-color: #ffa500bd;
  }
}
</style>
