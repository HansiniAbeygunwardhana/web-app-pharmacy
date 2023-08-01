import React, { useEffect, useState } from "react";
import "./BarChart.scss";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import SalesService from "../../../Services/SalesService";

const BarCharts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the data from the API using SalesService
    SalesService.getSalesValueByDayOfWeek()
      .then((response) => {
        // Convert the API response object to an array of objects with name and earnings properties
        const formattedData = Object.keys(response.data).map((dayOfWeek) => ({
          name: dayOfWeek,
          earnings: response.data[dayOfWeek],
        }));

        // Sort the data by the order of days in a week (from Monday to Sunday)
        const daysInWeek = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
        formattedData.sort(
          (a, b) => daysInWeek.indexOf(a.name) - daysInWeek.indexOf(b.name)
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
    <div style={{ width: "60%", height: 300 }} className="chart__sales">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="earnings" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
