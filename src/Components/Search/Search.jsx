import { useState } from "react";
import { foodApi } from "../../Api/api";

export const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="input-field col s12">
      <input
        type="search"
        id="search-field"
        placeholder="search"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button className="btn" onClick={() => handleSubmit()}>
        Search
      </button>
    </div>
  );
};
