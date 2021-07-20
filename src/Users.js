import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { setItems } from './redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Details() {
  //const [items, setItems]=useState([]);
  const itemss = useSelector(state => state.counter.items);
  const dispatch = useDispatch();
  console.log(itemss);

  /* const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const item = await data.json();
   
    //console.log(item);
    setItems(item);
    
  };*/
  const fetchItemss = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const items = await data.json();
    //setItems(item);
    //console.log('j');

    dispatch(setItems({ items: items }));

    console.log('h');
  };

  //<button onClick={() => dispatch(setAddress({ street: '23rd Street' }))}>
  useEffect(() => {
    fetchItemss();
  }, []);

  return (
    <div>
      <div>
        {itemss.map(item => (
          <div className="Card">
            UserName:-{item.name}
            <br />
            Email:-{item.email}
            <br />
            Phone:-{item.phone}
            <br />
            Website:-{item.website}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
