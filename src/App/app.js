export default function sortCharactersByHealth(arrOfCharacters) {
  const arrayToSort = [...arrOfCharacters];
  return arrayToSort.sort((a, b) => b.health - a.health);
}
