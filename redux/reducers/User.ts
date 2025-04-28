import {createSlice} from '@reduxjs/toolkit';

const User = createSlice({
  name: 'user',
  initialState: {
    firstName: 'Mark',
    lastName: 'Doe',
    userId: undefined,
  },
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updateFirstName} = User.actions;
export default User.reducer;
