import React from "react";
import "./Table.css";
import numeral from "numeral";
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr key={country}>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("000,000")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
