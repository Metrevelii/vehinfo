import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

const CalcForm = () => {
  const [auctions, setAuctions] = useState([]);
  const [states, setStates] = useState([]);
  const [ports, setPorts] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get("/api/calculator/all");
        setAuctions(response.data);
      } catch (error) {
        console.error("Error fetching auctions", error);
      }
    };
    fetchAuctions();
  }, []);

  const formik = useFormik({
    initialValues: {
      auction: "",
      state: "",
      port: "",
      destination: "",
    },
    onSubmit: (values) => {
      
    },
  });

  useEffect(() => {
    if (formik.values.auction) {
      const selectedAuction = auctions.find(
        (auc) => auc._id === formik.values.auction
      );
      if (selectedAuction) {
        setStates(selectedAuction.locations);
   
        formik.setFieldValue("state", "");
        formik.setFieldValue("port", "");
        formik.setFieldValue("destination", "");
        setPorts([]);
        setDestinations([]);
        setPrice(0);
      }
    }
  }, [formik.values.auction, auctions]);

  // Update ports when state changes
  useEffect(() => {
    if (formik.values.state) {
      const selectedState = states.find(
        (loc) => loc.name === formik.values.state
      );
      if (selectedState) {
        setPorts(selectedState.ports); 
        setDestinations(selectedState.destinations);  
        formik.setFieldValue("port", "");  
        formik.setFieldValue("destination", "");  
        setPrice(0); 
      }
    }
  }, [formik.values.state, states]);

 
  useEffect(() => {
    if (formik.values.destination) {
      const selectedState = states.find(
        (loc) => loc.name === formik.values.state
      );
      if (selectedState) {
        const selectedDestination = selectedState.destinations.find(
          (dest) => dest.name === formik.values.destination
        );
        if (selectedDestination) {
          setPrice(selectedDestination.price);
        }
      }
    }
  }, [formik.values.destination, states]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center w-[360px] h-[42px]">
          <label className="mr-4">Auction</label>
          <div className="w-[65%]">
            <select
              name="auction"
              value={formik.values.auction}
              onChange={formik.handleChange}
              className="w-full h-[34px] p-[6px_12px] bg-white border border-gray-300 rounded shadow-inner focus:border-blue-500 transition"
            >
              <option value="">Choose</option>
              {auctions.map((auction) => (
                <option key={auction._id} value={auction._id}>
                  {auction.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center w-[360px] h-[42px]">
          <label className="mr-4">State / City</label>
          <div className="w-[65%]">
            <select
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              disabled={!formik.values.auction}
              className="w-full h-[34px] p-[6px_12px] bg-white border border-gray-300 rounded shadow-inner focus:border-blue-500 transition"
            >
              <option value="">Choose</option>
              {states.map((location, index) => (
                <option key={index} value={location.name}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center w-[360px] h-[42px]">
          <label className="mr-4">USA Port</label>
          <div className="w-[65%]">
            <select
              name="port"
              value={formik.values.port}
              onChange={formik.handleChange}
              disabled={!formik.values.state}
              className="w-full h-[34px] p-[6px_12px] bg-white border border-gray-300 rounded shadow-inner focus:border-blue-500 transition"
            >
              <option value="">Choose</option>
              {ports.map((port, index) => (
                <option key={index} value={port.name}>
                  {port.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center w-[360px] h-[42px]">
          <label className="mr-4">Destination</label>
          <div className="w-[65%]">
            <select
              name="destination"
              value={formik.values.destination}
              onChange={formik.handleChange}
              disabled={!formik.values.port}
              className="w-full h-[34px] p-[6px_12px] bg-white border border-gray-300 rounded shadow-inner focus:border-blue-500 transition"
            >
              <option value="">Choose</option>
              {destinations.map((destination, index) => (
                <option key={index} value={destination.name}>
                  {destination.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 text-xl font-bold">{price} $</div>
    </form>
  );
};

export default CalcForm;