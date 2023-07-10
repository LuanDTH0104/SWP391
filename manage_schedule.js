const movie = document.querySelectorAll('.movie-name');
const create = document.querySelector('#create-btn')

let current = null;
let currentTime = null;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("create-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

movie.forEach(m => {
  m.addEventListener('dragstart', function (e) {
    // const index = movie.findIndex(mo => mo === this);
    // console.log(`Index = ${index}`);
    current = this;

  })
});

// Xử lí thêm slot chiếu
let area = null;
const day = document.querySelector('#day');
const createSchedule = document.querySelector('#create-schedule')
createSchedule.addEventListener('click', function () {
  const dayInWeek = document.getElementById(day.value);
  const slot = document.createElement('div');
  slot.classList.add('slot');
  slot.setAttribute('draggable', 'true');
  dayInWeek.appendChild(slot);
  area = document.querySelectorAll('.slot');
  const start = document.querySelector('#start-time');
  console.log(start.value);
  const end = document.querySelector('#end-time');
  if (area !== null) {

    area.forEach(a => {
      a.addEventListener('dragover', function (e) {
        e.preventDefault();
      });

      a.addEventListener('drop', function (e) {
        const [hours, minutes] = start.value.split(':');
        this.append(current.innerHTML +'\nStart Time: '+start.value)
        this.style.height = 'auto';
        this.classList.add('change-bg')
      });


      a.addEventListener('click', function (e) {
        this.innerHTML = '';
        if (this.getAttribute('class').includes('change-bg')) {
          this.classList.remove('change-bg')
        }
      });

      a.addEventListener('dblclick', function (e) {
        this.remove();
      })
    });

  }

})


