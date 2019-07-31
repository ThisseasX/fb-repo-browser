const mapState = (...stateProps) => state =>
  stateProps.map(prop => prop(state));

const mapDispatch = (...actionProps) => dispatch =>
  actionProps.map(prop => prop(dispatch));
