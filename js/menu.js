const restaurant = 'food-band'

const renderItem = (data) => {
  console.log(data);
}

fetch(`./db/${restaurant}.json`)
  .then((response) => response.json())
  .then((data) => {
    renderItem(data);
  })