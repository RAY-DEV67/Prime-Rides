import { getDoc,getDocs, collection, doc, addDoc, where, query, deleteDoc } from "firebase/firestore";
// import ImageSlider, { Slide } from "react-auto-image-slider";
import db from "../config/firebase";
import { useState, useEffect, useContext } from "react";
// import { Topnav } from "../components/topnav";
// import { Footer } from "../components/footer";
// import InfiniteScroll from "react-infinite-scroll-component";
import { useParams, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { TopCard } from "../components/topcard";
import LoadingSpinner from "../components/loadingspinner";



export function BuyProduct() {
  const [user] = useAuthState(auth);
  const {id} = useParams()
  const {collections} = useParams()
  const {product} = useParams()
  const navigate = useNavigate();
  
//   const setcart = useContext(SetAddCart);
//   const cart = useContext(AddCart);

 
  const [buyProduct, setbuyProduct] = useState(null);
  const [clothsList, setclothsList] = useState([]);
  const [saves, setsaves] = useState([]);
  const [error, seterror] = useState();

  useEffect(() => {
    const topRef = doc(db, collections, id);
    getDoc(topRef).then((doc) => {
      setbuyProduct(doc.data());
    });
  }, [id, collections]);

  console.log(product)

  useEffect(() => {
   try{
    db.collection("Products")
    .where("category", "==", product)
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        // const lastDoc = collections.docs[collections.docs.length - 1];
        setclothsList(cloths);
      });
   } catch (err) {
    seterror(err)
    console.log(err)
   }
  }, [product]);
  
  const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value);
  };

  const images = [buyProduct?.images, buyProduct?.images2, buyProduct?.images3]
const [index, setindex] = useState(0);

