import React from 'react'

function Address() {
    return (
        <form className="row g-3 needs-validation" novalidate>
        <div className="row">
          <div className="col-10">
        <div className="col-md-6">
          <label for="validationCustom03" className="form-label">Address Line 1</label>
          <input type="text" className="form-control1" id="validationCustom03" required/>
        </div>
      
        <div className="col-md-6">
          <label for="validationCustom03 my-2" className="form-label">Address Line 2</label>
          <input type="text" className="form-control1 my-2" required/>
        </div>
      
        <div className="col-md-6">
          <label for="validationCustom04" className="form-label">State</label>
          <select className="form-select1" required>
            <option selected disabled value="">Choose...</option>
            <option>Punjab</option>
            <option>Uttarakhand</option>
            <option>Hariyana</option>
            <option>Goa</option>
          </select>
        </div>
      
      
        <div className="col-md-6">
          <label for="validationCustom03 mt-4" className="form-label">Address Line 1</label>
          <input type="text" className="form-control1 mt-4" required/>
        </div>
      
        <div className="col-md-6">
          <label for="validationCustom01 my-2" className="form-label">Address Line 2</label>
          <input type="text" className="form-control1 my-2" required/>
        </div>
        
        <div className="col-md-6">
          <label for="validationCustom04 mb-5" className="form-label">State</label>
          <select className="form-select1 mb-5" required>
            <option selected disabled value="">Choose...</option>
            <option>Punjab</option>
            <option>Uttarakhand</option>
            <option>Hariyana</option>
            <option>Goa</option>
          </select>
        </div>
        </div>
        </div>
      </form>
      
    )
}

export default Address;
