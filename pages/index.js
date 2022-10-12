import styles from '../styles/Home.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Leaderboard() {

    const [leaderboard, setLeaderboard] = useState([]);

    const getData = async () => {
        await axios({
            method: 'get',
            url: process.env.NODE_ENV === 'development' ? '/api/leaderboard' : 'https://selem3lalcode.tech/api/leaderboard',
        }).then((res) => {
            console.log(res.data);
            setLeaderboard(res.data.data);
        }).catch((err) => { console.log(err) });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={cn('row', styles.all_container)}>
            <div className={cn('col-lg-6', styles.left_container)}>
                <div className={cn("container w-100", styles.our_container)}>
                    <div className={styles.logo_container}>
                        <img src='/logo 2.png' className={styles.image}></img>
                    </div>
                    <div className={styles.leaderboard_container}>
                        <h1 className={styles.leaderboard_title}>Leaderboard</h1>
                        <h2>Congratulations, You are all winners</h2>
                        <div className={styles.leaderboard_table}>
                            <p>Avatar</p>
                            <p>Team name</p>
                            <p>Rank</p>
                        </div>
                        <div className={styles.scroll}>
                            {leaderboard.sort((a, b) =>   a.rank - b.rank ).map((team, i) => {
                                return (
                                    <div className={styles.leaderboard} key={i}>
                                        <img src={`https://avatars.dicebear.com/api/bottts/${team.name}.svg`} width='70px'></img>
                                        <p>{team.name}</p>
                                        <p>{team.rank}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <footer className={styles.footer}>
                        <img src='/footer.svg'></img>
                    </footer>
                </div>

            </div>
            <div className={cn('col-lg-6', styles.background)}>

            </div>
        </div>
    )
}