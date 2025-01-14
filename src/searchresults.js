import React from "react";
import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(booking => {
          return (
            <tr>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {" "}
                {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
