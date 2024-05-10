import sortCharactersByHealth from "../app";

test('Тестируем функцию сортировки героев по уровню жизни', () => {
  const result = sortCharactersByHealth([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]);
  expect(result).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});
