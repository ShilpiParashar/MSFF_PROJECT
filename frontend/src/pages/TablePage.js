import React from "react";
import classes from "./TablePage.module.css";
const TablePage = () => {
  return (
    <div>
      <h2>Paticipants Data</h2>
      <table className="my-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone no.</th>
            <th>Short Film Name</th>
            <th>Language</th>
            <th>Short Film Summary</th>
            <th>Drive Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>30</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane</td>
            <td>25</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
