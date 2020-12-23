var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function() {
  mobileNav.style.display = 'none';
  setTimeout(function() {
  mobileNav.classList.remove("open");
  },200)
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.style.display = "none";
  setTimeout(()=>{
  backdrop.classList.remove("open");

  },15)
}

toggleButton.addEventListener("click", function() {
  // backdrop.style.display = 'block';
  mobileNav.style.display = 'block';
  setTimeout(()=> {
    mobileNav.classList.add("open");
  },15)
  backdrop.classList.add("open");
});
