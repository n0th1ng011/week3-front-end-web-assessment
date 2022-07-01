let colorBtn = document.querySelector('#color')

function presentColor(evt) {
    evt.preventDefault();

    alert('Purple')
}

colorBtn.addEventListener('click', presentColor)

let placeBtn = document.querySelector('#place')

function presentPlace(evt) {
    evt.preventDefault();

    alert('Bellingham, WA')
}

placeBtn.addEventListener('click', presentPlace)

let ritualBtn = document.querySelector('#ritual')

function presentRitual(evt) {
    evt.preventDefault();

    alert('Skating pools and bowls')
}

ritualBtn.addEventListener('click', presentRitual)