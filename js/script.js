const items = document.querySelectorAll('.img-container img');
const itemCount = items.length;
const nextItem = document.querySelector('.img-container .next');
const previousItem = document.querySelector('.img-container .previous');
let count = 0;
let count1 = 1;
let imgNumber=document.getElementById('imgNumber');
let totalImages=document.getElementById('totalImages');

totalImages.textContent=itemCount;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
    $('#imgNumber').text(++count1);
} 
else {
    // count = 0;
    $('#imgNumber').text(itemCount);

  }
  items[count].classList.add('active');

}

function showPreviousItem() {
  items[count].classList.remove('active');


  if(count > 0) {
    count--;
    $('#imgNumber').text(--count1);

  } 
  items[count].classList.add('active');

}

// function keyPress(e) {
//   e = e || window.event;
  
//   if (e.keyCode == '37') {
//     showPreviousItem();
//   } else if (e.keyCode == '39') {
//     showNextItem();
//   }
// }

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);

//document.addEventListener('keydown', keyPress);


