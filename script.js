let votes = {
    image1: 0,
    image2: 0
};

function vote(image) {
    votes[image]++;
    displayResult();
}

function displayResult() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Image 1: ${votes.image1} votes<br>Image 2: ${votes.image2} votes`;
}

displayResult(); // Initial display of votes
