let sentimentVotes = {
    happy: 0,
    neutral: 0,
    sad: 0
};

function voteSentiment(type) {
    sentimentVotes[type]++;
    updateSentimentPercentages();
}

function updateSentimentPercentages() {
    const totalVotes = sentimentVotes.happy + sentimentVotes.neutral + sentimentVotes.sad;
    document.getElementById('happyPercentage').innerText = Math.round((sentimentVotes.happy / totalVotes) * 100) + '%';
    document.getElementById('neutralPercentage').innerText = Math.round((sentimentVotes.neutral / totalVotes) * 100) + '%';
    document.getElementById('sadPercentage').innerText = Math.round((sentimentVotes.sad / totalVotes) * 100) + '%';
}

let pollVotes = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
};

function votePoll(option) {
    pollVotes[option]++;
    updatePollPercentages();
}

function updatePollPercentages() {
    const totalVotes = pollVotes.a + pollVotes.b + pollVotes.c + pollVotes.d;
    document.getElementById('percentageA').innerText = Math.round((pollVotes.a / totalVotes) * 100) + '%';
    document.getElementById('percentageB').innerText = Math.round((pollVotes.b / totalVotes) * 100) + '%';
    document.getElementById('percentageC').innerText = Math.round((pollVotes.c / totalVotes) * 100) + '%';
    document.getElementById('percentageD').innerText = Math.round((pollVotes.d / totalVotes) * 100) + '%';
}