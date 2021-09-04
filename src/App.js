import React, { useState } from "react";
import "./App.css";
import Table_data from "./Table.json";
import Address from "./Address";

function App() {
  var table = document.getElementById("table");
  var sumValue = 0;
  var totalVal = 0;

  const [data, setData] = useState(Table_data);

  const [addData, setAddData] = useState({
    id: "",
    itemName: "",
    quantity: "",
    rate: "",
    amount: "",
    tax: ""
  });

  const handleAddDataChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newData = { ...addData };
    newData[fieldName] = fieldValue;

    setAddData(newData);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: addData.id,
      itemName: addData.itemName,
      quantity: addData.quantity,
      rate: addData.rate,
      amount: addData.quantity * addData.rate,
      tax: addData.tax
    };
    const newItems = [...data, newItem];
    setData(newItems);
    
    sumValue = sumValue + newItem.amount;
    for (var i = 1; i < table.rows.length; i++) {
      sumValue = sumValue + parseInt(table.rows[i].cells[4].innerHTML);
    }
    totalVal = sumValue + (sumValue * addData.tax)/100;

    document.getElementById("sub").innerHTML = sumValue;
    document.getElementById("taxVal").innerHTML = totalVal;

    var converter = require('number-to-words');
    var words = converter.toWords(totalVal);
    document.getElementById("inwords").innerHTML = words;
  };


  return (
    <>
      <div className="container border p-5 my-5">
        <h4 className="mb-5">TAX INVOICE</h4>

        <Address />

        <table className="table border" id="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Rate</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
                <th scope="row">{d.id}</th>
                <td>{d.itemName}</td>
                <td>{d.quantity}</td>
                <td>{d.rate}</td>
                <td id="subsum">{d.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <form onSubmit={handleAddSubmit}>
          <input
            type="number"
            className="w-10 me-5"
            name="id"
            required="required"
            placeholder="S. No."
            onChange={handleAddDataChange}
          />
          <input
            type="text"
            className="me-5"
            name="itemName"
            required="required"
            placeholder="New Item name"
            onChange={handleAddDataChange}
          />
          <input
            type="number"
            className="me-5"
            name="quantity"
            required="required"
            placeholder="Quantity"
            onChange={handleAddDataChange}
          />
          <input
            type="number"
            className="me-5"
            name="rate"
            required="required"
            placeholder="Rate"
            onChange={handleAddDataChange}
          />
          <button type="submit" className="d-block mt-4">
            Add Item
          </button>
        </form>

        <hr />

        <div className="total">
          <div className="row">
            <div className="col-9"></div>
            <div className="col-3">
              <div className="col-md-12">
                <label for="validationCustom03 my-2" className="form-label me-5">
                  Sub Total
                </label>
                <p className="form-control1 sub my-2" id="sub"></p>
              </div>

              <div className="col-md-12">
                <label for="validationCustom03" className="form-label me-5">
                  Tax (in %)
                </label>
                <input
                  type="number"
                  name="tax"
                  className="form-control1 w-50"
                  onChange={handleAddDataChange}
                  required
                />
              </div>

              <div className="col-md-12">
                <label for="validationCustom03 my-2" className="form-label me-5">
                  Total
                </label>
                <p className="form-control1 my-2 ms-5" id="taxVal"></p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-end">
        <p className="word">Total in words : </p> <p className="word" id="inwords"></p>
        </div>
      </div>
    </>
  );
}

export default App;
