import React from "react";

function Filter({ setFilter }) {
    return (
        <select name={"filter"} onChange={(e) => setFilter(e.target.value)}>
            <option value={"All"}>All</option>
            <option value={"Greased"}>Greased</option>
            <option value={"Not Greased"}>Not Greased</option>
        </select>
    )
}

export default Filter;