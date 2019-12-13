export default function courseReudcer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
