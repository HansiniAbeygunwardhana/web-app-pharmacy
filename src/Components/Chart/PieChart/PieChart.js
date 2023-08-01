import React, { useEffect, useState } from "react";
import "./PieChart.scss";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import SalesService from "../../../Services/SalesService";

const PieCharts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the data from the API using SalesService
    SalesService.getPercentageOfSalesForEachProduct()
      .then((response) => {
        // Convert the API response object to an array of objects with name and value properties
        const formattedData = Object.entries(response.data).map(
          ([name, value]) => ({
            name,
            value: parseFloat(value.replace("%", "")), // Remove "%" and parse the value as a float
          })
        );

        setData(formattedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ width: "50%", height: 400 }} className="chart__sale">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {/* Customizing the label in the pie chart */}
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`#${((Math.random() * 0xffffff) << 0)
                  .toString(16)
                  .padStart(6, "0")}`}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
};

export default PieCharts;
