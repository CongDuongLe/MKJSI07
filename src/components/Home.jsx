import React from 'react'
const USER_KEY = 'user_key'
const GOOGLE_TOKEN = 'google_token'


const Home = () => {

    const handleSignOut = (e) => {
        localStorage.removeItem(USER_KEY)
        window.location.reload()
    }

    const googleSignOut = () => {
        localStorage.removeItem(GOOGLE_TOKEN)
        window.location.reload()
    }



  return (
    <div>
        <div aria-label="card-overlay" className="relative w-[250px] h-[300px]">
          <img
            src="https://bit.ly/3zzCTUT"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
            <h3 className="text-base font-bold"></h3>
            <span className="text-sm text-gray-400"></span>
          </div>
        </div>

        <button
        onClick={handleSignOut}
        className="button-buoi7 mt-6 ml-2">
                  Sign Out
        </button>

        <button
        onClick={googleSignOut}
        className = 'btn-action ml-6'
        >
            Google Sign Out
        </button>



    </div>
  )
}

export default Home