//import { useState } from "react";
import React ,{useState}from 'react';


const Calendar = ({ month, isVisible }) => 
  {
    const [hoveredDay, setHoveredDay] = useState(null);
    // const [selectedDay, setSelectedDay] = useState(null);
  
    // const handleDayClick = (day) => {
    //   // Set the selected day when a day is clicked
    //   setSelectedDay(day);
    // };
    const generateCalendar = () => {
      if (!isVisible) {
        return null;
      }
  
      const daysInMonth = new Date(2024, getMonthIndex(month) + 1, 0).getDate();
      const firstDay = new Date(2024, getMonthIndex(month), 1).getDay();
  
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
      const calendarGrid = [];
  
      // Populate empty cells for the days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        calendarGrid.push(
          <div key={`empty-${i}`} className="calendar-cell empty-cell">
           
          </div>
        );
      }
  
      // Populate cells with the days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const isSunday = (firstDay + day - 1) % 7 === 0;
        const isHoveredDay = hoveredDay === day;
        calendarGrid.push(
          
          <div
          key={day}
          className={`calendar-cell${isSunday ? ' sunday-column' : ''}${isHoveredDay ? ' hovered-day' : ''}`}
          // onClick={() => handleDayClick(day)}
          onMouseEnter={() => setHoveredDay(day)}
          onMouseLeave={() => setHoveredDay(null)}
        >
          <div className={`day${isSunday ? ' sunday-text' : ''}`}>{day}</div>
          {/* <div className="weekday">{weekdays[(firstDay + day - 1) % 7]}</div> */}
        </div>
          
        );
      }
  
      return (
        // <div className="calendar-grid">
        //   {weekdays.map((day) => (
        //      <div key={day} className="weekday-cell">
        //        {day}
        //      </div>
           
        //   ))}
        //   {calendarGrid}
        // </div>
        <div className="calendar-grid">
        {weekdays.map((day, index) => (
          <div key={index} className={`weekday-cell${index === 0 ? ' sunday-heading' : ''}`}>
            {day}
          </div>
        ))}
        {calendarGrid}
      </div>
      );
    };
  
    const getMonthIndex = (month) => {
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
      return months.indexOf(month);
    };
    
  
    return <div className="calendar-container">{generateCalendar()}</div>;
  };

export default Calendar;