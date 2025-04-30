import {createSlice} from '@reduxjs/toolkit';

import {type DonationItem, items} from './__mocks__/donation-items-mock';

type DonationState = {
  items: DonationItem[];
  selectedDonationId: number | null;
  selectedDonationInfo: DonationItem | undefined;
};

const initialState: DonationState = {
  items,
  selectedDonationId: null,
  selectedDonationInfo: undefined,
};

const Donations = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInfo = state.items.find(
        item => item.donationItemId === action.payload,
      );
    },
    resetDonations: () => {
      return initialState;
    },
  },
});

export const {resetDonations, updateSelectedDonationId} = Donations.actions;
export default Donations.reducer;
