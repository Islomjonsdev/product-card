const initilCart = {
  likeCart: [],
};

const likeReducer = (state = [], action) => {
  console.log(action, "action");
  switch (action.type) {
    case "add_to_like":
      return [...state, action.data];
    default:
      return state;
  }
};

export { likeReducer };
