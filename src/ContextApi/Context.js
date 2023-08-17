import { createContext, useState } from "react";
import { getProfile } from "../Component/Api/getProfile";


export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  

  const [profileData, setProfileData] = useState([]);
  const [data, setData] = useState([]);
  

  //Get data from Api
  const getAllData = () => {
    getProfile()
      .then((res) => {
        setData(res.data.users);
        
      })
      .catch((e) => {
        console.log(e)
      });
  };

  // fetch data with id
  const getFilterData = (id) => {
    getProfile()
      .then((res) => {
        setProfileData(res.data.users.filter((item) => item.id === Number(id)));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <UserContext.Provider
      value={{
        data,
        profileData,
        getFilterData,
        getAllData,
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
