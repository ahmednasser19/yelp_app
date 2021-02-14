import React from "react";

const RestaurantList = () => {
  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead className="table-secondary">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>macdonalds</td>
            <td>new york</td>
            <td>$$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">update</button>
            </td>
            <td>
              <button className="btn btn-danger">delete</button>
            </td>
          </tr>

          <tr>
            <td>hardees</td>
            <td>la</td>
            <td>$$$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">update</button>
            </td>
            <td>
              <button className="btn btn-danger">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;