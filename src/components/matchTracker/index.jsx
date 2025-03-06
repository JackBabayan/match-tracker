import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatches } from '@/store/matchSlice';
import { LoadingIcon } from "@/assets/icon";

import MatchItem from '@/components/matchItem';

import styles from "./styles.module.scss";

const MatchTracker = () => {
  const dispatch = useDispatch();
  const { matches, isLoading, error } = useSelector((state) => state.matches);

  const matchContainerRef = useRef(null); // Перемещаем useRef на начало компонента

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  useEffect(() => {
    if (matches.length > 0 && matchContainerRef.current.children) {
      gsap.fromTo(
        matchContainerRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power3.out',
        }
      );
    }
  }, [matches]);

  if (isLoading) {
    return <div className={styles.matchContainer}><LoadingIcon className={styles.rotateSvg} /></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.matchContainer} ref={matchContainerRef}>
      {matches.length > 0 ?
        matches.map((match, id) => (
          <MatchItem match={match} key={id} />
        ))
        :
        <div>Нет матчей</div>
      }
    </div>
  );
};

export default MatchTracker;
