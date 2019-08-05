export const mapStateOrDispatch = (...props) => stateOrDispatch =>
  props.map(prop => prop(stateOrDispatch));
