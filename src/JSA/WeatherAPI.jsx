import React, { useState } from "react";

const BASE_URL = `https://jsonplaceholder.typicode.com/users`;

const WeatherAPI = () => {
  const [userInfo, setUserInfo] = useState([
    // have email, name, username

    {
      name: "Default full name",
      username: "Default username",
      email: "Default email",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // ham goi API

  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setUserInfo(data);
    setIsLoading(false);
  };

  console.log("userInfo", userInfo);

  const RenderInfo = (props) => {
    const { item, index } = props;

    return (
      <div
        aria-label="card-overlay-v2"
        className="relative w-[250px] h-[300px] overflow-hidden rounded-lg mt-4"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yua_Mikami_on_Taiwan_Pavilion_stage%2C_Taipei_Game_Show_20180127a.jpg/800px-Yua_Mikami_on_Taiwan_Pavilion_stage%2C_Taipei_Game_Show_20180127a.jpg"
          alt="Yua Mikami"
          className="object-contain w-full h-full rounded-lg"
        />
        <div
          key={index}
          className="absolute bottom-0 left-0 right-0 flex flex-col p-5 text-white gap-y-1 bg-gradient-to-t from-black"
        >
          <h3 className="text-base font-bold">Name : {item.name}</h3>
          <span className="text-sm">Username : {item.username}</span>
          <span className="text-sm">email : {item.email}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      ) : (
        <>
          {userInfo.map((item) => {
            return (
               <div aria-label="card-overlay" className="relative w-[250px] h-[300px]">
                 <img
                   src="https://bit.ly/3zzCTUT"
                   alt=""
                   className="object-cover w-full h-full rounded-lg"
                 />
                 <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
                   <h3 className="text-base font-bold">{item.name}</h3>
                   <span className="text-sm text-gray-400">{item.email}</span>
                 </div>
               </div>
            );
          })}

          <button
            onClick={getUsers}
            className=" mt-4 rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3 active:bg-blue-500 active:text-blue-100 "
          >
            Request Information
          </button>
        </>
      )}
    </>
  );
};

export default WeatherAPI;

// ph???n ch??? m??u v??ng : ??c g???i l?? bi???n ph???, hay c??n g???i l?? props( properties)
// d???ch theo ngh??a l?? thu???c t??nh

// JSB 
// cu???i kho?? jsa :/
// ch???c n??ng ????ng k??, ????ng nh???p
// sau khi ????ng nh???p th??nh c??ng, hi???n th??? 1 giao di???n m??n h??nh home 
// thao t??c x??? l?? v???i API (get : hi???n th??? th??ng tin )
// deploy tr??n github 

// ch??? ????? cu???i kho?? : ng??y nh?? gi??o vn 
// y??u c???u : giao di???n c???a trang web s??? mang m??u s???c c???a ng??y nh?? gi??o vn