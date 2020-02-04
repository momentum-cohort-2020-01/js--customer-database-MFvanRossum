const body = document.querySelector('#container')

function createNewProfile (customer) {
    const profile = document.createElement('div')
    profile.classList.add('customer')

    const img = document.createElement('img')
    img.src = customer.picture.large
    profile.appendChild(img)
    img.classList.add('pic')

    const name = document.createElement('h2')
    name.innerText = (customer.name.first + ' ' + customer.name.last)
    name.classList.add('name')
    profile.appendChild(name)

    const email = document.createElement('div')
    email.innerText = customer.email 
    email.classList.add('email')
    profile.appendChild(email)

    const address = document.createElement('div')
    address.innerHTML = (customer.location.street + '<br>'
                        + customer.location.city + ', '
                        + nameToAbbr(customer.location.state) + ', '
                        + customer.location.postcode)
    address.classList.add('address')
    profile.appendChild(address)

    const dob = document.createElement('div')
    dob.innerText = ('DOB: ' 
                    + moment(customer.dob).format('MMM D, YYYY'))
    profile.appendChild(dob)

    const registered = document.createElement('div')
    registered.innerText = ('Customer since: ' 
                            + moment(customer.registered).format('MMM D, YYYY'))
    profile.appendChild(registered)

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