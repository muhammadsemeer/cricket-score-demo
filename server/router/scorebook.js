const express = require("express");
const { addRuns } = require("../helpers/addRuns");
const router = express.Router();

router.post("/", (req, res) => {
  const session = {
    id: req.body.matchId,
    scoreboard: {
      total: 0,
      wickets: 0,
      currentOver: 0.0,
      batsmans: {
        1: {
          name: "Kohli",
          runs: 0,
          balls: 0,
          four: 0,
          six: 0,
        },
        2: {
          name: "ABD",
          runs: 0,
          balls: 0,
          four: 0,
          six: 0,
        },
      },
      bowlers: {
        3: {
          name: "Bumrah",
          over: 0.0,
          runs: 0,
          wickets: 0,
        },
      },
      overs: [],
      onStrike: "1",
      nonStrike: "2",
      onBowling: "3",
    },
  };
  if (
    req.session.match !== undefined &&
    req.body.matchId === req.session.match.id
  ) {
    res.json({
      _id: req.sessionID,
      match: req.session.match,
    });
  } else {
    req.session.match = session;
    res.json({
      _id: req.sessionID,
      match: req.session.match,
    });
  }
});

router.post("/overlay/valid", (req, res) => {
  if (req.body.session === req.sessionID) {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

router.post("/update/runs", (req, res) => {
  addRuns(req.session.match.scoreboard, req.body)
    .then((response) => {
      res.json({ newOver: response, session: req.session.match });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.get("/change-strike", (req, res) => {
  let temp = req.session.match.scoreboard.onStrike;
  req.session.match.scoreboard.onStrike =
    req.session.match.scoreboard.nonStrike;
  req.session.match.scoreboard.nonStrike = temp;
  res.json(req.session.match);
});

router.post("/add-new-over", (req, res) => {
  req.session.match.scoreboard.overs.push({
    no: parseInt(req.body.over),
    balls: [],
  });
  res.json(req.session.match);
});

module.exports = router;
