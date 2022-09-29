window.addEventListener("scroll", function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const progressBar = document.querySelectorAll(".progress-bar");
var progressBarContainer = document.querySelector(".show-on-scroll");

let start;
document.onscroll = function() {
    if (isElementInViewport(progressBarContainer)){
        if(!start) {
            window.requestAnimationFrame(loop);
        }
    } else {
        start = null;
    }
};

const animationTime = 2500;

function loop(timestamp) {
    if (!start) {
        start = timestamp;
    }
    const elapsed = timestamp - start;
    const progress = elapsed / animationTime;
    progressBar.forEach((bar) => {
        const progressComplete = bar.getAttribute('data-complete');
        const width = progress < 1 ? Math.ceil(progress * 100) : progressComplete;
        //it means: if (progress < 1) {Math.ceil(progress * 100)} else {progressComplete}};
        if (width <= progressComplete){
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        }
    });

    if (progress <= 1){
        window.requestAnimationFrame(loop);
    }
}

function isElementInViewport(element) {
    var rectangle = element.getBoundingClientRect();
    var height = window.innerHeight || document.documentElement.clientHeight;
    var top = rectangle.top;
    var bottom = rectangle.bottom;

    return (
        (top <= 0 && bottom >= 0) ||
        (bottom >= 0 && bottom <= height) ||
        (top >= 0 && bottom <=height)
    );
}




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



//smooth scrolling

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }


	//E-mail Send

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++){
      const input = formReq[index];
      formRemoveError(input);

      if(input.classList.contains("_email")){
        if(emailTest(input)){
          formAddError(input);
          error++;
        }
      }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
        formAddError(input);
        error++;
      }else{
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
  }

  function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.remove('_error');
  }
  function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }


function emailTest(input){
  // return !/^\w+([\.-]?\w+())
}

// TODO
});