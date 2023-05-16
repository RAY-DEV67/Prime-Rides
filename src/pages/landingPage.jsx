import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search } from "../components/search";
import LoadingSpinner from "../components/loadingspinner";
import { TopCard } from "../components/topcard";
import db from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import Prime from "../assets/primeMain.jpg";

export function LandingPage() {

    const navigate = useNavigate();

  const [brand, setbrand] = useState("Brand");
  const [make, setmake] = useState(false);
  const [price, setprice] = useState("Price");
  const [amount, setamount] = useState(false);
  const [empty, setempty] = useState(false);
  const [loading, setloading] = useState(false);
  const [carsList, setcarsList] = useState([]);

  useEffect(() => {
    setloading(true);
    try {
      db.collection("Products")
        .limit(10)
        .get()
        .then((collections) => {
          const cloths = collections.docs.map((cloths) => {
            return { ...cloths.data(), id: cloths.id };
          });
          setcarsList(cloths);
          console.log(cloths);
          setloading(false);
          if (cloths.length === 0) {
            setempty(true);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(carsList)

  return (
    <div className="relative bg-black">
      <img src={Prime} alt="Prime Rides" className="pt-[4rem]"/>
      <div className="flex flex-col items-center">
      <div className="w-[90vw]">
            <Search />
          </div>
      </div>

      <div className="pb-[1rem]">
        <h2 className="text-[#c2bebf] p-[1rem]">Find cars by</h2>
        <div className="flex flex-col mx-[2rem]">
          <div>
            <div
              onClick={() => {
                setmake(!make);
              }}
              className="flex  px-[1rem] w-[50vw] justify-between border-[2px] filter py-[0.5rem] items-center bg-white"
            >
              <p>{brand}</p>
              <p>&#8964;</p>
            </div>

            {make ? (
              <div className=" mt-[1rem] text-black font-bold bg-[#c2bebf] pt-[1rem] rounded-[10px]">
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Acura");
                    navigate("/Brand/Acura");
                  }}
                  className="w-[100%] text-center pb-[0.5rem]"
                >
                  Acura
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Audi");
                    navigate("/Brand/Audi")
                  }}
                  className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                >
                  Audi
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("BMW");
                    navigate("/Brand/BMW")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  BMW
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Ford");
                    navigate("/Brand/Ford")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  Ford
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Honda");
                    navigate("/Brand/Honda")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  Honda
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Hyundai");
                    navigate("/Brand/Hyundai")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  Hyundai
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Infiniti");
                    navigate("/Brand/Infiniti")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  Infiniti
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Kia");
                    navigate("/Brand/Kia")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  Kia
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Land Rover");
                    navigate("/Brand/Land Rover")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  Land Rover
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Lexus");
                    navigate("/Brand/Lexus")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  Lexus
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Mercedes Benz");
                    navigate("/Brand/Mercedes Benz")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  Mercedes Benz
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Peugeot");
                    navigate("/Brand/Peugeot")
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  Peugeot
                </p>
                <p
                  onClick={() => {
                    setmake(false);
                    setbrand("Toyota");
                    navigate("/Brand/Toyota")
                  }}
                  className="w-[100%] text-center py-[0.5rem]"
                >
                  Toyota
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <div
              onClick={() => {
                setamount(!amount);
              }}
              className="flex w-[50vw] my-[1rem] px-[1rem] justify-between filter border-[2px] py-[0.5rem] items-center bg-white"
            >
              <p>{price}</p>
              <p>&#8964;</p>
            </div>

            {amount ? (
              <div className="flex flex-col mt-[1rem] bg-[#c2bebf] pt-[1rem] rounded-[10px]">
                <p
                  onClick={() => {
                    setamount(false);
                    setprice("<2 M");
                    navigate("/Less2M");
                  }}
                  className="w-[100%] text-center pb-[0.5rem]"
                >
                  {"< 2M"}
                </p>
                <p
                  onClick={() => {
                    setamount(false);
                    setprice("2-3 M");
                    navigate("/TwoToThreeM");
                  }}
                  className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                >
                  2-3 M
                </p>
                <p
                  onClick={() => {
                    setamount(false);
                    setprice("3-4 M");
                    navigate("/ThreeToFourM");
                  }}
                  className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                >
                  3-4 M
                </p>
                <p
                  onClick={() => {
                    setamount(false);
                    setprice(">4 M");
                    navigate("/Greater4M");
                  }}
                  className="w-[100%] text-center py-[0.5rem]"
                >
                  {">4 M"}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>{" "}
        </div>
      </div>
      <div className="pb-[1rem]">
        <div className="flex justify-between p-2 px-[1.5rem] mb-[1rem] rounded-[20px] text-black font-bold bg-[#c2bebf] heading">
          <h2>Featured Cars</h2>
          <p
            onClick={() => {
              navigate("/All-Cars");
            }}
          >
            See All
          </p>
        </div>
        <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">
        {loading && <LoadingSpinner />}
      </p>
      <p className="w-[100%] text-[#c2bebf] text-center">
        {empty && "Please Check Your Network Connection"}
      </p>

      <div className="flex lg:flex flex-wrap gap-3 justify-center mb-[1rem]">
        {carsList?.map((post, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                //   navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
              }}
              className="flex max-w-4xl"
            >
              <TopCard post={post} />
            </div>
          );
        })}
      </div>
      </div>
      <Footer/>
    </div>
  );
}
