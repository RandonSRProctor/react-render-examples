export function getNextColor(bgColor: string) {
  const backgroundColorOptions = ['bg-sky-400', 'bg-sky-500', 'bg-sky-600'];
  const noOfOptions = backgroundColorOptions.length;
  const currentIndex = backgroundColorOptions.indexOf(bgColor);

  if (currentIndex + 1 === noOfOptions) {
    return 'bg-sky-400';
  } else {
    return backgroundColorOptions[currentIndex + 1];
  }
}
