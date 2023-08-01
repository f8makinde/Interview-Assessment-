import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Piechart = () => {
  const categories = ["Chrome", "Safari", "Edge"],
    data = [
      {
        y: 21.04,
        color: ["#5570F1", "#FFCC91", "#97A5EB"],
        drilldown: {
          name: null,
          categories: ["Chrome v97.0", "Chrome v96.0", "Chrome v95.0"],
          data: [55, 30, 15],
        },
      },
    ],
    versionsData = [],
    dataLen = data.length;

  let i, j, drillDataLen, brightness;

  for (i = 0; i < dataLen; i += 1) {
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
      brightness = 0.2 - j / drillDataLen / 5;
      versionsData.push({
        name: null,
        y: data[i].drilldown.data[j],
        color: Highcharts.color(data[i].color[j]).brighten(brightness).get(),
      });
    }
  }

  const options = {
    chart: {
      type: "pie",
    },
    title: null,

    plotOptions: {
      pie: {
        shadow: false,
        center: ["50%", "50%"],
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
      },
    },
    tooltip: {
      valueSuffix: "%",
    },
    series: [
      {
        name: "Versions",
        data: versionsData,
        size: "70%",
        innerSize: "75%",
        dataLabels: {
          format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
          filter: {
            property: "y",
            operator: ">",
            value: 1,
          },
          style: {
            fontWeight: "normal",
          },
        },
        id: "marketing",
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 400,
          },
          chartOptions: {
            series: [
              {},
              {
                id: "marketing",
                dataLabels: {
                  enabled: false,
                },
              },
            ],
          },
        },
      ],
    },
  };

  return (
      <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default Piechart;
