export const dateCalc = (created: string) => {
  const elapsed = (new Date().getTime() - new Date(created).getTime()) / 1000;
  if (elapsed < 60) {
    return `${Math.round(elapsed)} seconds ago`;
  } else if (elapsed < 3600) {
    return `${Math.round(elapsed / 60)} minutes ago`;
  } else if ((elapsed / 3600 < 24)) {
    return `${Math.round(elapsed / 3600)} hours ago`;
  } else {
    return `${Math.round(elapsed / 3600 / 24)} days ago`;
  }
};
