import React from 'react'
import { useUserStore } from '../../zustand/store/UserStore'

const TestGlobalStore = () => {

    const {
        defaultString,
        setDefaultString

    } = useUserStore(state => state)

  return (
    <div
        className='bg-[#AFB4FF] h-[100px] w-[300px] rounded-md items-center justify-between mx-auto'>

        <div>
            <input type={'text'} 
                // value={defaultString}
                placeholder={'enter your input'}
                onChange={(e) => setDefaultString(e.target.value)}
                className = 'border-2 border-black rounded-md w-[200px] h-[30px] mt-4'

            />
        </div>

    </div>
  )
}

export default TestGlobalStore



// trong input : e.target.value : gia tri hien tai trong o input minh dang nhap