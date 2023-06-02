export const getPathName = (path: string) => {
  if (path === '/') {
    return '';
  }
  if (path === '/profile') {
    return 'profile';
  }
  return 'booking';
};
