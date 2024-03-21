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
});
