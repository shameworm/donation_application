import {createSlice} from '@reduxjs/toolkit';

import {user} from './__mocks__/user-mock';

const initialState = {...user};

const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetInitialState: () => {
      return initialState;
    },
  },
});

export const {updateFirstName, resetInitialState} = User.actions;
export default User.reducer;
