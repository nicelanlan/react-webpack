export const getDate = () => {
  try {
    return new Date();
  } catch (e) {
    return 'abcdefgggg';
  }
};
