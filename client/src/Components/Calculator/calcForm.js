import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

import Select from "react-select";

import { useSelector } from "react-redux";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "2px",
    margin: "5px 0",
    boxShadow: "inset 0px 1px 3px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      borderColor: "#3b82f6",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "10px 12px",
    backgroundColor: state.isSelected
      ? "#3b82f6"
      : state.isFocused
      ? "#3b82f6"
      : null,
    color: state.isSelected ? "#ffffff" : "#000000",
    "&:hover": {
      backgroundColor: "#3b82f6",
      color: "#ffffff",
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000000",
  }),
};

const CalcForm = () => {
  const [auctions, setAuctions] = useState([]);
  const [states, setStates] = useState([]);
  const [ports, setPorts] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [price, setPrice] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [destinationId, setDestinationId] = useState(null);

  const users = useSelector((state) => state.users);

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
      console.log(values);
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
          setDestinationId(selectedDestination._id);
        }
      }
    }
  }, [formik.values.destination, states]);

  // Convert data for react-select format
  const auctionOptions = auctions.map((auction) => ({
    value: auction._id,
    label: auction.name,
  }));

  const stateOptions = states.map((state) => ({
    value: state.name,
    label: state.name,
  }));

  const portOptions = ports.map((port) => ({
    value: port.name,
    label: port.name,
  }));

  const destinationOptions = destinations.map((destination) => ({
    value: destination.name,
    label: destination.name,
  }));

  const handlePriceUpdate = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await axios.patch(`/api/calculator/calc/destination/${destinationId}`, {
        price: newPrice,
      });
      alert("Price updated successfully!");
      // Optionally, fetch the auctions again to refresh data
      const response = await axios.get("/api/calculator/all");
      setAuctions(response.data);
    } catch (error) {
      console.error("Error updating price", error);
      alert("Failed to update price.");
    }
  };

  return (
    <form onSubmit={handlePriceUpdate}>
      <div className="flex flex-col space-y-4">
        {/* Auction Dropdown */}
        <div className="w-full lg:w-[360px] xl:w-[360px] 2xl:w-[360px]">
          <label className="mr-4 font-interMedium text-[16px] ml-[5px] text-primary-blue">
            Auction
          </label>
          <Select
            name="auction"
            options={auctionOptions}
            value={auctionOptions.find(
              (option) => option.value === formik.values.auction
            )}
            onChange={(selectedOption) =>
              formik.setFieldValue("auction", selectedOption.value)
            }
            styles={customStyles}
          />
        </div>

        {/* State/City Dropdown */}
        <div className="w-full lg:w-[360px] xl:w-[360px] 2xl:w-[360px]">
          <label className="mr-4 font-interMedium text-[16px] ml-[5px] text-primary-blue">
            State / City
          </label>
          <Select
            name="state"
            options={stateOptions}
            value={stateOptions.find(
              (option) => option.value === formik.values.state
            )}
            onChange={(selectedOption) =>
              formik.setFieldValue("state", selectedOption.value)
            }
            isDisabled={!formik.values.auction}
            styles={customStyles}
          />
        </div>

        {/* Port Dropdown */}
        <div className="w-full lg:w-[360px] xl:w-[360px] 2xl:w-[360px]">
          <label className="mr-4 font-interMedium text-[16px] ml-[5px] text-primary-blue">
            USA Port
          </label>
          <Select
            name="port"
            options={portOptions}
            value={portOptions.find(
              (option) => option.value === formik.values.port
            )}
            onChange={(selectedOption) =>
              formik.setFieldValue("port", selectedOption.value)
            }
            isDisabled={!formik.values.state}
            styles={customStyles}
          />
        </div>

        {/* Destination Dropdown */}
        <div className="w-full lg:w-[360px] xl:w-[360px] 2xl:w-[360px]">
          <label className="mr-4 font-interMedium text-[16px] ml-[5px] text-primary-blue">
            Destination
          </label>
          <Select
            name="destination"
            options={destinationOptions}
            value={destinationOptions.find(
              (option) => option.value === formik.values.destination
            )}
            onChange={(selectedOption) =>
              formik.setFieldValue("destination", selectedOption.value)
            }
            isDisabled={!formik.values.port}
            styles={customStyles}
          />
        </div>
      </div>

      <div className="flex justify-start items-center mt-6 w-full">
        <p className="font-interBold text-[20px] text-primary-blue">Price :</p>
        <p className="font-interBold text-[20px] text-primary-blue ml-[10px]">
          {price} $
        </p>
      </div>

      {users.data.role === "admin" ? (
        <div className="flex items-start flex-col justify-start">
          <div className="mt-4 w-full flex justify-between items-center">
            <label className="mr-4 font-interMedium text-[16px] ml-[5px] text-primary-blue">
              New Price
            </label>
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              className="border rounded p-2 w-[50%]"
              min="0"
            />
          </div>
          <button
            onClick={handlePriceUpdate}
            className="mt-[10px] text-interMedium text-[16px] px-[25px] bg-primary-blue flex justify-start items-center text-primary-white w-auto p-2 rounded "
          >
            Update Price
          </button>
        </div>
      ) : null}
    </form>
  );
};

export default CalcForm;
