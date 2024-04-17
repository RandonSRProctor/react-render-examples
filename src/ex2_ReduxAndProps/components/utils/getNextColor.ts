export function getNextColor(bgColor: string) {
  const backgroundColorOptions = ['bg-sky-100', 'bg-indigo-100', 'bg-rose-100'];
  const noOfOptions = backgroundColorOptions.length;
  const currentIndex = backgroundColorOptions.indexOf(bgColor);

  if (currentIndex + 1 === noOfOptions) {
    return 'bg-sky-100';
  } else {
    return backgroundColorOptions[currentIndex + 1];
  }
}
