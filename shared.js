var backdrop = document.querySelector('.backdrop')
var selectButtonPlans = document.querySelectorAll('.plan button')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative')
var toggleBar = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')
var mobileNavCancelButton = document.querySelector('.mobile-nav__button')




function showBackdrop() {
    backdrop.style.display = "block";
    // modal.classList.add('open') we can also use this approach to add class dynamically
    if(modal){
    	modal.style.display = "block";
    }
}
function closeFunction(){
    backdrop.style.display = "none";
	if(modal){
    	modal.style.display = "none";
	    // modal.classList.remove('open'); we can also use this approach to remove class dynamically
	}
	mobileNav.style.display="none";

} 
function toggleOn(){
	mobileNav.style.display="block";
    backdrop.style.display = "block";

}
selectButtonPlans.forEach((btn)=>{
    btn.addEventListener('click',showBackdrop)
})


backdrop.addEventListener('click',closeFunction)

if(modalNoButton){
	modalNoButton.addEventListener('click',closeFunction)
}
toggleBar.addEventListener('click',toggleOn)

mobileNav.addEventListener('click',closeFunction)

mobileNavCancelButton.addEventListener('click',closeFunction)

