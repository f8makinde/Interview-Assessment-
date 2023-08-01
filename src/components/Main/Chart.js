import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import Typography from "@/components/typography";

var colors = {
  base: "#5570F1", 
  negative: "#EEF0FA",
  positive: "#5570F1",
};

const Chart = () => {
    const options = {
            chart: {
              type: 'column'
            },
            title: null,
            subtitle: null,
            xAxis: {
            min: 0,
            title: null,
              categories: ['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'],
              crosshair: false,
              accessibility: {
                description: 'Countries'
              },
          tickLength: 0,
            },
            yAxis: {
              min: 0,
              title: null,
                  gridLineWidth: 0, 
           gridLineWidth: 0,
              lineWidth: 0,
            },
            tooltip: {
              valueSuffix: ' (1000 MT)'
            },
            plotOptions: {
              column: {
                pointPadding: 0.3,
                borderWidth: 0,
                width:13,
                borderRadius: 24, 
                borderColor: "transparent", 
                dataLabels: {
                  enabled: false,
                },
                grouping: false, 
                 backdrop: {
                  backgroundColor: "#EEF0FA", 
                },
          
              }
            },
            series: [{
              data: [100000, 30000, 60000, 60000, 50000, 40000, 90000],
               color: "#5570F1",
                backgroundColor: "#EEF0FA", 
            }, ]
          
      };

  return (
    <div>
      <div className="flex justify-between items-center mb-5 text-black10">
        <div className="flex items-center">
          <div
            className="!font-aeonik-pro !text-[#E5E5E5]"
            variant="body1"
            label="Token Activity"
          />
          <ul>
            <div
              className="!font-aeonik-pro !text-[#E5E5E5]"
              variant="body1"
              label="Volume"
            />
          </ul>
        </div>
        <div className="flex items-center ">
          <div className="flex items-start justify-between">
            <div className=" rounded-[2px]">
              <div
                variant="body0.5"
                className="!font-inter px-3 py-1 flex items-center !text-black60"
                label="D"
              />
            </div>
          
              <div
                variant="body0.5"
                className="!font-inter px-3 py-1 flex items-center !text-black10"
                label="7"
              />
       
            <div className=" rounded-[2px]">
              <div
                variant="body0.5"
                className="!font-inter px-3 py-1 flex items-center !text-black10"
                label="30 D"
              />
            </div>
            <div className=" rounded-[2px]">
              <div
                variant="body0.5"
                className="!font-inter px-3 py-1 flex items-center !text-black10"
                label="6 M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pool-list-chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default Chart;