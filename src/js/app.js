/* eslint-disable no-console */

export default function sortPlayersByHealth(data) {
  if (!Array.isArray(data) || data.length === 0
    || (!data.every((value) => (Object.prototype.hasOwnProperty.call(value, 'health')
      && Object.prototype.hasOwnProperty.call(value, 'name')
      && Number.isInteger(value.health)
      && value.health >= 0)))) throw new Error('Неверные входные данные');
  return data.sort((a, b) => a.name.toString().localeCompare(b.name.toString())).reverse()
    .sort((a, b) => a.health - b.health).reverse();
}

try {
  console.log(sortPlayersByHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]));
  console.log(sortPlayersByHealth([
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 10 },
    { name: 'маг', health: 10 },
  ]));
  console.log(sortPlayersByHealth('www'));
} catch (error) {
  console.log(error);
}
