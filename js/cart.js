const cart = () => {

  const buttonCart = document.querySelector('.button-cart')
  const modalCart = document.querySelector('.modal-cart')
  const buttonClose = modalCart.querySelector('.close')
  const modalBody = modalCart.querySelector('.modal-body')
  const btnSend = modalCart.querySelector('.button-primary')

  const resetCart = () => {
    body.innerHTML = ''
    localStorage.removeItem('cart')
    modalCart.classList.remove('is-open')
  }


  const incCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'))

    cartArray.map((item) => {
      if (item.id === id) {
        item.count++
      }
      return item
    })

    localStorage.setItem('cart', JSON.stringify(cartArray))
    renderItems(cartArray)
  }

  const decCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'))

    cartArray.map((item) => {
      if (item.id === id) {
        item.count = item.count > 0 ? item.count - 1 : 0
      }
      return item
    })

    localStorage.setItem('cart', JSON.stringify(cartArray))
    renderItems(cartArray)
  }

  const renderItems = (data) => {
    modalBody.innerHTML = ''
    data.forEach(cartItem => {

      const cartElem = document.createElement('div')
      cartElem.classList.add('food-row')

      cartElem.innerHTML = `
      <span class="food-name">${cartItem.name}</span>
            <strong class="food-price">${cartItem.price} ₽</strong>
            <div class="food-counter">
              <button class="counter-button btn-dec" data-index="${cartItem.id}">-</button>
              <span class="counter">${cartItem.count}</span>
              <button class="counter-button btn-inc" data-index="${cartItem.id}">+</button>
            </div>
      `
      modalBody.append(cartElem)
    })
  }


  modalBody.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('btn-inc')) {
      incCount(e.target.dataset.index);
    } else if (e.target.classList.contains('btn-dec')) {
      decCount(e.target.dataset.index)
    }
  })

  btnSend.addEventListener('click', (e) => {
    const cartArray = localStorage.getItem('cart')

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: cartArray
    })
      .then(response => {
        if (response.ok) {
          resetCart();
        }
      })
      .catch(e => {
        console.error(e);
      })
  })


  buttonCart.addEventListener('click', () => {

    if (localStorage.getItem('cart')) {
      renderItems(JSON.parse(localStorage.getItem('cart')))
    }

    modalCart.classList.add('is-open')
  })

  buttonClose.addEventListener('click', () => {
    modalCart.classList.remove('is-open')
  })

}

cart()