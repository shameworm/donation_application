import {useEffect, useState} from 'react';
import {pagination} from '~/utils/pagination';

type useInfiniteScrollProps<T> = {
  initialData: T[];
  pageSize: number;
};

export function useInfiniteScroll<T>({
  initialData,
  pageSize,
}: useInfiniteScrollProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedData, setRenderedData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getInitialData = pagination<T>(initialData, 1, pageSize);

    setRenderedData(getInitialData);
    setIsLoading(false);
  }, [initialData, pageSize]);

  function loadMoreData() {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    const contentToAppend = pagination(initialData, currentPage + 1, pageSize);

    if (contentToAppend.length > 0) {
      setCurrentPage(currentPage + 1);
      setRenderedData(prev => [...prev, ...contentToAppend]);
    }

    setIsLoading(false);
  }

  return {renderedData, loadMoreData};
}
