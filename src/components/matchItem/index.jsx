import classNames from 'classnames'
import { CommandIcon } from "@/assets/icon";

import styles from "./styles.module.scss"

const matchItem = ({ match }) => {

  const statusClass = classNames({
    [styles.status]: true,
    [styles.finished]: match.status === 'Finished',
    [styles.scheduled]: match.status === 'Scheduled',
    [styles.ongoing]: match.status === 'Ongoing' 
  });

  return (
    <div className={styles.matchItemWrapper}>
      <div className={styles.name}>
        <CommandIcon />
        {match.awayTeam.name}
      </div>
      <div className={styles.score}>
        {match.awayScore} : {match.homeScore} 
        <div className={statusClass}>
          {match.status}
        </div>
      </div>
      <div className={styles.name}>
        {match.homeTeam.name}
        <CommandIcon />
      </div>
    </div>
  );
};

export default matchItem;
