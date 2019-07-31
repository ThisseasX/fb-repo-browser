import React, { Fragment } from 'react';
import ResultsHeader from '../ResultsHeader';
import ResultsBody from '../ResultsBody';

export default ({ search }) => (
  <Fragment>
    <ResultsHeader
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
    />
    <ResultsBody search={search} selectedValues={selectedValues} />
  </Fragment>
);
