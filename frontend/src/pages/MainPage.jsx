import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL_HOME } from '../utils/strings';
import '../styles/MainPage.css';

export default function MainPage() {
  const [clickTimeRecording, setClickTimeRecording] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const postButtonClick = () => {
    if (clickTimeRecording === null) {
      setClickTimeRecording(new Date().getTime());
    } else {
      const currentTime = new Date().getTime();
      const time = currentTime - clickTimeRecording;

      axios.post(API_URL_HOME, { time })
        .then(response => {
          setClickTimeRecording(null);
        })
        .catch(err => {
          console.error(err);
          setClickTimeRecording(null);
        });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1 id="fast" className="text-center mt-5">Fast Double Click</h1>
      <div className="row justify-content-center mt-3">
        <div className="current-date-time">
          <p>Current Time: {currentDateTime.toLocaleString()}</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div>
          <button
            className="btn-primary btn-lg btn-block"
            id="btnClick"
            onClick={postButtonClick}
          >
            Double Click
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="button-redirect">
          <Link to="/records">
            <button
              className="btn btn-secondary btn-lg btn-block"
              id="btn-redirect"
            >
              Records
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
