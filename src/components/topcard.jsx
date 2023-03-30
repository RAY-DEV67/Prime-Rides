import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export function TopCard(props) {
  const { post } = props;

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
 
  const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  };

  return (
    <div className="topcard lg:w-[25vw] w-[42vw] border text-white border-[#2099fe] rounded-[10px]">
      <div className="relative">
        <img
          src={post.images}
          alt="Product"
          className="w-[44vw] h-[200px] bg-white object-cover rounded-[10px]"
          onClick={() => {
            // setProductsId(post.id);
            navigate(`/Buy/Products/${post.category}/${post.id}`);
            // setProducts("Top-Shoes");
          }}
        />
      </div>

      <div className="text-left mx-[0.5rem] mt-[0.5rem] flex justify-between">
        <h1>{post.title}</h1>
      </div>
      <div className="mx-[0.5rem] text-xs mt-[0.5rem] border border-[#2099fe] w-[60%] text-center bg-[#2099fe]">
        <h2>{post.model}</h2>
      </div>
      <div className="text-left m-[0.5rem]">
        <h1 className="font-bold mt-[0.5rem]">
          {formatCur(post.price, "en-NG", "NGN")}
        </h1>
      </div>
    </div>
  );
}