import './style.css';
import { Link } from 'react-router-dom';
import { setItems } from './redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Posts() {
  const itemss = useSelector(state => state.counter.items);
  const dispatch = useDispatch();

  const fetchItemss = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    const items = await data.json();
    //setItems(item);
    //console.log('j');

    dispatch(setItems({ items: items }));

    // console.log('h');
  };
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
          <b>Body</b>:-{item.body}
          <br />
        </div>
      ))}
    </div>
  );
}
