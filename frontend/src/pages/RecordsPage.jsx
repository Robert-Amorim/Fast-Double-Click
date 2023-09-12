import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL_RECORDS } from '../utils/strings';
import '../styles/RecordsPage.css';

export default function ListRecords() {
  const [records, setRecords] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [orderBy, setOrderBy] = useState('time');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    axios.get(API_URL_RECORDS)
      .then(response => {
        setRecords(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const filterRecordsByDate = (records) => {
    if (!startDate || !endDate) {
      return records;
    }
  
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return [];
    }
  
    const filtered = records.filter(record => {
      const recordDate = new Date(record.date);
      return start.getTime() === end.getTime() || (recordDate >= start && recordDate <= end);
    });
  
    if (filtered.length > 0) {
      return filtered;
    } else {
      return records;
    }    
  };
  

  const sortRecords = (records) => {
    if (!orderBy) {
      return records;
    }
  
    const orderMapping = {
      ascendente: -1,
      descendente: 1,
    };
  
    const customComparator = (y, x) => {
      const indexY = y[orderBy];
      const indexX = x[orderBy];
  
      if (indexY < indexX) {
        return orderMapping[order];
      }
      if (indexY > indexX) {
        return orderMapping[order] * -1;
      }
      return 0;
    };
  
    return [...records].sort(customComparator);
  };
  
  

  const filterAndSortRecords = () => {
    return sortRecords(filterRecordsByDate([...records]));
  };
  

  const buttonApplyFilters = () => {
    setRecords(filterAndSortRecords());
  };
  
  const buttonClearRecords = () => {
    axios.delete(API_URL_RECORDS)
      .then(response => {
        setRecords([]);
        console.log(setRecords)
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
      <div className="container-btn-home">
        <Link to="/"><button className="btn btn-info" id="btn-home">Home</button></Link>
        <h1 className="title-h1">List of Records</h1>
      <div id='test' className="constainer-filters">
        <label htmlFor="startDate" className="label-start-date">Start Date:</label>
        <input type="date" className="form-control" id="startDate" value={startDate} onChange={element => setStartDate(element.target.value)} />

        <label htmlFor="endDate" className="label-end-date">End Date:</label>
        <input type="date" className="form-control" id="endDate" value={endDate} onChange={element => setEndDate(element.target.value)} />

        <label htmlFor="orderBy" className="label-oder-by">Order By:</label>
        <select className="form-control" id="orderBy" value={orderBy} onChange={element => setOrderBy(element.target.value)}>
          <option value="time">Time</option>
          <option value="date">Date And Time</option>
        </select>

        <label htmlFor="order" className="label-order">Order:</label>
        <select className="form-control" id="order" value={order} onChange={e => setOrder(e.target.value)}>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
        <button className="btn btn-success" id="filter" onClick={buttonApplyFilters}>Filter</button>
        <button className="btn btn-danger" onClick={buttonClearRecords}>Clear</button>
      </div>

      <ul className="container-list-record">
        {records.map(record => (
          <li key={record.date}>
            Time: {(record.time / 1000).toFixed(2)}s - Date and Time: {new Date(record.date).toLocaleString()}
          </li>
        ))}
      </ul>
      <div className="container-btn-clear">
      </div>
    </div>
  );
}

