// Get all the service cards
const serviceCards = document.querySelectorAll('.service-card');

// Add click event listener to each service card
serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    // Get the service title from the clicked card
    const serviceTitle = card.querySelector('h3').textContent;

    // Show the corresponding service description
    showServiceDescription(serviceTitle);
  });
});

// Function to show the service description
function showServiceDescription(serviceTitle) {
  // Get all the service description elements
  const serviceDescriptions = document.querySelectorAll('.service-description');

  // Hide all the service descriptions
  serviceDescriptions.forEach(desc => {
    desc.style.display = 'none';
  });

  // Show the description for the selected service
  const selectedDescription = document.querySelector(`.service-description h3:contains(${serviceTitle})`).parentElement;
  selectedDescription.style.display = 'block';

  // Scroll to the selected service description
  selectedDescription.scrollIntoView({ behavior: 'smooth' });
}
// Get the "Learn More" buttons
const learnMoreButtons = document.querySelectorAll('.btn');

// Add click event listener to each "Learn More" button
learnMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the service title from the parent card
    const serviceTitle = button.previousElementSibling.textContent;

    // Scroll to the corresponding service description
    showServiceDescription(serviceTitle);
  });
});

// Function to show the service description
function showServiceDescription(serviceTitle) {
  // Get all the service description elements
  const serviceDescriptions = document.querySelectorAll('.service-description');

  // Hide all the service descriptions
  serviceDescriptions.forEach(desc => {
    desc.style.display = 'none';
  });

  // Show the description for the selected service
  const selectedDescription = document.querySelector(`.service-description h3:contains(${serviceTitle})`).parentElement;
  selectedDescription.style.display = 'block';

  // Scroll to the selected service description
  selectedDescription.scrollIntoView({ behavior: 'smooth' });
}