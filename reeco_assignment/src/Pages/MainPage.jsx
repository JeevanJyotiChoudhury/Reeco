import React from "react";
import TopNav from "../Components/TopNav";
import OrderDiv from "../Components/OrderDiv";
import OrderDetails from "../Components/OrderDetails";

const MainPage = () => {
  return (
    <div>
      <TopNav />
      <OrderDiv />
      <OrderDetails/>
    </div>
  );
};

export default MainPage;
