import sortPlayersByHealth from '../app';

test('sort players - throw (wrong parameter type)', () => {
  expect(() => {
    sortPlayersByHealth('www');
  }).toThrowError(new Error('Неверные входные данные'));
});

test('sort players - throw (empty array)', () => {
  expect(() => {
    sortPlayersByHealth([]);
  }).toThrowError(Error);
});

test('sort players - throw (no key health)', () => {
  expect(() => {
    sortPlayersByHealth([
      { name: 'мечник', health_: 10 },
      { name: 'лучник', health: 10 },
      { name: 'маг', health: 10 },
    ]);
  }).toThrowError(new Error('Неверные входные данные'));
});

test('sort players - throw (no key name)', () => {
  expect(() => {
    sortPlayersByHealth([
      { name: 'мечник', health: 10 },
      { name_: 'лучник', health: 10 },
      { name: 'маг', health: 10 },
    ]);
  }).toThrowError(new Error('Неверные входные данные'));
});

test('sort players - throw (not a number)', () => {
  expect(() => {
    sortPlayersByHealth([
      { name: 'мечник', health: 10 },
      { name: 'лучник', health: 10 },
      { name: 'маг', health: true },
    ]);
  }).toThrowError(Error);
});

test('sort players - throw (incorrect number)', () => {
  expect(() => {
    sortPlayersByHealth([
      { name: 'мечник', health: 10 },
      { name: 'лучник', health: -5 },
      { name: 'маг', health: 10 },
    ]);
  }).toThrowError('Неверные входные данные');
});

test('sort players', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortPlayersByHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ])).toEqual(expected);
});

test('sort players - more then one the same health value', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 10 },
    { name: 'Мечник', health: 10 },
  ];

  expect(sortPlayersByHealth([
    { name: 'лучник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'Мечник', health: 10 },
  ])).toEqual(expected);
});

test('sort players - more then one the same name value', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 10 },
    { name: 'маг', health: 10 },
  ];

  expect(sortPlayersByHealth([
    { name: 'лучник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'маг', health: 10 },
  ])).toEqual(expected);
});
