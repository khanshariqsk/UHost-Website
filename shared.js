var backdrop = document.querySelector('.backdrop')
var selectButtonPlans = document.querySelectorAll('.plan button')
var modal = document.querySelector('.modal')

function showBackdrop() {
    backdrop.style.display = "block";
    modal.style.display = "block";
}
function closeBackdrop(){
    backdrop.style.display = "none";
    modal.style.display = "none";
} 
selectButtonPlans.forEach((btn)=>{
    btn.addEventListener('click',showBackdrop)
})

backdrop.addEventListener('click',closeBackdrop)