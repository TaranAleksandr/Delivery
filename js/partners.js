const partners = () => {
  const cardsRestaurants = document.querySelector('.cards-restaurants')


  const renderItem = (data) => {
    data.forEach((item) => {

      const a = document.createElement('a')
      const { image, kitchen, name, price, products, stars, time_of_delivery } = item

      a.setAttribute('href', '/restaurant.html')
      a.classList.add('card')
      a.classList.add('card-restaurant')
      a.dataset.products = products

      a.innerHTML = `<img
                src="${image}"
                alt="${name}"
                class="card-image"
              />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">${name}</h3>
                  <span class="card-tag tag">${time_of_delivery} мин</span>
                </div>
                <!-- /.card-heading -->
                <div class="card-info">
                  <div class="rating">${stars}</div>
                  <div class="price">От ${price} Р</div>
                  <div class="category">${kitchen}</div>
                </div>
              </div>
`
      a.addEventListener('click', (e) => {
        e.preventDefault()
        const btnOut = document.querySelector('.button-out')
        const modalAuth = document.querySelector('.modal-auth')

        if (btnOut.style.display === 'flex') {

          localStorage.setItem('restaurant', JSON.stringify(item))
          window.location.href = '/restaurant.html'
        } else {
          modalAuth.style.display = 'flex'
        }
      })
      cardsRestaurants.append(a)
    })
  }

  fetch('https://delivery-dd9b5-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
      renderItem(data);
    })
}

partners()