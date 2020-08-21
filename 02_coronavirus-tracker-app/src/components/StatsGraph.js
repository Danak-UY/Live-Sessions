import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

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
    callbacks: {
      label: function (tooltipItem, data) {
        return ` + ${numeral(tooltipItem.value).format("0,0")}`;
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          parser: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          maxTicksLimit: 8,
          maxRotation: 0,
          padding: 4,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          padding: -12,
          z: 5,
          mirror: true,
          labelOffset: 20,
          beginAtZero: true,
          maxTicksLimit: 8,
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
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
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const [chartDataOrder, setChartDataOrder] = useState(
    graphData ? buildChartData(graphData, category) : []
  );

  useEffect(() => {
    let route = selectedCountry === "worldwide" ? "all" : selectedCountry;
    getGraphData(APIURL, route, historical);
  }, [selectedCountry, historical]);

  useEffect(() => {
    setChartDataOrder(buildChartData(graphData, category));
  }, [category, graphData]);

  async function getGraphData(url, countryCode, historicalDays) {
    await fetch(`${url}/historical/${countryCode}?lastdays=${historicalDays}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.message) {
          dispatch({
            type: "SET_GRAPH_DATA",
            payload: countryCode === "all" ? data : data.timeline,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
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
    </>
  );
}

export default StatsGraph;
