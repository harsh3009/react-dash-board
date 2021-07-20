import React, { useEffect } from 'react';
import './style.css';
import { setItems } from './redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Details() {
  const itemss = useSelector(state => state.counter.items);
  const dispatch = useDispatch();
  console.log(itemss);

  const fetchItemss = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=10'
    );
    const items = await data.json();

    dispatch(setItems({ items: items }));
  };

  //<button onClick={() => dispatch(setAddress({ street: '23rd Street' }))}>
  useEffect(() => {
    fetchItemss();
  }, []);

  return (
    <div>
      {itemss.map(item => (
        <div className="Card">
          <b>Id</b>:-{item.id}
          <br />
          <b>Title</b>:-{item.title}
          <br />
          <b>Url</b>:-{item.url}
          <br />
          <img src={item.thumbnailUrl} />
        </div>
      ))}
    </div>
  );
}
