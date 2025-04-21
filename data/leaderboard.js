const fs = require('fs');

const leaderboardPath = './leaderboard.json';

const updateLeaderboard = (user) => {
  let data = {};
  if (fs.existsSync(leaderboardPath)) {
    data = JSON.parse(fs.readFileSync(leaderboardPath));
  }

  if (!data[user]) data[user] = 0;
  data[user]++;

  fs.writeFileSync(leaderboardPath, JSON.stringify(data, null, 2));
};

module.exports = { updateLeaderboard };