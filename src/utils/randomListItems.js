export default function randomListItems(list) {
  const newList = [];

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * list.length);
    const remove = list.splice(index, 1);
    newList.push(remove[0]);
  }

  return newList;
}
