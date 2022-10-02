import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, deleteField  } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useUserStore } from "../zustand/store/UserStore";

const FirebaseApp = () => {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [quoteId, setQuoteId] = useState("");
  const [quotes, setQuotes] = useState([]);

  let allQuotes = [];


  // start collection from firebase

  const quoteRef = collection(db, "quotes");
  console.log("first", quoteRef);

  // get data from firebase

  const getQuotes = async () => {
    setLoading(true);
    const quoteSnapshot = await getDocs(quoteRef);
    console.log("snapshot", quoteSnapshot);
    //    quoteSnapshot.forEach((doc) => {
    //         console.log(doc.id, '=>', doc.data())
    //     })
    quoteSnapshot.docs.map((doc) => {
      return (
        allQuotes.push({
            id: doc.id,
            ...doc.data()
        }),
        console.log('allQuotes', allQuotes),
        setLoading(false)
        )
    });
}

  useEffect(() => {
    getQuotes();
  }, []);


  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
    //   addDoc(quoteRef, {
    //     title: quote,
    //     author: author,
    //   })
    //     .then(() => {
    //       console.log("added");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    await addDoc(quoteRef, {
        title: quote,
        author: author,
    }).then(() => {
        console.log("added");
    }).catch((error) => {
        console.log(error);
    })
      console.log("submit");
      setAuthor("");
      setQuote("");
    },
    [author, quote, quoteRef]
  );

  console.log('postId', quoteId)


  const handleDelete = async (e) => {
    e.preventDefault();
     const colRefDelete = doc(db, "quotes", `${quoteId}`);
      await deleteDoc(colRefDelete)
        .then(() => {
          console.log("deleted", quoteId);
        })
        .catch((error) => {
          console.log(error);
        });
  };

 





  return (
    <div className="flex flex-col px-2 py-4 h-full w-full">
      {loading ? (
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      ) : (
        <div aria-label="card-item-v1" className="flex flex-col w-[400px] mx-auto">
          <div className="relative flex-shrink-0 mb-5 h-[250px]">
            <img
              src="https://bit.ly/3zzCTUT"
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="mb-3 text-lg font-bold">
              Welcome to the best place to travel on the world
            </h3>
            <div className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow mx-auto mt-10"
        aria-label="signup-form"
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Update Quote</h2>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Quote
          </label>
          <input
            id="email"
            type="text"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your quote..."
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Author
          </label>
          <input
            id="password"
            type="text"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your author..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Create Quote
        </button>
      </form>

        <div className="mx-auto">

        <form
          className="flex flex-col border border-slate-200 rounded-xl w-[400px] bg-pink-100 mt-4"
          aria-label="simple-form"
          onSubmit={handleDelete}
        >
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter your postId"
              className="w-full p-3 bg-transparent outline-none"
              value={quoteId}
              onChange={(e) => setQuoteId(e.target.value)}
            />
          </div>
        </form>
          <button 
          onClick={handleDelete}
          className="flex p-3 font-bold text-white bg-red-500 rounded-xl mx-auto mt-4 active:bg-blue-500 ">
            Delete
          </button>
        </div>



    </div>
  );
};

export default FirebaseApp;


// component : FirebaseApp.jsx