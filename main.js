const baseURL = "https://jsonplaceholder.typicode.com/"


//////////////////////////////////////PART 1////////////////////////////////////////////////////////////////////////////
const form = document.querySelector("form")
form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    const postNumber = e.target['postNumber'].value
    postMethod1(postNumber)
    // postMethod2(postNumber)
}

async function postMethod1(number) {
    let response = await fetch(baseURL+`posts/${number}`)
    let json = await response.json()
    console.table(json)
}

function postMethod2(number) {
    fetch(baseURL+`posts/${number}`)
    .then(response => response.json())
    .then(json => console.table(json))
}

/////////////////////////////////////////PART 2///////////////////////////////////////////////////////////////////////////////
const button = document.getElementById('getUsers');
button.addEventListener('click', onGetUser)

function onGetUser() {
    // getUserMethod1()
    getUserMethod2()
}

async function getUserMethod1() {
    let response = await fetch(baseURL+`users`)
    let json = await response.json()
    console.table(json)
    showAsCards(json)
}

function getUserMethod2() {
    fetch(baseURL+`users`)
    .then(response => response.json())
    .then(json => {
        console.table(json)
        showAsCards(json)
    })
}

function showAsCards(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        let card = `<div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">
                Username: @${user.username}
                Email: ${user.email}
                Address: ${user.address.city}
                Phone: ${user.phone}
                Website: <a href="${user.website}">${user.website}</a>
                Company: ${user.company.name}
            </p>
          </div>
        </div>
      </div>`

      document.body.innerHTML += card
    }
}