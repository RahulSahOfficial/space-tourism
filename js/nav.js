document.querySelector(".menu").addEventListener("click",show_menu)
document.querySelector(".close").addEventListener("click",hide_menu)
function show_menu()
{
    document.querySelector(".nav-links").style.display="flex"
    document.querySelector(".menu").style.display="none"
    document.querySelector(".close").style.display="block"
}
function hide_menu()
{
    document.querySelector(".nav-links").style.display="none"
    document.querySelector(".menu").style.display="block"
    document.querySelector(".close").style.display="none"
}
