import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SalesCard from "../../Card/SalesCard/SalesCard";
import "./ReportPage.scss";
import SalesService from "../../Services/SalesService";
import BarCharts from "../../Components/Chart/BarChart/BarChart";
import PieCharts from "../../Components/Chart/PieChart/PieChart";

const ReportPage = () => {
  const [salesForDay, setSalesForDay] = useState(null);
  const [salesForSevenDay, setSalesForSevenDay] = useState(null);
  const [salesForThirtyDay, setSalesForThirtyDay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get the current date in 'yyyy-MM-dd' format
    const currentDate = new Date().toISOString().split("T")[0];

    // Fetch the sales data for the current day using the SalesService
    SalesService.getSalesForDay(currentDate)
      .then((response) => {
        setSalesForDay(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
        setIsLoading(false);
      });

    SalesService.getSalesForLast7Days()
      .then((response) => {
        setSalesForSevenDay(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
        setIsLoading(false);
      });

    SalesService.getSalesForLast30Days()
      .then((response) => {
        setSalesForThirtyDay(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar logoDestination="/admindashboard" />
      <div className="Report_card">
        <SalesCard
          title1={"TODAY"}
          title2={"Total"}
          content1={"Sales Count :"}
          subcontent1={isLoading ? "Loading..." : salesForDay?.numberOfSales}
          content2={"Earnings :"}
          subcontent2={
            isLoading ? "Loading..." : `${salesForDay?.totalSalesValue} `
          }
        />
        <SalesCard
          title1={"LAST 7 DAYS"}
          title2={"Total"}
          content1={"Sales Count :"}
          subcontent1={
            isLoading ? "Loading..." : salesForSevenDay?.numberOfSales
          }
          content2={"Earnings :"}
          subcontent2={
            isLoading ? "Loading..." : `${salesForSevenDay?.totalSalesValue} `
          }
        />
        <SalesCard
          title1={"LAST 30 DAYS"}
          title2={"Total"}
          content1={"Sales Count :"}
          subcontent1={
            isLoading ? "Loading..." : salesForThirtyDay?.numberOfSales
          }
          content2={"Earnings :"}
          subcontent2={
            isLoading ? "Loading..." : `${salesForThirtyDay?.totalSalesValue} `
          }
        />
      </div>
      <div className="Report_chart">
        <BarCharts />
        <PieCharts />
      </div>
    </div>
  );
};

export default ReportPage;
