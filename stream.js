document.addEventListener('DOMContentLoaded', function() {
    // Get all the option elements
    const options = document.querySelectorAll('.option');
  
    // Add click event listener to each option
    options.forEach(option => {
      option.addEventListener('click', handleOptionClick);
    });
  
    // Function to handle option click
    function handleOptionClick(event) {
      const selectedOption = event.target;
      const nextOptionsId = selectedOption.dataset.next;
  
      // Hide all options
      hideAllOptions();
  
      // Show the next set of options
      const nextOptions = document.getElementById(nextOptionsId);
      if (nextOptions) {
        nextOptions.style.display = 'flex';
  
        // Update the summary
        updateSummary(selectedOption.textContent, nextOptionsId);
      } else {
        console.error('Next options container not found!');
      }
    }
  
    // Function to hide all options
    function hideAllOptions() {
      const optionContainers = document.querySelectorAll('.options');
      optionContainers.forEach(container => {
        container.style.display = 'none';
      });
    }
  
    // Function to update the summary
    function updateSummary(selectedOption, nextOptionsId) {
      const summaryElements = {
        'event-type': document.getElementById('selected-event-type'),
        'event-size': document.getElementById('selected-event-size'),
        'event-date': document.getElementById('selected-event-date')
      };
  
      const summaryElement = summaryElements[nextOptionsId];
      if (summaryElement) {
        summaryElement.textContent = selectedOption;
      } else {
        console.error('Summary element not found for', nextOptionsId);
      }
  
      if (nextOptionsId === 'additional-details-options') {
        handleAdditionalDetails(selectedOption);
      }
    }
  
    // Function to handle additional details selection
    function handleAdditionalDetails(selectedOption) {
      console.log("Selected additional detail:", selectedOption);
      // You can access and update summary elements for additional details here
    }
  });
  