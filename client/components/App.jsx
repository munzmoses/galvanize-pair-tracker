import React from 'react';
import cohort from '../cohort';
import StudentForm from './StudentForm';
import PairForm from './PairForm';

const App = () => {
  return (
    <>
      <PairForm cohort={cohort} />
      <StudentForm cohort={cohort} />
    </>
  );
};

export default App;
