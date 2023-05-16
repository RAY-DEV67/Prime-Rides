import { useState } from "react";
import db from "../config/firebase";
import { Search } from "../components/search";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TopCard } from "../components/topcard";
import LoadingSpinner from "../components/loadingspinner";

export function TwoToThreeM() {
  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(false);

  console.log(loading);

  // console.log(locationlist);

  useEffect(() => {
    setloading(true);
    setempty(false);
    db.collection("Products")
      .where("price", ">", 2000000)
      .where("price", "<=", 3000000)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        setclothsList(cloths);
        setloading(false);
        if (cloths.length === 0) {
          setempty(true);
        }
      });
  }, []);

  return (
    <div>
      <div className="pt-[17%] lg:pt-[5%]">
        <div className="text-white border-y mt-[rem] mx-[1rem] font-bold flex justify-between border-[#c2bebf] py-[1rem]">
          <p className="text-2xl text-center ">Filter: 2M - 3M</p>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="px-[0.5rem] text-sm border border-[#c2bebf] text-black text-center bg-[#c2bebf]"
          >
            Go Back
          </button>
        </div>
        <div className="mx-[2rem]">
          <Search />
        </div>

        <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">
          {loading ? <LoadingSpinner /> : ""}
        </p>

        <p className="w-[100%] text-center text-2xl">
          {empty ? "No Results Found!!" : ""}
        </p>

        <div className="flex lg:flex flex-wrap gap-3 justify-center mb-[1rem] bg-[#000000]">
          {clothsList.map((post, index) => {
            return (
              <div key={index} className="max-w-4xl">
                <TopCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
