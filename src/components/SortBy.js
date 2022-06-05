import React from 'react';

function SortBy({ setSort }) {
    return (
        <div>SortBy: 
            <input type={"radio"} id={"name"} name={"sort"} value={"name"} onClick={(e) => setSort(e.target.value)}/>
            <label htmlFor={"name"}>Name</label>
            <input type={"radio"} id={"weight"} name={"sort"} value={"weight"} onClick={(e) => setSort(e.target.value)}/>
            <label htmlFor={"weight"}>Weight</label>
        </div>
    )
}

export default SortBy;