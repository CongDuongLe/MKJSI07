import React,{useState} from 'react'


const API_URL = `https://api.quotable.io/random`


const ApiLearning = () => {

    const [content, setContent] = useState('Default quote')
    const [author, setAuthor] = useState('Default author')
    const [tag, setTag] = useState('Default tag')

    // ham goi API
    const getQuote = async () => {
        const response = await fetch(API_URL)  // reponse : là biến đc gán cho phép promise fetch
        const data = await response.json()  // data : kết quả trả về , được lưu dưới dạng JSON
        console.log('data', data)

        // set lại state
        setContent(data.content)
        setAuthor(data.author)
        setTag(data.tags)

        // setContent(data.content)
        // setAuthor(data.author)
    }

    // fetch : từ khoá mặc định mà mỗi chương trình javascript đã cung cấp sẵn cho dev có thể call API
    // cú pháp fetch(link API)

    // dòng 14 tương đương : const response = await fetch(`https://api.quotable.io/random`)
    // .json() : chuyển đổi dữ liệu từ API trả về sang dạng JSON mà java







  return (
   <div aria-label="card-horizontal" className="flex items-center gap-x-5">
     <div className="flex-shrink-0 w-[200px] h-[200px] rounded-lg">
       <img
         src="https://staticg.sportskeeda.com/editor/2022/05/f142a-16537250123194-1920.jpg"
         alt=""
         className="object-cover w-full h-full rounded-lg"
       />
     </div>
     <div className="flex flex-col flex-1 gap-y-1">
        <p>#{tag}</p>
       <h3 className="text-[14px] font-bold text-black"> Quotes : {content}</h3>
       <span className="text-[14px] text-gray-400 mb-4">__Author : {author}</span>
       <button 
        onClick={getQuote}
        className="inline-flex items-center justify-center px-6 py-2 
        font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[40px]
        active:bg-blue-600 transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none
        ">
                 Generate Quote
        </button>
     </div>
   </div>

  )
}

export default ApiLearning



// API : là 1 đường link, kết nối giữa Front-end và Backe-end
// Back-end : xử lí logic, liên kết với database => trả rả 1 đường link
// FE : dùng đường link từ BE trả ra dùng lấy dữ liệu (method : GET),
// xoá dữ liệu (method : DELETE), thêm dữ liệu (method : POST), sửa dữ liệu (method : PUT),....
// liên quan trực tiếp đến nghiệp vụ : CRUD 
// CRUD : Create, Read, Update, Delete

// API sẽ mặc định trả về dữ liệu dưới dạng JSON

// JSON là gì : là 1 định dạng dữ liệu, dữ liệu được lưu trữ dưới dạng key-value
// ví dụ :
// {
//   "name" : "Nguyen Van A",
//   "age" : 20,
//   "address" : "Ha Noi"
// }


// Quotes : danh ngôn
// là 1 danh ngôn , người ta sẽ quan tâm đến
// nội dung : content
// tác giả : author


// Cách sử dụng API trong React
// 1. Sử dụng fetch : built-in của JS
// 2. Sử dụng axios : library JS, hỗ trợ tốt hơn với việc Call API và gán data API trả về

// dùng Promise để xử lí call API :
// chạy sog song giữa các hàm xử lí trong JS mà không cần đợi hàm phía trước chạy xong rồi mới chạy hàm phía sau
// Promise : là 1 đối tượng, có 2 trạng thái : pending, resolved

// pending : đang chờ xử lí
// resolved : đã xử lí xong

// async ... await : là 1 cú pháp để xử lí Promise

// async : là từ khoá để khai báo hàm này có xử lí promise bên trong nó
// await : là từ khoá để đợi hàm promise xử lí xong rồi mới chạy tiếp
// ví dụ : const funcionABC = async () => { await logic...   }




// 1. Cách sử dụng API
// 2. Cách sử dụng API trong React