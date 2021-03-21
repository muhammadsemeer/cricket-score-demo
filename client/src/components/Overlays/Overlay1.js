import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import firebase from "../../firebase/config";
import "firebase/database";
import axios from "axios";
import { Container } from "@material-ui/core"

const database = firebase.database();

const Overlay1 = () => {
  const { id, session } = useParams();
  const [score, setScore] = useState();
  const history = useHistory();
  useEffect(() => {
    axios
      .post(
        "/overlay/valid",
        {
          id,
          session,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const ref = database.ref(`${session}`);
        ref.on("value", (snapshot) => {
          setScore(snapshot.val());
        });
      })
      .catch((err) => {
        history.push("/404");
      });
  }, [id, history, session]);
  return (
    <Container>
      <h1>Overlay</h1>
      <h2>{score ? score.scoreboard.total : 0}</h2>
    </Container>
  );
};

export default Overlay1;
