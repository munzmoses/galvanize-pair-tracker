import React from 'react';

const StudentForm = ({ cohort }) => {
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
        Alert Level:
        <select>
          <option value="">alert level</option>
          <option value="">red</option>
          <option value="">orange</option>
          <option value="">yellow</option>
          <option value="">light green</option>
          <option value="">green</option>
          <option value="">super green</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default StudentForm;
