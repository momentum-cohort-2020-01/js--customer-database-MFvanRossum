const body = document.querySelector('#container')

function createNewProfile (customer) {
    const profile = document.createElement('div')
    profile.classList.add('customer')

    const img = document.createElement('img')
    img.src = customer.picture.large
    profile.appendChild(img)
    img.classList.add('pic')

    const name = document.createElement('h2')
    name.innerText = [customer.name.first + ' ' + customer.name.last]
    profile.appendChild(name)

    return profile
}

function showProfiles () {
    const body = document.querySelector('#container')
    for (const customer of customers) {
        const profile = createNewProfile(customer)
        body.appendChild(profile)
    }
}

showProfiles()