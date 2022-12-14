import React, { useState } from "react";

const EMAIL_KEY = "email";
const PASSWORD_KEY = "password";

const Main = () => {
  // khởi tạo trạng thái của email và password là rỗng

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const [emailSave, setEmailSave] = useState("");

  // khai báo hàm để lưu email

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  console.log("email is :", email);
  console.log("password is :", password);

  // hàm để lưu emial và password vào localstorage

  const handleSave = (e) => {
    e.preventDefault();
    sessionStorage.setItem(EMAIL_KEY, email);
    sessionStorage.setItem(PASSWORD_KEY, password);
    const getEmail = sessionStorage.getItem(EMAIL_KEY);
    setEmailSave(getEmail);
    setIsLogin(true);
  };

  const removeSession = () => {
    sessionStorage.clear()
    setIsLogin(false)
  }




  return (
    <div>
      {isLogin ? (
        <div>
            Hello {emailSave} đã quay lại trang web
            <button className="btn-primary" onClick={removeSession}>
                Logout
            </button>
        </div>
      ) : (
        <form
          autoComplete="off"
          className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
          aria-label="signup-form"
        >
          <h2 className="mb-10 text-3xl font-bold text-center">Sign Up Form</h2>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label
              htmlFor="email"
              className="text-sm font-medium cursor-pointer"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label
              htmlFor="password"
              className="text-sm font-medium cursor-pointer"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => handlePassword(e)}
            />
          </div>
          <div className="flex items-center justify-end mb-5 text-slate-400">
            <p>Already have an account?</p>
            <a href="#" className="text-blue-500 underline">
              Sign In
            </a>
          </div>
          <button
            onClick={handleSave}
            type="submit"
            className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] active:bg-red-500"
          >
            Create an account
          </button>
        </form>
      )}
    </div>
  );
};

export default Main;

// điều kiệu ? đúng : sai
