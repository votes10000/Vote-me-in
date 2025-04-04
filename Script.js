function vote(method) {
    let voteCount = document.getElementById("vote-count");
    let progressFill = document.getElementById("progress-fill");
    let votesNeeded = document.getElementById("votes-needed");

    let currentVotes = parseInt(voteCount.textContent);
    let totalVotesNeeded = 10000;
    let newVotes = currentVotes + 1; // Increase vote count

    if (newVotes <= totalVotesNeeded) {
        voteCount.textContent = newVotes;
        progressFill.style.width = (newVotes / totalVotesNeeded) * 100 + "%";
        votesNeeded.textContent = totalVotesNeeded - newVotes;
    }

    // Redirect or perform actions based on the method
    if (method === "instagram") {
        window.location.href = "https://www.instagram.com";
    } else if (method === "email") {
        window.location.href = "mailto:vote@bestvote.com";
    }
}
