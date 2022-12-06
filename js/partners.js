const renderItem = (data) => {
  data.forEach((dataItem) => {
    console.log(dataItem);
  })
  console.log(data);
}

fetch('https://delivery-dd9b5-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json')
  .then((response) => response.json())
  .then((data) => {
    renderItem(data);
  })