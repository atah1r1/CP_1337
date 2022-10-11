import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import cn from 'classnames';
import YouTube from 'react-youtube';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Modal from './components/Modal';


export default function Home() {

  const ModalButtonRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const opts = {
    height: '364',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const [data, setData] = useState({
    login: '',
    email: '',
    phone_number: '',
  });

  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios({
      method: 'post',
      url: process.env.NODE_ENV === 'development' ? '/api/users' : 'https://selem3lalcode.tech/api/users',
      headers:
      {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data)
    }).then((res) => {
      console.log(res.data);
      ModalButtonRef.current.click();
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }

  return (
    <div className={cn('row', styles.all_container)}>
      <div className={cn('col-lg-6', styles.left_container)}>
        <div className={cn("container w-100", styles.our_container)}>
          <div className={styles.logo_container}>
            <img src='/logo 2.png' className={styles.image}></img>
          </div>
          <div className={styles.title_container}>
            <h1 className={cn(styles.quote)} >Everyone in this country should learn how to program because it teaches you how to think.</h1>
            <p className={styles.paragraph}>A competitive programming is a kind of mental sport, wherein you (or your team) use your programming skills to write code for some really interesting and difficult problems, and in the process try to win a particular competition.
            </p>
            <h2 className={styles.how_to_play}>How to play:</h2>
            <ul className={styles.list}>
              <li> Register your account to <a href='https://codeforces.com/register' target='_blank' rel="noreferrer">codeforces.com</a></li>
              <li> The teams are selected randomly</li>
              <li> The teams will be given problems to solve</li>
              <li> The team with the most points wins</li>
              <li> A prize will be given to the winners (three first teams)</li>
            </ul>
            <div styles={{fontSize: '20px'}}>How to register an account on codeforces.com and create teams</div>
            <YouTube videoId="" opts={opts} className={cn("text-center mt-5", styles.youtube_video)} />
            <form className={cn("input-group input-group-lg", styles.form_container)} onSubmit={sendData}>
              <div className={cn('row', styles.input_group_class)}>
                <div className='col-lg-4'>
                  <span>Login *</span>
                  <input value={data.login} onChange={(e) => setData({ ...data, login: e.target.value })} type="text" className="form-control" placeholder='Enter your login' required></input>
                </div>
                <div className='col-lg-4'>
                  <span>Email *</span>
                  <input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} type="email" className="form-control" placeholder='Enter your email' required></input>
                </div>
                <div className='col-lg-4'>
                  <span>Phone number *</span>
                  <input value={data.phone_number} onChange={(e) => setData({ ...data, phone_number: e.target.value })} type="text" maxLength='10' className="form-control" placeholder='Enter your phone number' required></input>
                </div>
              </div>
              <div className={styles.register_btn}>
                <button className='btn btn-primary' type='submit'>{loading ? <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div> : 'Register'}</button>
              </div>
            </form>
          </div>
          <footer className={styles.footer}>
            <img src='/footer.svg'></img>

          </footer>
        </div>

      </div >
      <div className={cn('col-lg-6', styles.background)}>

      </div>
      <Modal ModalButtonRef={ModalButtonRef} />
    </div >
  )
}
