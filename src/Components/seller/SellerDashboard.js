import React from "react";
import SellerMenuBar from "./SellerMenuBar";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { green } from "@mui/material/colors";

const SellerDashboard = () => {
  useEffect(() => {}, []);

  return (
    <div className="row" style={{ height: "90vh" }}>
      <Toaster position="center" reverseOrder={true} />

      <SellerMenuBar />

      <div className="col-7">
        <h1 style={{fontWeight:600,color:"green"}}>
          Welcome to AgroCart Seller Section{" "}
          <h1 className="">
            {JSON.parse(sessionStorage.getItem("seller"))?.companyName}
          </h1>
          <img src=".\seller.jpg" alt="alternative-text" width="100%" height="100%" ></img>
        </h1>
      

      </div>
    </div>
  );
};

export default SellerDashboard;