useEffect(() => {
    const timer = setInterval(() => {
        setindex((index + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
}, [index, images.length]);

console.log(window.location.pathname)

// const phone = 09016011178


  return (
    <div className="pt-[4rem] bg-[#000000] text-white productfont">
      {/* <Topnav /> */}
     {buyProduct ? <div>
     <div className="flex justify-center relative mt-[2rem] mx-[0.5rem]">
      <img alt="img2" src={images[index]} className="object-contain topcard rounded-[1rem]" />
         </div>   


        

      <div className="buyProductBorder mb-[1rem] mt-[1rem] mx-[1rem] pb-[1rem] text-left">
        <p className="text-2xl font-bold mb-[0.5rem]">{buyProduct?.title}</p>
        <div className="flex justify-left">
          <p className="ml-[0.2rem] text-xl">{formatCur(buyProduct?.price , 'en-NG' , "NGN")}</p>
        </div>
      </div>

      <div className="mx-[1rem] text-left">
        {/* <h1 className="text-2xl mb-[2rem]">Product Details:</h1> */}
        <div className="mb-[0.3rem]">
          <p className="font-bold mb-[0.5rem]">Brand:<span className="font-normal"> {buyProduct?.category}</span></p>
          {/* <p> {buyProduct?.description}</p> */}
        </div>
        <div className="mb-[0.3rem]">
          <p className="font-bold mb-[0.5rem]">Condition:<span className="font-normal"> {buyProduct?.condition}</span></p>
          {/* <p> {buyProduct?.description}</p> */}
        </div>
        <div className="mb-[1rem]">
          <p className="font-bold mb-[0.5rem]">Description / Product info:</p>
          <p> {buyProduct?.description}</p>
        </div>
              </div>

              <div className="flex flex-col items-center">
              
              <a href= "https://wa.link/2eeyct" target="_Blank" className="flex border-[#c2bebf] border bg-[#c2bebf] py-[0.2rem] lg:py-[0.8rem] lg:w-[20%] justify-center w-[40%] items-center text-black">
                <button className="mr-[0.3rem]">Whatsapp</button>
                <svg fill="#000000" width="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path></g></svg>
              </a>
              </div>

              <div className="flex flex-col items-center mt-[1rem]">
              <a href="https://twitter.com/PrimeRides_ng" target="_blank" className="lg:py-[0.8rem] lg:w-[20%] flex border-[#c2bebf] border bg-[#c2bebf] text-black py-[0.2rem] justify-center w-[40%] items-center">
                <button className="mr-[0.3rem]">Twitter</button>
              <svg width="20px" className="ml-[0.5rem]" fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1643.825 518.606c-14.457 11.294-22.588 28.8-21.685 47.096.565 16.377 1.017 32.753 1.017 49.355 0 530.372-373.497 1079.153-998.513 1079.153-122.203 0-242.598-24.282-355.765-71.153 136.433-22.588 266.428-82.447 374.965-173.816 17.957-15.247 24.62-39.868 16.828-62.005-7.793-22.136-28.574-37.157-52.179-37.722-105.374-2.146-200.81-62.682-256.376-157.214 38.06-1.13 79.059-7.116 109.779-16.038 24.847-7.228 41.562-30.381 40.771-56.132-.903-25.863-19.2-47.774-44.499-53.308-112.15-24.282-194.71-116.781-222.607-243.84 32.076 6.438 62.344 8.47 79.06 8.922 24.62 2.711 47.322-14.456 55.453-38.06 8.02-23.492-.226-49.582-20.442-64.151-78.042-56.245-161.619-161.167-161.619-286.42 0-30.832 3.84-61.326 11.181-90.804 195.163 217.186 461.478 348.31 743.83 363.558 18.975 1.016 34.674-6.438 46.08-19.765 11.408-13.327 15.926-31.398 12.312-48.565-5.648-25.637-8.471-52.178-8.471-79.058 0-188.951 141.063-342.664 314.428-342.664 87.19 0 168.283 37.835 228.141 106.73 13.327 15.36 34.334 22.475 54.212 18.183 28.687-6.099 56.922-13.779 84.706-23.153-16.49 16.715-34.673 31.624-54.438 44.386-22.25 14.343-31.51 42.014-22.475 66.861s34.56 39.868 60.31 36.593c14.683-1.92 29.252-4.179 43.709-7.002-18.297 17.731-37.497 34.447-57.713 50.033m261.685-199.68c-16.716-18.636-43.596-23.83-66.41-13.214-4.066 1.92-8.132 3.84-12.31 5.76 17.054-30.269 30.946-62.683 40.997-96.678 6.777-22.588-1.242-46.984-20.103-61.214-18.974-14.118-44.5-15.247-64.49-2.485-58.277 37.384-120.96 64.828-186.466 82.108-78.268-76.8-181.948-120.17-289.355-120.17-235.595 0-427.37 204.424-427.37 455.606 0 9.487.227 18.974.791 28.348C626 564.008 390.517 424.977 226.64 208.469c-11.52-15.247-30.155-23.04-49.242-22.136-19.2 1.468-36.367 12.536-45.516 29.477-37.157 68.894-56.809 147.614-56.809 227.464 0 86.626 28.687 165.007 70.25 230.739-19.426 9.035-32.98 28.574-32.98 51.388v5.195c0 139.821 49.808 261.91 133.497 344.47-9.035 2.937-17.28 8.246-23.943 15.36a56.566 56.566 0 0 0-12.537 54.326c40.772 136.997 137.788 242.145 258.41 289.807-122.88 69.571-268.688 97.129-404.443 80.753-26.541-3.953-50.485 11.858-59.633 36.028-9.261 24.282-.677 51.84 20.781 66.522 179.69 123.784 387.276 189.29 600.17 189.29 695.717 0 1111.454-606.156 1111.454-1192.095 0-8.583-.113-17.054-.339-25.524 68.555-57.149 127.51-125.365 175.737-203.069 13.214-21.345 10.842-48.903-5.986-67.538" fill-rule="evenodd"></path> </g></svg>
              </a>
              </div>
</div>  : <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">
                  <LoadingSpinner/>
                  </p> }
  

      <h2 className="m-[2rem] text-left text-2xl lg:text-4xl text-white">Similar Products:</h2>
<div className="flex lg:flex flex-wrap gap-3 justify-center pb-[1rem] bg-[#000000]">
    
{clothsList.map((post, index) => {
            return (
              <div
              key={index}
              onClick={() => {
                navigate(`/Buy/Products/${post.category}/${post.id}`)
              }}
              className=""
            >
                <TopCard post={post} />
              </div>
            );
          })}
</div>
      {/* <Footer /> */}
    </div>
  );
}