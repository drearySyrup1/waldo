import React, { useEffect, useState } from "react";
import {
  Entries,
  StyledLeaderboard,
  TableEntry,
  TableHeadings,
  Medal,
  ScoreAlign,
  SmHeading,
  LevelCard,
  LevelSelectWrap,
  SwipeText,
  Pages,
} from "./LeaderBoard.styled";
import { Heading } from "../styles/LevelSelect.styled";
import levels from "../../levels.js";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  addDoc,
  collection,
  doc,
  endBefore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
} from "firebase/firestore";
import { formatTime } from "../../utils";

import { Button } from "../styles/Button.styled";
import { useRef } from "react";

// PAGINATION NOT WORKONG BECAUSE properly becaus of
// LIMIT 7 if last resutls are 4 when you go back
// it fucks eveything up
// delete it and redo the whole thing

const LeaderBoard = () => {
  const { id } = useParams();
  const [scores, setScores] = useState([]);
  const db = useSelector((state) => state.main.db);
  const [page, setPage] = useState(1);
  const lastDoc = useRef();
  const history = useRef({});
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (isEnd) setIsEnd(false);
  }, [page]);

  const nextPage = async () => {
    const collectionRef = collection(
      doc(db, "highscores", "iXo6ZpqjxwzbBqJLXGMd"),
      id
    );

    const subCollectionSnapshot = await getDocs(
      query(
        collectionRef,
        orderBy("time", "asc"),
        startAfter(lastDoc.current),
        limit(7)
      )
    );

    history.current[`${page + 1}`] = subCollectionSnapshot.docs[0];

    if (subCollectionSnapshot.empty) {
      setIsEnd(true);
      return;
    }

    lastDoc.current =
      subCollectionSnapshot.docs[
        subCollectionSnapshot.docs.length - 1
      ];

    const localScores = [];
    subCollectionSnapshot.forEach((doc) => {
      localScores.push(doc.data());
    });
    setPage((p) => p + 1);

    setScores(localScores);
  };

  const prevPage = async () => {
    setPage((p) => {
      if (p > 1) return p - 1;
    });
    const collectionRef = collection(
      doc(db, "highscores", "iXo6ZpqjxwzbBqJLXGMd"),
      id
    );

    const subCollectionSnapshot = await getDocs(
      query(
        collectionRef,
        orderBy("time", "asc"),
        startAt(history.current[`${page - 1}`]),
        limit(7)
      )
    );

    // if (subCollectionSnapshot.empty) return;

    lastDoc.current =
      subCollectionSnapshot.docs[
        subCollectionSnapshot.docs.length - 1
      ];

    const localScores = [];
    subCollectionSnapshot.forEach((doc) => {
      localScores.push(doc.data());
    });
    setScores(localScores);
  };

  useEffect(() => {
    async function getData() {
      const collectionRef = collection(
        doc(db, "highscores", "iXo6ZpqjxwzbBqJLXGMd"),
        id
      );

      const subCollectionSnapshot = await getDocs(
        query(collectionRef, orderBy("time", "asc"), limit(7))
      );

      history.current[`${page}`] = subCollectionSnapshot.docs[0];

      lastDoc.current =
        subCollectionSnapshot.docs[
          subCollectionSnapshot.docs.length - 1
        ];

      const localScores = [];
      subCollectionSnapshot.forEach((doc) => {
        localScores.push(doc.data());
      });

      setScores(localScores);
    }

    getData();
    setPage(1);
  }, [id, db]);
  return (
    <StyledLeaderboard>
      <Heading>LEADER BOARD</Heading>
      <SmHeading>SELECT LEVEL</SmHeading>
      <LevelSelectWrap>
        {levels.map((item, index) => {
          return (
            <NavLink
              activeClassName="active"
              style={{ textDecoration: "none" }}
              to={`/leader/${item.id}`}
            >
              <LevelCard key={index} img={item.image}>
                <p>{item.title}</p>
              </LevelCard>
            </NavLink>
          );
        })}
      </LevelSelectWrap>
      <SwipeText>Swipe</SwipeText>
      <Entries>
        <TableHeadings>
          <p>Place</p>
          <p>Name</p>
          <p>Time</p>
        </TableHeadings>
        {scores.map((score, index) => {
          return (
            <TableEntry>
              <ScoreAlign>
                {(page - 1) * 7 + index + 1}
                {[0, 1, 2].includes((page - 1) * 7 + index) && (
                  <Medal color={String(index + 1)} />
                )}
              </ScoreAlign>
              <p>{score.name}</p>
              <p>{formatTime(score.time)}</p>
            </TableEntry>
          );
        })}
      </Entries>
      <Pages>
        <Button
          bg={{
            H: 266,
            S: 50,
            L: 65,
          }}
          color="#fff"
          onClick={prevPage}
          disabled={page <= 1 ? true : false}
        >
          Prev Page
        </Button>
        <p>{page}</p>
        <Button
          bg={{
            H: 266,
            S: 50,
            L: 65,
          }}
          color="#fff"
          onClick={nextPage}
          disabled={isEnd ? true : false}
        >
          Next Page
        </Button>
      </Pages>
    </StyledLeaderboard>
  );
};

export default LeaderBoard;
