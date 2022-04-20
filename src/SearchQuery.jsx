import React from "react";
import PropTypes from "prop-types";
import RadioGroup from "./components/RadioGroup";
import MultipleInputs from "./components/MultipleInputs";
import ErrorBox from "./components/ErrorBox";

export default function SearchQuery({
  query,
  selectedQueryType,
  onRadioChange,
  onInputChange,
  error,
  onSearch,
}) {
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return (
    <React.Fragment>
      <RadioGroup
        options={query}
        checked={selectedQueryType}
        onChange={onRadioChange}
      />
      <MultipleInputs
        type="text"
        values={query[selectedQueryType]}
        onChange={onInputChange}
        onKeyDown={handleEnter}
      />
      <ErrorBox message={error} />
      <button className="btn btn-primary" onClick={onSearch}>
        Search
      </button>
    </React.Fragment>
  );
}

SearchQuery.propTypes = {
  query: PropTypes.object.isRequired,
  selectedQueryType: PropTypes.string.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
