import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form class="form-inline" action="">
        <div className="row">
          <div className="col  pl-5">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col-3 inline-block">
            <input
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col ">
            <select className="custom-select my-1 mr-sm-2 ">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col">
            <button className="btn btn-primary mr-10">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
