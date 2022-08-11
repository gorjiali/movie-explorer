export function checkShowPageNumber(
  pageNumber: number,
  currentPage: number,
  totalPages: number
) {
  if (currentPage <= 3) {
    return (
      Math.abs(pageNumber - currentPage) < 2 ||
      pageNumber === totalPages ||
      pageNumber < 5
    );
  } else if (currentPage >= totalPages - 2) {
    return (
      Math.abs(pageNumber - currentPage) < 2 ||
      pageNumber > totalPages - 4 ||
      pageNumber === 1
    );
  } else {
    return (
      Math.abs(pageNumber - currentPage) < 2 ||
      pageNumber === totalPages ||
      pageNumber === 1
    );
  }
}

export function checkShowLeftDots(
  pageNumber: number,
  currentPage: number,
  totalPages: number
) {
  return pageNumber === totalPages && Math.abs(pageNumber - currentPage) > 2;
}

export function checkShowRightDots(pageNumber: number, currentPage: number) {
  return pageNumber === 1 && Math.abs(pageNumber - currentPage) > 2;
}
