import axios from "axios";
import { useCallback, useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import firebase from "../../firebase/config";
import "firebase/database";
import { Button, Container } from "@material-ui/core";

const database = firebase.database();

const ScoreBook = () => {
  const params = useParams();
  const [url, setUrl] = useState("");
  const [load, setLoad] = useState(false);
  const [score, setScore] = useState();
  const [overAdded, setoverAdded] = useState(false);
  const session = localStorage.getItem("session");
  const scoreUpdate = useCallback(() => {
    database.ref(session).on("value", async (snapshot) => {
      setScore(snapshot.val());
      let score = await snapshot.val();
      if (score) {
        if (score.scoreboard.overs === undefined) {
          console.log(1);
          setoverAdded(false);
        } else if (
          score.scoreboard.overs[parseInt(score.scoreboard.currentOver)] ===
          undefined
        ) {
          console.log("sp");
          setoverAdded(false);
        } else if (
          score.scoreboard.overs[parseInt(score.scoreboard.currentOver)]
            .balls === undefined
        ) {
          setScore(
            { ...score },
            (score.scoreboard.overs[score.scoreboard.currentOver].balls = [])
          );
          console.log(2);
          setoverAdded(true);
        } else if (
          score.scoreboard.overs[parseInt(score.scoreboard.currentOver)].balls
            .length >= 6
        ) {
          console.log(3);
          setoverAdded(false);
        } else {
          console.log(4);
          setoverAdded(true);
        }
      }
    });
  }, [session]);
  // const ref = useRef(0);
  // console.log(ref.current++);
  useEffect(() => {
    axios
      .post(
        "/",
        { matchId: params.id },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setUrl(`http://localhost:3002/${params.id}/${res.data._id}`);
        setLoad(true);
        localStorage.setItem("session", res.data._id);
        database.ref(`${res.data._id}`).set(res.data.match);
        scoreUpdate();
      })
      .catch((err) => console.log(err));
  }, [params.id, session, scoreUpdate]);
  const onClick = (run) => {
    if (overAdded) {
      const { onStrike, onBowling } = score.scoreboard;
      let data = {
        matchId: params.id,
        run,
        batsman: onStrike,
        isFour: run === 4 ? true : false,
        isSix: run === 6 ? true : false,
        bowler: onBowling,
      };
      axios
        .post("/update/runs", data, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.newOver) {
            setoverAdded(false);
          }
          database.ref(session).update(res.data.session);
        });
    } else {
      alert("Add Over");
    }
  };
  const changeStrike = () => {
    axios
      .get("/change-strike", {
        withCredentials: true,
      })
      .then((res) => {
        database.ref(session).update(res.data);
      });
  };
  const over = score ? parseInt(score.scoreboard.currentOver) : 0;
  const addNewOver = () => {
    axios
      .post(
        "/add-new-over",
        { over },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        database.ref(session).update(res.data);
        setTimeout(() => {
          setoverAdded(true);
        }, 2000);
      });
  };
  return (
    <Container>
      <h1>Score Book</h1>
      {load ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Open Overlay
        </a>
      ) : null}
      <h1>
        {score ? score.scoreboard.total : ""} /
        {score ? score.scoreboard.wickets : ""}
      </h1>
      <br />
      <Button size="large" color="primary" variant="contained">
        {score ? score.scoreboard.batsmans[score.scoreboard.onStrike].name : ""}
      </Button>
      <h4>
        {score ? score.scoreboard.batsmans[score.scoreboard.onStrike].runs : ""}{" "}
        (
        {score
          ? score.scoreboard.batsmans[score.scoreboard.onStrike].balls
          : ""}
        )
      </h4>
      <Button size="large" color="primary">
        {score
          ? score.scoreboard.batsmans[score.scoreboard.nonStrike].name
          : ""}
      </Button>
      <h4>
        {score
          ? score.scoreboard.batsmans[score.scoreboard.nonStrike].runs
          : ""}{" "}
        (
        {score
          ? score.scoreboard.batsmans[score.scoreboard.nonStrike].balls
          : ""}
        )
      </h4>
      <h2>Over: {score ? score.scoreboard.currentOver.toFixed(1) : 0}</h2>
      <h3>Bowling</h3>
      <h4>
        {score ? score.scoreboard.bowlers[score.scoreboard.onBowling].name : ""}
        &nbsp;&nbsp;&nbsp; Runs:
        {score ? score.scoreboard.bowlers[score.scoreboard.onBowling].runs : ""}
        &nbsp;&nbsp;&nbsp; Overs:
        {score
          ? score.scoreboard.bowlers[score.scoreboard.onBowling].over.toFixed(1)
          : ""}
        &nbsp;&nbsp;&nbsp; Wickets:
        {score
          ? score.scoreboard.bowlers[score.scoreboard.onBowling].wickets
          : ""}
      </h4>
      {overAdded
        ? score
          ? score.scoreboard.overs[over].balls.map((item, index) => {
              return (
                <h4 key={index}>
                  Ball:{index + 1} Run: {item.run}
                </h4>
              );
            })
          : ""
        : ""}
      {!overAdded ? (
        <Button onClick={addNewOver} variant="contained" color="secondary">
          Add New Over
        </Button>
      ) : (
        ""
      )}
      <br />
      <br />
      <Button
        onClick={() => {
          onClick(6);
        }}
        variant="contained"
        color="primary"
      >
        Six
      </Button>
      <Button
        onClick={() => {
          onClick(4);
        }}
        variant="contained"
        color="primary"
      >
        Four
      </Button>
      <Button
        onClick={() => {
          onClick(1);
        }}
        variant="contained"
        color="primary"
      >
        1
      </Button>
      <Button onClick={changeStrike} variant="contained" color="secondary">
        Change Strike
      </Button>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default ScoreBook;
