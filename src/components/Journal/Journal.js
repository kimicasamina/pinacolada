import { useState, useEffect } from 'react';

const Journal = () => {
  const date = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weekdays = ['morning', 'evening', 'night'];
  const weekends = ['morning', 'afternoon', 'evening', 'night'];
  const [entry, setEntry] = useState();

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const yearName = date.getFullYear();
  //   let entry;

  const commuteMethod = ['carousel', 'taxi', 'habalhabal', 'jeep', 'lrt'];

  useEffect(() => {
    days.forEach((day) => {
      if (day !== 'saturday' || day !== 'sunday') {
        // WEEKDAYS
        weekdays.forEach((time) => {
          if (time === 'morning') {
            // GO TO WORK
            setEntry(
              <div className="note">
                <div className="date">
                  {dayName} {monthName} {yearName}
                </div>
                <div className="content">
                  Today is {dayName}, I have to get dress and go to work.
                  <p>GET GET AW!</p>
                </div>
                <div className="commuteMethod">
                  Hinog si kimi sa {commuteMethod[0]}
                </div>
                <div className="btn changeCommuteBtn">
                  <p>CHANGE COMMUTE METHOD</p>
                </div>
              </div>
            );
          }
          if (time === 'evening') {
            // EVENING
            // ONE ACTIVITY
            setEntry(
              <div className="note">
                <h1 className="date">
                  {dayName} {monthName} {yearName}
                </h1>
                <div className="content">
                  Today is {dayName}, I have to get dressed and go to work.
                  <p>GET GET AW!</p>
                </div>
                <div className="commuteMethod">
                  Hinog si kimi sa {commuteMethod[0]}
                </div>
                <div className="btn changeCommuteBtn">
                  <p>CHANGE COMMUTE METHOD</p>
                </div>
              </div>
            );
          }
        });
      }
    });
  }, []);

  return (
    <div className="Journal">
      {entry && <div className="Journal">{entry}</div>}
    </div>
  );
};
export default Journal;
