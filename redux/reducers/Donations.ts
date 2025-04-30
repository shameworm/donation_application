import {createSlice} from '@reduxjs/toolkit';

import {items} from './__mocks__/donation-items-mock';

const initialState = {
  items,
  selectedDonationId: null,
};

const Donations = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
    },
    resetDonations: () => {
      return initialState;
    },
  },
});

export const {resetDonations, updateSelectedDonationId} = Donations.actions;
export default Donations.reducer;
