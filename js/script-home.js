
//autoscroll
function autoScroll() {
    const scrollStep = .5; // Adjust the scroll step as needed
    const scrollInterval = 15; // Adjust the scroll interval (in milliseconds) as needed
  
    let scrollId = null;
    let isPaused = false;
  
    function scroll() {
      if (isPaused) return;
  
      window.scrollBy(0, scrollStep);
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        // Reached the bottom of the page, reset to the top
        //window.scrollTo(0, 0);
      }
    }
  
    function startScroll() {
      scrollId = setInterval(scroll, scrollInterval);
    }
  
    function stopScroll() {
      clearInterval(scrollId);
    }
  
    function togglePauseScroll() {
      isPaused = !isPaused;
      if (isPaused) {
        stopScroll();
      } else {
        startScroll();
      }
    }
    if (window.innerWidth > 600) {
        startScroll(); // Start scrolling automatically
    }
  

  
  
    // Listen for a mouseover event on elements with the class "project-card-item" to pause scrolling
    const projectCardItems = document.querySelectorAll('.project-card-item .lazy-img');
    projectCardItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        stopScroll();
      });
  
      item.addEventListener('mouseout', () => {
        startScroll();
      });
    });
  }
  
  autoScroll();

  

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
  moveHighlight(1); // Set the active state to the Work element
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



//change bg on hover
const body = document.body;
const docElement = document.documentElement;


// Get the project card element

const projectCard1 = document.querySelector('.project-card-1 .lazy-img');
if (projectCard1) {
    // Add event listener for hover
    projectCard1.addEventListener('mouseenter', () => {
        body.classList.add('yellow-bg');
        docElement.classList.add('yellow-bg');
    });
    // Add event listener for mouseleave
    projectCard1.addEventListener('mouseleave', () => {
        body.classList.remove('yellow-bg');
        docElement.classList.remove('yellow-bg');
    });
}


const projectCard2 = document.querySelector('.project-card-2 .lazy-img');
if (projectCard2) {
    projectCard2.addEventListener('mouseenter', () => {
        body.classList.add('black-bg');
        docElement.classList.add('black-bg');
  });
  projectCard2.addEventListener('mouseleave', () => {
        body.classList.remove('black-bg');
        docElement.classList.remove('black-bg');
  });
  
}

const projectCard3 = document.querySelector('.project-card-3 .lazy-img');
if (projectCard3) {
    projectCard3.addEventListener('mouseenter', () => {
        body.classList.add('red-bg');
        docElement.classList.add('red-bg');
  });
  projectCard3.addEventListener('mouseleave', () => {
        body.classList.remove('red-bg');
        docElement.classList.remove('red-bg');
  });
  
}


const projectCard4 = document.querySelector('.project-card-4 .lazy-img');
if (projectCard4) {
    projectCard4.addEventListener('mouseenter', () => {
        body.classList.add('yellow2-bg');
        docElement.classList.add('yellow2-bg');
  });
  projectCard4.addEventListener('mouseleave', () => {
        body.classList.remove('yellow2-bg');
        docElement.classList.remove('yellow2-bg');
  });
  
}

const projectCard5 = document.querySelector('.project-card-5 .lazy-img');
if (projectCard5) {
    projectCard5.addEventListener('mouseenter', () => {
        body.classList.add('lilac-bg');
        docElement.classList.add('lilac-bg');
  });
  projectCard5.addEventListener('mouseleave', () => {
        body.classList.remove('lilac-bg');
        docElement.classList.remove('lilac-bg');
  });
  
}

const projectCard6 = document.querySelector('.project-card-6 .lazy-img');
if (projectCard6) {
    projectCard6.addEventListener('mouseenter', () => {
        body.classList.add('dark-sand-bg');
        docElement.classList.add('dark-sand-bg');
  });
  projectCard6.addEventListener('mouseleave', () => {
        body.classList.remove('dark-sand-bg');
        docElement.classList.remove('dark-sand-bg');
  });
  
}

const projectCard7 = document.querySelector('.project-card-7 .lazy-img');
if (projectCard7) {
    projectCard7.addEventListener('mouseenter', () => {
        body.classList.add('pitch-black-bg');
        docElement.classList.add('pitch-black-bg');
  });
  projectCard7.addEventListener('mouseleave', () => {
        body.classList.remove('pitch-black-bg');
        docElement.classList.remove('pitch-black-bg');
  });
  
}

const projectCard8 = document.querySelector('.project-card-8 .lazy-img');
if (projectCard8) {
    projectCard8.addEventListener('mouseenter', () => {
        body.classList.add('gold-bg');
        docElement.classList.add('gold-bg');
  });
  projectCard8.addEventListener('mouseleave', () => {
        body.classList.remove('gold-bg');
        docElement.classList.remove('gold-bg');
  });
  
}

const projectCard9 = document.querySelector('.project-card-9 .lazy-img');
if (projectCard9) {
    projectCard9.addEventListener('mouseenter', () => {
        body.classList.add('bright-red-bg');
        docElement.classList.add('bright-red-bg');
  });
  projectCard9.addEventListener('mouseleave', () => {
        body.classList.remove('bright-red-bg');
        docElement.classList.remove('bright-red-bg');
  });
  
}

const projectCard10 = document.querySelector('.project-card-10 .lazy-img');
if (projectCard10) {
    projectCard10.addEventListener('mouseenter', () => {
        body.classList.add('salmon-bg');
        docElement.classList.add('salmon-bg');
  });
  projectCard10.addEventListener('mouseleave', () => {
        body.classList.remove('salmon-bg');
        docElement.classList.remove('salmon-bg');
  });
  
}

const projectCard11 = document.querySelector('.project-card-11 .lazy-img');
if (projectCard11) {
    projectCard11.addEventListener('mouseenter', () => {
        body.classList.add('purple-bg');
        docElement.classList.add('purple-bg');
  });
  projectCard11.addEventListener('mouseleave', () => {
        body.classList.remove('purple-bg');
        docElement.classList.remove('purple-bg');
  });
  
}

const projectCard12 = document.querySelector('.project-card-12 .lazy-img');
if (projectCard12) {
    projectCard12.addEventListener('mouseenter', () => {
        body.classList.add('lilac2-bg');
        docElement.classList.add('lilac2-bg');
  });
  projectCard12.addEventListener('mouseleave', () => {
        body.classList.remove('lilac2-bg');
        docElement.classList.remove('lilac2-bg');
  });
  
}
