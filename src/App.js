import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import breaking from "./logo/news.jpeg";
import ScrollBar from "./logo/components/ScrollBar";

function App() {
  const [data, setData] = useState([]);

  const [country, setCountry] = useState("in");

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  console.log(data);

  useEffect(() => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&q=${search}&apikey=9da348c2e4af82c075b369ba1c840b03`
      )
      .then((reponse) => {
        setData(reponse.data.articles);
      });
   
  }, [search, country, category]);

  return (
    <div className="">
      <Navbar setSearch={setSearch} search={search} setCountry={setCountry}
       />
       <ScrollBar setCategory={setCategory}/>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 items-center justify-center gap-3 max-sm:mx-5 ml-10 ">
        {data.map((news) => {
          return (
            <div key={news.id} className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href={news.url}>
                <img
                  className="rounded-t-lg object-cover w-[100%] h-[30vh]"
                  src={news.image == null ? breaking : news.image}
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2 truncate">
                  {news.title}
                </h5>
                <p className="text-gray-700 text-base mb-4 truncate">
                  {news.description}
                </p>
                <a href={news.url}>
                  <button 
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-[#6750a4] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#6249a5] hover:shadow-lg focus:bg-[#6750a4] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#523c8d] active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read Full Article
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
     
    </div>
  );
}

export default App;
