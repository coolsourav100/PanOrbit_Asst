import React ,{useState , useEffect, useContext}from 'react'
import { Link,  useParams} from 'react-router-dom'
import Profile from './Profile';
import Todo from './Todo';
import Post from './Post';
import Gallery from './Gallery';
import { UserContext } from '../ContextApi/Context';
import Chat from '../Component/Chat';



const Dashboard = () => {
  {/*get data from contest api*/}
    const { profileData, getFilterData, } =
    useContext(UserContext) 
  const { id } = useParams();
  {/*store user id in LocalStroge*/}
  localStorage.setItem("id", id);
{/*Get Single User Fileter Data*/}
  useEffect(() => {
    let ID = localStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id]);

  // console.log(profileData,'profileData')
    
  const [activeLink, setActiveLink] = useState('Profile');

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };
  return (
    <div className='dash_div'>
    <div className='dash_left'>
    <div className='dash_main_div'>
    <div className='dash_main_div_cont'>
    {/*User Profile*/}
    <Link
    className={`nav_Link ${activeLink === 'Profile' ? 'active' : ''}`}
    onClick={() => handleLinkClick('Profile')}
>
    Profile
</Link>
{/*User Posts*/}
    <Link
    className={`nav_Link ${activeLink === 'Posts' ? 'active' : ''}`}
    onClick={() => handleLinkClick('Posts')}
>
    Posts
</Link>
{/*User Gallery*/}
    <Link
    className={`nav_Link ${activeLink === 'Gallery' ? 'active' : ''}`}
    onClick={() => handleLinkClick('Gallery')}
>
    Gallery
</Link>
{/*User ToDo List*/}
    <Link
    className={`nav_Link ${activeLink === 'Todo' ? 'active' : ''}`}
    onClick={() => handleLinkClick('Todo')}
>
    ToDo
</Link>
    </div>
    </div>
    </div>
  <div className='dash_main_right'>
  <div className='dash-right-top'>
  <div className='top-left'>
  <h4>{activeLink}</h4>
  </div>
  {/* Render Profile data */}
  <div className='top-right'>
  <img className='pro_img' src={profileData[0]?.profilepicture} alt={`Profile of ${profileData[0]?.name}`}/>
  <h3>{profileData[0]?.name}</h3>
  </div>
  </div>
  <div className='dash_right_btm'>
  {activeLink==='Profile' && <Profile data={profileData[0]}/>}
  {activeLink ==='Posts' && <Post/>}
  {activeLink === 'Gallery' && <Gallery/>}
  {activeLink==='Todo' && <Todo/>}
  </div>
  </div>

 
    <Chat/>
    </div>
  )
}

export default Dashboard