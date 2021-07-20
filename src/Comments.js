import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { setItems } from './redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Details() {
  //const [items, setItems]=useState([]);
  const itemss = useSelector(state => state.counter.items);
  const dispatch = useDispatch();

  /* const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const item = await data.json();
   
    //console.log(item);
    setItems(item);
    
  };*/
  const fetchItemss = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/comments?_limit=10'
    );
    const items = await data.json();
    //setItems(item);
    //console.log('j');

    dispatch(setItems({ items: items }));

    // console.log('h');
  };

  //<button onClick={() => dispatch(setAddress({ street: '23rd Street' }))}>
  useEffect(() => {
    fetchItemss();
  }, []);

  return (
    <div>
      {itemss.map(item => (
        <div className="Card">
          <b>Post Id:</b>
          {item.postId}
          <br />
          <b>Name:</b>
          {item.name}
          <br />
          <b>Email:</b>
          {item.email}
          <br />
          <b>Body:</b>
          {item.body}
          <br />
        </div>
      ))}
    </div>
  );
}
