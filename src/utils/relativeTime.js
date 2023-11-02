export default function relativeTime(current, previous) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    const val = Math.round(elapsed / 1000);
    return val === 1 ? `${val} sec ago` : `${val} secs ago`;
  } if (elapsed < msPerHour) {
    const val = Math.round(elapsed / msPerMinute);
    return val === 1 ? `${val} min ago` : `${val} mins ago`;
  } if (elapsed < msPerDay) {
    const val = Math.round(elapsed / msPerHour);
    return val === 1 ? `${val} hour ago` : `${val} hours ago`;
  } if (elapsed < msPerMonth) {
    const val = Math.round(elapsed / msPerDay);
    return val === 1 ? `${val} day ago` : `${val} days ago`;
  } if (elapsed < msPerYear) {
    const val = Math.round(elapsed / msPerMonth);
    return val === 1 ? `${val} month ago` : `${val} months ago`;
  }
  const val = Math.round(elapsed / msPerYear);
  return val === 1 ? `${val} year ago` : `${val} years ago`;
}
