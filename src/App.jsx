import React from "react";
import { fakeNames } from "./components/fakerNames";
import FilterList from "./components/FilterList";

const App = () => {
  return (
    <div>
      <FilterList names={fakeNames} />
    </div>
  );
};

export default App;
