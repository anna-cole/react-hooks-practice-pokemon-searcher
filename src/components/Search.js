import React from "react";

function Search({ search, onChangeText }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={onChangeText}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;