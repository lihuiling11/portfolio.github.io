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
  moveHighlight(0); // Set the active state to the "About" element
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


//copy to clipboard
function copyEmailToClipboard() {
  var emailElement = this; // The clicked element
  var email = "huiling.li.cn@gmail.com" // Get the email address from the element

  // Add email to clipboard
  navigator.clipboard.writeText(email)
    .then(function() {
      // Successful copy
      emailElement.classList.add('active');
      setTimeout(function() {
        emailElement.classList.remove('active');
      }, 2000); // Remove 'active' class after 3 seconds
    })
    .catch(function(err) {
      // Error handling
      console.error('Failed to copy email to clipboard: ', err);
    });
}

// Add event listeners to all elements with class "email-clipboard"
var emailElements = document.querySelectorAll('.email-clipboard');
emailElements.forEach(function(element) {
  element.addEventListener('click', copyEmailToClipboard);
});
