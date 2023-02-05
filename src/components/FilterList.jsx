import React, { useState, useTransition } from "react";

const FilterList = ({ names }) => {
  const [query, setQuery] = useState("");
  const [highlight,setHighlight] =useState("");
  const [isPending, startTransition] = useTransition()

  const changeHandler = ({ target: { value } }) => {
    // urgent :
    setQuery(value);
    // transition :
    startTransition(() => {
        setHighlight(value)
    })
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type="text" />
      <div style={{opacity : isPending ? 0.2 : 1}}>
        {names.map((name, i) => (
          <ListItem key={i} name={name} highlight={highlight} />
        ))}
      </div>
    </div>
  );
};

const ListItem = ({ name, highlight }) => {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    return <div>{name}</div>;
  }
  return (
    <div>
      {name.slice(0, index)}
      <span style={{backgroundColor : "red"}}>
        {name.slice(index, index + highlight.length)}
      </span>
      {name.slice(index + highlight.length)}
    </div>
  );
};

export default FilterList;
