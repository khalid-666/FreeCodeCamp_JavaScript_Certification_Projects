// 1. Initialize the poll variable to a new Map object
const poll = new Map();

// 2. addOption function
function addOption(option) {
  // Check if option is empty or just whitespace
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }

  // Check if the option already exists in the poll
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  // Add the option with an empty Set to track voters
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 3. vote function
function vote(option, voterId) {
  // Check if option exists in the poll
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  // Check if the voter has already voted for this option
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  // Add voterId to the Set of voters
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 4. displayResults function
function displayResults() {
  let resultStr = "Poll Results:";
  
  for (const [option, voters] of poll.entries()) {
    resultStr += `\n${option}: ${voters.size} votes`;
  }
  
  return resultStr;
}

// Initialize at least three options (User Story 5)
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

// Add at least three votes across the options (User Story 6)
vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");