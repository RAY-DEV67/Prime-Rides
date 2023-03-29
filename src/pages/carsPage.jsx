import { useState } from "react";
import db from "../config/firebase";
import { Search } from "../components/search";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TopCard } from "../components/topcard";
import LoadingSpinner from "../components/loadingspinner";

export function CarsPage() {
  const { product } = useParams();
  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(false);

  console.log(isEmpty);
  console.log(loading);

  // console.log(locationlist);

  useEffect(() => {
    setloading(true);
    setempty(false);
    db.collection("Products")
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
      <div className="lg:absolute lg:top-[13%] pt-[17%] lg:left-[35%] lg:z-[-1] lg:w-[60%]">
        <p className="mt-[rem] font-bold text-2xl text-center text-white border-y border-[#2099fe] py-[1rem]">OPTCARS</p>
        <div className="mx-[2rem]">
        <Search />
        </div>

        <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">
          {loading ? (
            <LoadingSpinner/>
          ) : (
            ""
          )}
        </p>

        <p className="w-[100%] text-center text-2xl">
          {empty ? "No Results Found!!" : ""}
        </p>

        <div className="flex lg:flex flex-wrap gap-3 justify-center mb-[1rem] bg-[#333e51]">
        {clothsList.map((post, index) => {
            return (
              <div
              key={index}
              className="max-w-4xl"
            >
                <TopCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}