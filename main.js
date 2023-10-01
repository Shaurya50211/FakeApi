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
    try {
        let response = await fetch(baseURL + `posts/${number}`)
        if (response.ok) {
            let json = await response.json()
            console.table(json)
        }
    } catch (error) {
        alert(error)
    }
}

function postMethod2(number) {
    fetch(baseURL + `posts/${number}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("There was an issue fetching your data.");
            }
        })
        .then(json => console.table(json))
        .catch(err => alert(err))
}

/////////////////////////////////////////PART 2///////////////////////////////////////////////////////////////////////////////
const button = document.getElementById('getUsers');
button.addEventListener('click', onGetUser)

function onGetUser() {
    // getUserMethod1()
    getUserMethod2()
}

async function getUserMethod1() {
    try {
        let response = await fetch(baseURL + `users`)
        if (response.ok) {
            let json = await response.json()
            console.table(json)
            showAsCards(json)
        } else {
            throw new Error("There was an issue fetching your data.")
        }
    } catch (error) {
        alert(error);
    }
}

function getUserMethod2() {
    fetch(baseURL + `users`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("There was an issue fetching your data.");
            }
        })
        .then(json => {
            console.table(json)
            showAsCards(json)
        })
        .catch(err => alert(err))
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