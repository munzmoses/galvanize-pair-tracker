import React from 'react';

const PairForm = ({ cohort }) => {
  return (
    <form>
      <label>
        Name:
        <select>
          <option value="">select student</option>
          {cohort.map((student, i) => {
            return (
              <option key={i}>{student}</option>
            );
          })}
        </select>
        Pair:
        <select>
          <option value="">select pair</option>
          {cohort.map((student, i) => {
            return (
              <option key={i}>{student}</option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PairForm;
