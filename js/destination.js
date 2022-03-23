const destinations = document.querySelectorAll(".each-dest p")
destinations.forEach(function (eachdest, index) {
    eachdest.addEventListener("click", function () {
        update_dest(index)
    })
})
function update_dest(index) {
    destinations.forEach(function (eachdest, i) {
        if (index != i)
            eachdest.classList.remove("active")
        else
            destinations[index].classList.add("active")
    })
    document.querySelector(".text-box h1").innerText = data.destinations[index].name
    document.querySelector(".text-box p").innerText = data.destinations[index].description
    document.querySelector(".measures-box p.distance").innerText = data.destinations[index].distance
    document.querySelector(".measures-box p.time").innerText = data.destinations[index].travel
    document.querySelector(".img-box img").classList.add("entry")
    setTimeout(function(){
        document.querySelector(".img-box img").classList.remove("entry")
    },400)
    document.querySelector(".img-box img").src = data.destinations[index].images["png"]
}
