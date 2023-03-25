const LEFT = "position/LEFT";
const RIGHT = "position/RIGHT";
const FORWARD = "position/FORWARD";
const BACK = "position/BACK";

export const actions = {
  moveLeft: () => ({ type: LEFT }),
  moveRight: () => ({ type: RIGHT }),
  moveForward: () => ({ type: FORWARD }),
  moveBack: () => ({ type: BACK }),
};

export const positionReducer = (position, action) => {
  switch (action.type) {
    case LEFT:
      return {
        ...position,
        x: position.x - 1,
      };
    case RIGHT:
      return {
        ...position,
        x: position.x + 1,
      };
    case BACK:
      return {
        ...position,
        y: position.y - 1,
      };
    case FORWARD:
      return {
        ...position,
        y: position.y + 1,
      };
    default:
      return position;
  }
};
