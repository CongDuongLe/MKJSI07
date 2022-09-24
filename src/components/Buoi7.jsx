import React, { useState } from "react";

const Buoi7 = () => {
  // State : trạng thái
  // state : trạng thái của 1 component

  // state có thể nhận các kiểu dữ liệu như 1 file js thông thường

  // cac kiểu dữ liệu của js : number , string , boolean , array , object , function , null , undefined
  // state : cũng có thể nhận các kiểu dữ liệu trên

  // cú pháp của useState  : use : Sử dụng + State : trạng thái : sử dụng trạng thái

  // khai báo : const [ nameState, setNameState ] = useState(giá trị khởi tạo)

  // lam dung dung dem so bang useState

  const [number, setNumber] = useState(100);

  const [amount, setAmount] = useState(0);

  const [showImage, setShowImage] = useState(false);


    const [ listImage, setListImage ] = useState([
        `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
        `https://i.pinimg.com/originals/eb/e4/a3/ebe4a37984a8745e78555906765df486.jpg`,
        `https://i.pinimg.com/736x/14/7e/02/147e02370bba17d5c30299a78ef0ac63.jpg`,
        `https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg`

    ])


    const [ person, setPerson ] = useState([

        {
            id : 1,
            name : 'Dinh tuan Khang',
            age : 20,
            avatarUrl : `https://i1.sndcdn.com/avatars-GTO18s38bV1sggX2-GasHTw-t500x500.jpg`,
        },
        {
            id : 2,
            name : 'Mono',
            age : 22,
            avatarUrl : `https://media.viezone.vn/prod/2022/8/7/ATA_1798_f9331c10e7.jpg`
        }
    ])




  const handleIncrease = () => {
    return setNumber(number + 1);
  };

  const handleDecrease = () => {
    return setNumber(number - 1);
  };

  const handleIncreaseByAmount = () => {
    return setNumber((prevNumber) => prevNumber + parseInt(amount));
  };

  const handleDecreaseByAmount = () => {
    return setNumber((prevNumber) => prevNumber - parseInt(amount));
  };

  // previouseNumber : số trước đó => số trước đó + amount( đã đc convert dang dạng số nguyên = hàm parseInt)

  const handleShowImage = () => {
    return setShowImage(!showImage);
  };

  return (
    <div>
      {/* <h1
            className='text-3xl mb-4'
        > giá trị khởi tạo của state hiện là : {number}</h1>

        <input type="text"
            value = {amount}
            onChange = { (e) => setAmount(e.target.value)}
            placeholder='Enter your amount'
        
        />

        <div className='flex flex-row mt-4 mx-auto '>
            <button 
                onClick = {handleIncrease}
                className='button-buoi7'>
                Increase
            </button>

            <button
                onClick = {handleDecrease} 
                className='button-buoi7 ml-6'>
                Decrease
            </button>

            <button
                className='button-buoi7 ml-6'
                onClick = {handleIncreaseByAmount}
            
            >
                Increase by Amount
            </button>
            <button
                className='button-buoi7 ml-6'
                onClick = {handleDecreaseByAmount}
            
            >
                Decrease by Amount
            </button>



        </div> */}

      {/* {showImage && (
        <div aria-label="card-overlay" className="relative w-[250px] h-[300px]">
          <img
            src="https://i.pinimg.com/originals/c2/65/e6/c265e608b26c9ac3edc604fb851eaaa6.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}

      <div onClick={handleShowImage} className="btn-action mt-4">
        { showImage ? 'Hide Image' : 'Show Image'}
      </div> */}


        {/* {
            listImage.map(
                (item, index) => {
                    return(
                        <div
                            key={index}
                          className="flex  items-start justify-between gap-x-5 max-w-[1000px]"
                        >
                            <img src={item} alt="day la anh"  className="h-[350px] w-[250px] object-contain"/>
                        </div>
                    )
                }
            )
        } */}


        {
            person.map(
                (item, index) => {
                    return (
                        <div key={item.id} className='mt-10'>
                            <h2
                                className="text-red-500 text-3xl"
                            >{item.name}</h2>
                            <div
                                className="text-pink-600 text-2xl"
                            >{item.age}</div>
                            <img 
                                src={item.avatarUrl}
                                className='h-[350px] w-[350px] rounded-md object-contain '
                            
                            />
                        </div>
                    )
                }
            )
        }








    </div>
  );
};

export default Buoi7;
