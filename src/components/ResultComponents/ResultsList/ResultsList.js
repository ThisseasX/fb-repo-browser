import React, { Fragment, useState } from 'react';
import ResultsHeader from '../ResultsHeader/ResultsHeader';
import ResultsBody from '../ResultsBody/ResultsBody';

export default ({ search }) => {

  const [selectedValues, setSelectedValues] = useState({
    sortBy: '',
    resultsPerPage: '8'
  });

  return (
    <Fragment>
      <ResultsHeader selectedValues={selectedValues} setSelectedValues={setSelectedValues} />
      <ResultsBody search={search} selectedValues={selectedValues} />
    </Fragment>
  );
};
