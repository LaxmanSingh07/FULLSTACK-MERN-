import React from "react";

 const Filter = (props) => {
  const { filterData } = props;
  return (
    <div>
      {filterData.map((data) => {
        return (<button key={data.id}>{data.title}</button>);
      })}
    </div>
  );
};

export default Filter;
