import {
  useState, useRef, useCallback, useEffect
} from 'react';

function useInfiniteScroll() {
  const increase = 12;

  const [page, setPage] = useState(increase);
  const loadMoreRef = useRef(null);

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    // console.log(target);
    if (target.isIntersecting) {
      setPage((prev) => {
        const result = prev + increase;
        return result;
      });
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return { loadMoreRef, page };
}

export default useInfiniteScroll;
