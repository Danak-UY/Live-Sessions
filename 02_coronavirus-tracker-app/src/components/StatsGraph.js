import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import { numeral } from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: { radius: 0 },
  },
  mantainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    // callbacks: {
    //   label: function (tooltip, data) {
    //     return numeral(tooltip.value).format("+0,0");
    //   },
    // },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          parse: "DD/MM/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: { display: false },
        // ticks: {
        //   callback: function (value, index, values) {
        //     return numeral(value).format("0a");
        //   },
        // },
      },
    ],
  },
};

function StatsGraph({ category = "cases" }) {
  const dispatch = useDispatch();
  const APIURL = useSelector((state) => state.APIURL);
  const historical = useSelector((state) => state.historicalDays);
  const graphData = useSelector((state) => state.graphData);
  const categoryType = useState(category);

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

  // useEffect(() => {
  //   console.log("Graph data", graphData);
  //   setChartDataOrder(buildChartData(graphData, categoryType));
  // }, []);

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
  const [chartDataOrder, setChartDataOrder] = useState(
    graphData ? buildChartData(graphData, categoryType) : []
  );

  return (
    <div>
      <Line
        options={options}
        data={{
          datasets: [
            {
              data: chartDataOrder,
            },
          ],
        }}
      />
    </div>
  );
}

export default StatsGraph;
