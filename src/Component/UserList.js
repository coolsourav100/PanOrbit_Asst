import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../ContextApi/Context';

const UserList = () => {
  // Accessing data from the context API
  const { data, getAllData } = useContext(UserContext);

  // Fetch initial data on component mount
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <h4 className="selction">Select an account</h4>
      <ul className="list-group list-group-flush">
        {/* Map through data to create user list */}
        {data.map((item, ind) => (
          <Link className='list_item_link' to={`/dashboard/user/${item.id}`} state={item} key={ind + 1}>
            <li className="list-group-item d-flex">
              <img className='card_list_img' src={item.profilepicture} alt={`Profile of ${item.name}`} />
              <h6 className='p-2'>{item.name}</h6>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default UserList;