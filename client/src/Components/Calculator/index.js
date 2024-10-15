import React from "react";

import "../components.css";

const Calculator = () => {
  return (
    <div className="calculator__wrapper">
      <div className="calculator">
        <div className="calculator__inner">
          <div className="calculator__headline">
            <h3 className="calculator__headline-text">ყურადღება!</h3>
            <h5 className="calculator__headline-text">
              კალკულატორი აჩვენებს საცალო ფასს, სადილერო პირობების გასაგებად
              მიმართეთ კომპანიას
            </h5>
          </div>
          <form>
            <div className="calculator__modal">
                <div className="calculator__modal-group">
                    <label>Auction</label>
                    <div className="calculator__modal-auc">
                        <select name="auc_id" className="calculator__modal-aucSelect">
                            <option value>Choose</option>
                            <option value="1">Copart</option>
                            <option value="2">IAAI</option>
                            <option value="3">Manheim</option>
                            <option value="4">Adesa</option>
                            <option value="22">AuctionPipeline</option>
                            <option value="32">Canada</option>
                            <option value="30">SUBLOT COPART</option>
                            <option value="31">SUBLOT IAAI</option>
                        </select>
                    </div>
                </div>
                <div className="calculator__modal-group">
                    <label>State / City</label>
                    <div className="calculator__modal-auc">
                        <select name="city_id" className="calculator__modal-aucSelect">
                            
                        </select>
                    </div>
                </div>
                <div className="calculator__modal-group">
                    <label>USA Port</label>
                    <div className="calculator__modal-auc">
                        <select name="port_id" className="calculator__modal-aucSelect">
                            
                        </select>
                    </div>
                </div>
                <div className="calculator__modal-group">
                    <label>Destination</label>
                    <div className="calculator__modal-auc">
                        <select name="cc" className="calculator__modal-aucSelect">
                            
                        </select>
                    </div>
                </div>
            </div>
          </form>
          <div className="price">0 $</div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
