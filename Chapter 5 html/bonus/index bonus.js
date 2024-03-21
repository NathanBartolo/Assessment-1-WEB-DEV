// i used Event listener to execute code when the DOM content is fully working
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'sample'
    const samples = document.querySelectorAll('.sample');
    samples.forEach(sample => {
        sample.addEventListener('click', () => {
            //get the value of the data audio when clicked
            const audioFile = sample.getAttribute('data-audio');
            if (audioFile) {
                const audio = new Audio(audioFile);
                //play the audio
                audio.play();
            }
        });
    });
    //text to speech function
    const textToSpeechBtn = document.getElementById('textToSpeechBtn');
    textToSpeechBtn.addEventListener('click', function() {
        // Get the value of the input field with the ID 'textToSpeech'
        const textToSpeech = document.getElementById('textToSpeech').value.trim();
        if (textToSpeech) {
            const utterance = new SpeechSynthesisUtterance(textToSpeech);
            // text to speech function is working using the speech synthesis API
            speechSynthesis.speak(utterance);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // select all elements with the class 'samples'
    const samplesContainers = document.querySelectorAll('.samples');
    //get the previous page button element by its ID  
    const prevPageButton = document.getElementById('prevPage');
    //get the next page button element by its ID
    const nextPageButton = document.getElementById('nextPage');
    const samples = document.querySelectorAll('.sample');
    const numSamplesPerPage = 9;
    let currentPageIndex = 0;

    // Function to hide all samples
    function hideAllSamples() {
        samplesContainers.forEach(container => {
            container.classList.add('hidden');
        });
    }

    // Show the current page of samples
    function showCurrentPage() {
        hideAllSamples();
        const startIndex = currentPageIndex * numSamplesPerPage;
        const endIndex = startIndex + numSamplesPerPage;
        const currentContainer = samplesContainers[currentPageIndex];
        currentContainer.classList.remove('hidden');
        samples.forEach((sample, index) => {
            if (index >= startIndex && index < endIndex) {
                sample.style.display = 'block';
            } else {
                sample.style.display = 'none';
            }
        });
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        // Hide or show the "left" arrow based on the current page index
        prevPageButton.style.display = (currentPageIndex === samplesContainers.length - 0) ? 'none' : 'inline-block';
    
        // Calculate the total number of pages
        const numPages = Math.ceil(samplesContainers.length / numSamplesPerPage);
    
        // Hide or show the "right" arrow based on the current page index
        nextPageButton.style.display = (currentPageIndex === 1 || numPages === 0) ? 'none' : 'inline-block';
    }
    
    


    // Event listener for next page button
    nextPageButton.addEventListener('click', function() {
        currentPageIndex++;
        showCurrentPage();
    });

    // Event listener for previous page button
    prevPageButton.addEventListener('click', function() {
        currentPageIndex--;
        showCurrentPage();
    });

    // Initially show the first page
    showCurrentPage();
});
