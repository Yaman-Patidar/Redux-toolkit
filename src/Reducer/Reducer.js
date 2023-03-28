import { ADD_ITEM, DELETE_ITEM } from "../actions/actionType";

const stateObj = {
  userDetails: []
};

export const rootReducer = (state = stateObj, action) => {
  if (action.type === ADD_ITEM) {
    const {firstName,secondName}=action.payload;
    return {
      ...state,
      userDetails:([...state.userDetails,
        {id: new Date().valueOf(),
        firstName: firstName,
        secondName: secondName}
      ]),
    };
  }else if(action.type === DELETE_ITEM) {
    const {id}=action.payload;
    return {
      ...state,
      userDetails:state.userDetails.filter((item)=> item.id!=id),
    };
  }

  else {
    return state;
  }
};
