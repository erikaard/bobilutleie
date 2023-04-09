import React from 'react';
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import './Calendar.css'

const API_KEY = process.env.REACT_APP_API_KEY
const CAL_ID = process.env.REACT_APP_CALENDAR_ID
let calendars = [
  { calendarId: CAL_ID, color: "red" },
];

let styles = {
    //you can use object styles (no import required)
    calendar: {
      borderWidth: "3px", //make outer edge of calendar thicker
    },
  
    //you can also use emotion's string styles
    today: css`
      /* highlight today by making the text red and giving it a red border */
      color: #262626;
      border: 1px solid #262626;
    `,
    day : css`
        color: #262626;
    `,
    multiEvent: css`
        color: red;
        background-color: red;
    `
  };

function CalendarComp() {
  return (
    <section id="kalender">
        <div >
            <h1 className="text-white p-5" style={{backgroundColor:'#262626', fontFamily: 'Opensans, sans-serif'}}>TILGJENGELIGHET</h1>
            <div className="p-5">
                <div className="p-3 d-flex align-items-center"> 
                <div className="d-flex align-items-center" style={{fontFamily: 'Opensans, sans-serif'}}>
                  <div style={{border:'solid 1px', width:'13px', height:'13px'}}> </div> = Ledig </div>
                  <div className="p-3 d-flex"> <div style={{color:'red'}}>&#9632;</div> = Opptatt </div>
                </div>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles}/>
            </div>
        </div>
    </section>
  );
}

export default CalendarComp;