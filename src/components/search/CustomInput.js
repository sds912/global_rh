import React from "react";
import { useState } from "react";
import AutoSuggest from "react-autosuggest";

const CustomInput = (props) => {
  const lowerCasedCompanies = props.elt.map((e) => e.toLowerCase());

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(value) {
    return lowerCasedCompanies.filter((language) =>
      language.startsWith(value.trim().toLowerCase())
    );
  }
  return (
    <div>
      <AutoSuggest
         
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => <span>{suggestion}</span>}
        inputProps={{
          className: props.input,
          placeholder: props.type === 1 ? "Métier" : "Ville",
          value: value,
          defaultValue: props.value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
            props.setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
    </div>
  );
};

export default CustomInput;
