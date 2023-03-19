import React from 'react';
import Button  from './Button';
import Header  from './Header';
import Day  from './Day';
import Date  from './Date';
import SetDate  from './SetDate';
import SetDay  from './SetDay';

function Top(){

const[dayFormVisible,SetDayFormVisibility] = React.useState(false);

  const[dateFormVisible,SetDateFormVisibility] = React.useState(false);

  const[day,setDay]=React.useState([]);
  const[date,setDate]=React.useState([]);

  const setDayForm = () => SetDayFormVisibility(true);
  
  const hideSetDayForm = () => SetDayFormVisibility(false);

  
  const setDateForm = () => SetDateFormVisibility(true);
  
  const hideSetDateForm = () => SetDateFormVisibility(false);

  const setTodayDay = (day) =>{
    setDay([day]); 
  }
  
  const setTodayDate = (date) =>{
    setDate([date]); 
  }
  

  
  return(
    <div className="text-center border py-4 border-b-black">
      <Header></Header>
    <h1 className="underline text-2xl font-extrabold italic text-center">Let's do something new today</h1>
      
    <h1 className="text-2xl font-extrabold italic text-center font-serif">Work Hard In Silence ,<span className="text-2xl font-extrabold italic text-center font-serif"> Let Success Make Noise</span></h1>
      
      {!dateFormVisible  && (<Button onClick={setDateForm}>SetDate</Button>)}
      {dateFormVisible && (<SetDate onCreate={setTodayDate} onClose={hideSetDateForm}></SetDate>)}

      {date.map(t =>(<Date key={date}>{date}</Date>))}
      
      {!dayFormVisible  && (<Button onClick={setDayForm}>SetDay</Button>)}
      
      {dayFormVisible && (<SetDay onCreate={setTodayDay} onClose={hideSetDayForm}></SetDay>)}

      {day.map(t =>(<Day key={t}>{t}</Day>))}
      </div>
  );
}
export default Top;