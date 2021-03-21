module.exports.addRuns = (scorebook, data) => {
  return new Promise((resolve, reject) => {
    try {
      var { batsmans, bowlers } = scorebook;
      const { run, batsman, bowler, isFour, isSix } = data;
      let currentBastman = batsmans[batsman];
      let currentBowler = bowlers[bowler];
      scorebook.total += run;
      var nob = scorebook.currentOver - parseInt(scorebook.currentOver);
      //   Batsman stats
      currentBastman.runs += run;
      currentBastman.balls += 1;
      isFour ? (currentBastman.four += 1) : null;
      isSix ? (currentBastman.six += 1) : null;
      //   Bowler stats
      if (nob >= 0.5) {
        currentBowler.over = parseInt(currentBowler.over) + 1;
      } else {
        currentBowler.over += 0.1;
      }
      currentBowler.runs += run;
      let overIndex = scorebook.overs.findIndex(
        (value) => value.no === parseInt(scorebook.currentOver)
      );
      if (overIndex !== -1) {
        scorebook.overs[overIndex].balls.push({
          run,
          bowler,
          batsman,
        });
      } else {
        var overNo =
          parseInt(scorebook.currentOver) === 0
            ? 0
            : parseInt(scorebook.currentOver) + 1;
        scorebook.overs.push({
          no: overNo,
          balls: [{ run, bowler, batsman }],
        });
      }
      if (nob >= 0.5) {
        scorebook.currentOver = parseInt(scorebook.currentOver) + 1;
        resolve(true);
      } else {
        scorebook.currentOver += 0.1;
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
