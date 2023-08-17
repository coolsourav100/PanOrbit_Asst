import React from 'react'
import UserList from '../../Component/UserList';
const Home = () => {
  return (
    <div className='home'>
    <div className="main_div">
      
      <div className='card_div card' style={{width: "20rem"}}>
      {/*All User List*/}
        <UserList/>
  
</div>
    </div>
    </div>
  )
}

export default Home