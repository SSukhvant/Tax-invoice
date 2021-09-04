import React, { useState } from "react";
import "./App.css";
import Table_data from "./Table.json";

const Table = () => {
 
    const [data, setData] = useState(Table_data);

    const [addData, setAddData] = useState({
        id: '',
        itemName: '',
        quantity: '',
        rate: '',
        amount: '',
    });

    const handleAddDataChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newData = { ...addData};
        newData[fieldName] = fieldValue;

        setAddData(newData);
    }

    const handleAddSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            id: addData.id,
            itemName: addData.itemName,
            quantity: addData.quantity,
            rate: addData.rate,
            amount: addData.amount,

        };

        const newItems = [...data, newItem];
        setData(newItems);
    }

  return (
    <>
      <table class="table border">
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
        {
            data.map((d) => (
                <tr>
                <td scope="row">{d.id}</td>
                <td>{d.itemName}</td>
                <td>{d.quantity}</td>
                <td>{d.rate}</td>
                <td>{d.quantity * d.rate}</td>
            </tr>
            ))
        }
        </tbody>
      </table>
      
      <form onSubmit={handleAddSubmit}>
      <input type="number" className="w-10 me-5" name="id" required="required" placeholder="S. No." onChange={handleAddDataChange} />
      <input type="text" className="me-5" name="itemName" required="required" placeholder="New Item name" onChange={handleAddDataChange} />
      <input type="number" className="me-5" name="quantity" required="required" placeholder="Quantity" onChange={handleAddDataChange} />
      <input type="number" className="me-5" name="rate" required="required" placeholder="Rate" onChange={handleAddDataChange} />
      {/* <input type="number" className="me-5" name="amount" required="required" placeholder="Amount" onChange={handleAddDataChange} /> */}

      <button type="submit" className="d-block mt-4">Add Item</button>
      </form>
    </>
  );
}

export default Table;
