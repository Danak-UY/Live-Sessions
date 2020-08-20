import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import { numeral } from "numeral";

import { categoryColors } from "./../assets/styles/colors.js";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    // callbacks: {
    //   label: function (tooltipItem, data) {
    //     return numeral(tooltipItem.value).format("+0,0");
    //   },
    // },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          maxTicksLimit: 8,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          // callback: function (value, index, values) {
          //   return numeral(value).format("0a");
          // },
        },
      },
    ],
  },
};

const buildChartData = (data, type) => {
  const chartData = [];
  let lastDataPoint;
  for (let date in data[type]) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[type][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[type][date];
  }
  return chartData;
};

function StatsGraph({ category = "cases" }) {
  const dispatch = useDispatch();
  const APIURL = useSelector((state) => state.APIURL);
  const historical = useSelector((state) => state.historicalDays);
  const graphData = useSelector((state) => state.graphData);
  const [chartDataOrder, setChartDataOrder] = useState(
    graphData ? buildChartData(graphData, category) : []
  );

  useEffect(() => {
    const getGraphData = async () => {
      await fetch(`${APIURL}/historical/all?lastdays=${historical}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "SET_GRAPH_DATA",
            payload: data,
          });
        });
    };
    getGraphData();
  }, []);

  useEffect(() => {
    console.log("Graph data", graphData);
    setChartDataOrder(buildChartData(graphData, category));
  }, [category, graphData]);

  return (
    <div>
      {chartDataOrder.length !== 0 && (
        <Line
          style={{ width: "100%" }}
          options={options}
          data={{
            datasets: [
              {
                borderColor: categoryColors[category].hex,
                backgroundColor: categoryColors[category].halfOp,
                data: chartDataOrder,
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default StatsGraph;
