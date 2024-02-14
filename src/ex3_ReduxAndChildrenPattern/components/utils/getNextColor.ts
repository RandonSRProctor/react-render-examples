export function getNextColor(bgColor: string) {
  const backgroundColorOptions = [
    'bg-white',
    'bg-sky-500',
    'bg-amber-500',
    'bg-lime-500',
  ];
  const noOfOptions = backgroundColorOptions.length;
  const currentIndex = backgroundColorOptions.indexOf(bgColor);

  if (currentIndex + 1 === noOfOptions) {
    return 'bg-white';
  } else {
    return backgroundColorOptions[currentIndex + 1];
  }
}
