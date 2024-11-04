import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

import Select from "react-select";

import { useSelector } from 'react-redux';

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid #e2e8f0", // Tailwind's border-gray-300
    borderRadius: "8px",
    padding: "2px",
    boxShadow: "inset 0px 1px 3px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      borderColor: "#3b82f6", // Tailwind's focus:border-blue-500
    },
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "10px 12px",
    backgroundColor: state.isSelected ? "#3b82f6" : state.isFocused ? "#3b82f6" : null, // Tailwind's bg-blue-500 for selected, bg-gray-200 for hover
    color: state.isSelected ? "#ffffff" : "#000000", // White text when selected
    "&:hover": {
      backgroundColor: "#3b82f6", // Tailwind's bg-gray-200
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

   const users = useSelector(state => state.users);

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
      alert('Price updated successfully!');
      // Optionally, fetch the auctions again to refresh data
      const response = await axios.get("/api/calculator/all");
      setAuctions(response.data);
    } catch (error) {
      console.error("Error updating price", error);
      alert('Failed to update price.');
    }
  };

  return (
    <form onSubmit={handlePriceUpdate}>
      <div className="flex flex-col space-y-4">
        {/* Auction Dropdown */}
        <div className="w-[360px]">
          <label className="mr-4">Auction</label>
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
        <div className="w-[360px]">
          <label className="mr-4">State / City</label>
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
        <div className="w-[360px]">
          <label className="mr-4">USA Port</label>
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
        <div className="w-[360px]">
          <label className="mr-4">Destination</label>
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

      <div className="mt-6 text-xl font-bold">{price} $</div>
          { users.data.role === 'admin' ? 
          
            <div className="mt-4">
              <label className="mr-4">New Price</label>
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="border rounded p-2"
                min="0"
              />
              <button
                onClick={handlePriceUpdate}
                className="ml-4 bg-blue-500 text-white p-2 rounded"
              >
                Update Price
              </button>
          </div>

           : 
           null
          }
    </form>
  );
};

export default CalcForm;