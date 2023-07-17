import React from "react";
import DashbordCard from "../../../Components/DashbordCard/DashbordCard";
import "./CustomerDashboardPage.scss";
import Navbar from "../../../Components/Navbar/Navbar";
import SubNavbar from "../../../Components/SubNavbar/SubNavbar";
import NotificationBox from "../../../Components/Notification/NotificationBox/NotificationBox";

const CustomerDashboardPage = () => {
  return (
    <div className="CustomerDashboardPage">
      <Navbar />
      <SubNavbar />
      <div className="CustomerDashboardPage__maincontainer">
        <h5 className="CustomerDashboardPage__header">WELCOME CUSTOMER !!</h5>
        <div className="CustomerDashboardPage__card_container">
          <DashbordCard
            title={"VIEW INVENTORY"}
            content={
              "VIEW, ADD, UPDATE, DELETE INVENTORY, ADD MINIMUM THRESHOLD"
            }
          />
          <DashbordCard
            title={"YOUR PROFILE"}
            content={"EDIT NAME, MOBILE NUMBER, EMAIL, AND PASSWORD"}
          />
          <DashbordCard
            title={"ALERTS"}
            content={"VIEW OR RESPONDS TO ALERTS"}
          />
        </div>
        <div className="CustomerDashboardPage__card_container">
          <DashbordCard
            title={"GENERATE REPORTS"}
            content={"GENERATE REPORTS, DOWNLOAD REPORTS, ANALYSING"}
          />
          <DashbordCard
            title={"UPLOADED PRESCRIPTIONS"}
            content={"CHECK UPLOADED PRESCRIPTIONS, FILL PRESCRIPTIONS"}
          />
          <DashbordCard
            title={"INVOICE DETAILS"}
            content={
              "VIEW ALL TRANSACTIONS, MANAGE PAYMENT METHODS AND SETTINGS. GENERATE INVOICES"
            }
          />
        </div>
      </div>
      {/* <div className="Employeedashboard__subcontainer">
        <div className="Employeedashboard__subcontainer__notification">
          <div className="Employeedashboard__subcontainer__notification__title">
            PRODUCT ALERTS
          </div>
          <div>
            {" "}
            <NotificationBox
              message={"product #002 is expired in 5 days"}
              time={"5 min"}
            />
            <NotificationBox
              message={"product #002 is expired in 5 days"}
              time={"5 min"}
            />
          </div>
        </div>
        <div className="Employeedashboard__subcontainer__notification">
          <div className="Employeedashboard__subcontainer__notification__title">
            UNFILLED PRESCRIPTIONS!!!
          </div>
          <div>
            {" "}
            <NotificationBox
              message={"product #002 is expired in 5 days"}
              time={"5 min"}
            />
            <NotificationBox
              message={"product #002 is expired in 5 days"}
              time={"5 min"}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CustomerDashboardPage;
