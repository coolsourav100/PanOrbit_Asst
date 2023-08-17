import React, { useState, useEffect } from 'react';
import { UserContext } from '../ContextApi/Context';
import { useContext } from 'react';
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Messages from './Message';

const Chat = () => {
  // Getting data from the context API
  const { data, getAllData } = useContext(UserContext);

  // State variables for managing visibility and selected user
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch initial data on component mount
  useEffect(() => {
    getAllData();
  }, []);

  // Function to handle user click
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      {/* Chat Sidebar */}
      <div className="mainDiv" style={{ marginTop: hide ? "-270px" : "20px" }}>
        <div onClick={() => setHide(!hide)} className="chat">
          <div>
            <BsChatRight />
            <p>Chat</p>
          </div>
          {hide ? <FiChevronDown /> : <FiChevronUp />}
        </div>
        {hide ? (
          <div className="profiles">
            {/* Data mapping */}
            {data &&
              data.map((item) => (
                <div key={item.id} className='online_dtls'>
                  <div className="maping_div" onClick={() => handleUserClick(item)}>
                    <img src={item.profilepicture} alt="profile image" />
                    <p>{item.name}</p>
                    <div className='chat_online'>
                      {/* Chat online indicator */}
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
          </div>
        ) : (
          ""
        )}
      </div>
      
      {/* Selected User Chat */}
      <div>
        <div onClick={() => setHide1(hide)} className="chat">
          <div>
            <BsChatRight />
            <p>Chat</p>
          </div>
          {hide ? <FiChevronDown /> : <FiChevronUp />}
        </div>
        {hide ?
          <>{selectedUser && (
            <div className="chat_user">
              {/* Chat user details */}
              <div className='chat_top_dtls'>
                <img className='chat_img' src={selectedUser.profilepicture} alt="profile image" />
                <h5>{selectedUser.name}</h5>
                <div className='chat_toggle'>
                  {/* Toggle icon */}
                  {hide ? <FiChevronDown /> : <FiChevronUp />}
                </div>
              </div>

              {/* Chat messages */}
              <Messages />

              {/* Message input */}
              <div className="message-input">
                <input type="text" placeholder="Type your message..." />
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          )}</>
          : ""}
      </div>
    </>
  );
}

export default Chat;