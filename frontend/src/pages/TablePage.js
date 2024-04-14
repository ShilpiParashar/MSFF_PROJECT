import React from "react";
import { useState } from "react";
import axios from "axios";
import classes from "./TablePage.module.css";

const TablePage = () => {
  const [data, setdata] = useState([]);

  axios.get("http://localhost:4000/participants").then(
    (response) => {
      console.log(response);
      setdata(response.data.data);
    },
    (err) => {
      console.log(err);
    }
  );

  return (
    <div>
      <h1>Participants Data</h1>
      <table class="table table-striped table-hover">
        <thead>
          <tr class="shadow-sm mb-5 bg-body rounded">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone no.</th>
            <th>Short Film Name</th>
            <th>Language</th>
            <th>Short Film Summary</th>
            <th>Video Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((participant, key) => (
            <tr>
              <td>{key + 1}</td>
              <td>{participant.name}</td>
              <td>{participant.mobileNumber}</td>
              <td>{participant.email}</td>
              <td>{participant.language}</td>
              <td>{participant.shortFilmName}</td>
              <td>{participant.shortFilmSummary}</td>
              <td>{participant.driveLink}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
