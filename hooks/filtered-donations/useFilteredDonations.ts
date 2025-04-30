import {useSelector} from 'react-redux';
import {useMemo} from 'react';

import {RootState} from '~/redux/store';

export function useFilteredDonations() {
  const {selectedCategoryId} = useSelector(
    (state: RootState) => state.categories,
  );
  const {items: donations} = useSelector((state: RootState) => state.donations);

  return useMemo(() => {
    return donations.filter(item =>
      item.categoryIds.includes(selectedCategoryId),
    );
  }, [selectedCategoryId, donations]);
}
