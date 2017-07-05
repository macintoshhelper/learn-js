export default (state = null, action) => {
  switch (action.type) {
    case 'USER_SELECT':
      return action.payload;
    default:
      return state;
  }
};
