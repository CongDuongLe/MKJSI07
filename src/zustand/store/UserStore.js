import create from 'zustand'


export const useUserStore = create((set) => ({
    globalCount : 60 ,
    defaultString : 'have default string',

    userInfo : {
        name : '',
        fullname : ''
    },

    quoteInfo : {
        quotes : '',
        authors : ''
    },


    increaseGlobalCount : () => set(state => ({globalCount : state.globalCount + 1})),
    decreaseGlobalCount : () => set(state => ({globalCount : state.globalCount - 1})),
    resetGlobalCount : () => set(state => ({globalCount : 0})),

    setDefaultString : (text) => set(state => ({defaultString : text})),
    resetString : () => set(state => ({defaultString : ''})),

    setQuoteInfo : (quotes,authors) => set(state => ({quoteInfo :  {quotes,authors}})),

}))


// cú pháp khởi tạo global store 
// b1 : import create from 'zustand'
// b2 : export const useComponentNameStore = create(
    // (set ,get) => ({})
//)
// b3 : viet cac ham trong callback cua create((set) => ({}))
// chữ màu đỏ : tên state :giá trị khởi tạo của state
// chữ màu xanh : hàm cập nhật lại giá trị của state 


// sử dụng 

// b1 : tại component cần sử dụng, khởi tạo đối tượng lấy từ state của store

// const { state, ham set state} = useComponentNameStore(state => state)

// b2 : trong component, gán lại các biến đc lấy từ store vào trong các thành phần của component

