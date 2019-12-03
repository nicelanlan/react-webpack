// const a = 123;

export function square(x) {
  try {
    return x * x;
  } catch (e) {
    console.error(e);
    return 'abcdeeee';
  }
}

// square(a);

export function cube(x) {
  try {
    return x * x * x;
  } catch (e) {
    console.error(e);
    return 'abcdeffff';
  }
}
