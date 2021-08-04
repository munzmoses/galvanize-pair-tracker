import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <form>
      <label>
        Name:
        <select>
          <option value="">select student</option>
          <option value="">Rob</option>
        </select>
        Pair:
        <select>
          <option value="">select pair</option>
          <option value="">Rob</option>
        </select>
        Alert Level:
        <select>
          <option value="">alert level</option>
          <option value="">orange</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('app'),
);
