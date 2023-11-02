const sortByKey = (key, order) => (a, b) => {
  const x = a[key];
  const y = b[key];

  // descending
  if (!order) {
    if (x < y) return 1;
    if (x > y) return -1;
  }

  // ascending
  if (order) {
    if (x < y) return -1;
    if (x > y) return 1;
  }
};

export default sortByKey;
