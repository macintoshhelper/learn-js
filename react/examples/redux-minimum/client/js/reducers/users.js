// export default (state = {}, action) => {
//   switch(action.type) {
//     case ADD_USER:
//       return {
//         ...state,
//         users: (state.users || []).concat(action.payload.user),
//       };
//     default:
//       return state;
//   }
// }


// Hardcoded
export default () =>
  [
    {
      id: 1,
      username: 'cake',
      bio: 'Hello, I am a cake!',
    },
    {
      id: 2,
      username: 'tower',
      bio: 'Hello, I am a tower!',
    },
  ];
