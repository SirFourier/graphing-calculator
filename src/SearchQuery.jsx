import React, { useState } from "react";
import PropTypes from "prop-types";
import { LOCATE_BY, UNITS, getOneCallData } from "./API";
import RadioGroup from "./components/RadioGroup";
import Input from "./components/Input";
import ErrorBox from "./components/ErrorBox";

export default function SearchQuery({ onSubmit }) {
  const unitsOptions = [UNITS.METRIC, UNITS.IMPERIAL];
  const [selectedUnits, setSelectedUnits] = useState(UNITS.METRIC);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const parseQuery = () => {
    const coordinates = query.match(/-?\d+.?\d+/g) || [];
    return coordinates.length > 1
      ? [LOCATE_BY.COORDINATES, coordinates.slice(0, 2)] // only take first 2 value
      : [LOCATE_BY.CITY, [query]];
  };

  const handleSearch = async () => {
    try {
      const [queryType, values] = parseQuery()
      const data = await getOneCallData(queryType, ...values);
      onSubmit(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <React.Fragment>
      <RadioGroup
        options={unitsOptions}
        checked={selectedUnits}
        onChange={setSelectedUnits}
      />
      <br />
      <Input
        type="text"
        placeholder="Search City"
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleEnter}
      />
      <ErrorBox message={error} />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </React.Fragment>
  );
}

SearchQuery.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
