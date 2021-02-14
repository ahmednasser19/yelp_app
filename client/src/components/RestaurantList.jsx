import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
const RestaurantList = (props) => {
  const { restuarants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");

        setRestaurants(response.data.data.restuarants);
      } catch (err) {}
    };

    fetchData();
  }, []);

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
          {restuarants &&
            restuarants.map((restuarants) => {
              return (
                <tr key={restuarants.id}>
                  <td>{restuarants.name}</td>
                  <td>{restuarants.location}</td>
                  <td>{"$".repeat(restuarants.price_range)}</td>
                  <td>reviews</td>
                  <td>
                    <button className="btn btn-warning">update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        {/* 
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
        </tbody> */}
      </table>
    </div>
  );
};

export default RestaurantList;
