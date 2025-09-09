import React from 'react';
import ResultSection from './ResultSection';

const Result = ({ result, loading, error }) => {
  return <ResultSection result={result} loading={loading} error={error} />;
};

export default Result;