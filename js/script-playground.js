//navabar hover
const navItems = document.querySelectorAll('.bottom-nav-item');
const highlight = document.querySelector('.highlight');
let activeIndex = 1; // Initialize the active index to the second element

function moveHighlight(index) {
  const item = navItems[index];
  const rect = item.getBoundingClientRect();
  const offsetLeft = rect.left - highlight.parentNode.getBoundingClientRect().left;

  highlight.style.width = `${rect.width}px`;
  highlight.style.left = `${offsetLeft}px`;

  activeIndex = index; // Update the active index
}

function resetHighlight() {
  moveHighlight(2); // Set the active state to the "Play" element
}

navItems.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    moveHighlight(index);
  });

  item.addEventListener('mouseleave', () => {
    if (activeIndex !== 2) {
      resetHighlight();
    }
  });
});

document.querySelector('.bottom-nav').addEventListener('mouseleave', () => {
  resetHighlight();
});

resetHighlight();



// resize cards
let activeAnchor = null;
let initialWidth = 0;
let initialHeight = 0;
let initialX = 0;
let initialY = 0;

function resizeStart(e) {
  activeAnchor = e.target;
  const parent = activeAnchor.parentElement;
  
  const btnReset = document.querySelector('.reset-container');
  btnReset.classList.remove("hide-btn");


  initialWidth = parseFloat(getComputedStyle(parent).getPropertyValue("width"));
  initialHeight = parseFloat(getComputedStyle(parent).getPropertyValue("height"));
  initialX = e.clientX;
  initialY = e.clientY;
}

function resizeElement(e) {
  if (activeAnchor) {
    const parent = activeAnchor.parentElement;
    const deltaX = e.clientX - initialX;
    const deltaY = e.clientY - initialY;
    const newWidth = initialWidth + deltaX;
    const newHeight = initialHeight + deltaY;
    parent.style.flexBasis = newWidth + "px";
    parent.style.height = newHeight + "px";
  }
}

function resizeEnd() {
  activeAnchor = null;
}

function reset() {
  const items = document.querySelectorAll('.playground-card');
  const btnReset = document.querySelector('.reset-container');
  btnReset.classList.add("hide-btn");
  //console.log("resetazzo");
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  items.forEach((item) => {
    item.style.flexBasis = "calc((100% - (var(--margin-page) * 5)) / 4)";
    item.style.height = "";
  });
}

const anchors = document.querySelectorAll(".anchor");
anchors.forEach((anchor) => {
  anchor.addEventListener("mousedown", resizeStart);
});

document.addEventListener("mousemove", resizeElement);
document.addEventListener("mouseup", resizeEnd);

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);
