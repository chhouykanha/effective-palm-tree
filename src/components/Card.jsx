import { Link } from "react-router";
function Card({title, image, price, url}) {
  return (
    <div className="border border-gray-200 p-2">
      <Link to={url} className="h-[300px] p-4 block">
        <img
          src={image}
          className="w-full h-full"
          alt=""
        />
      </Link>
      <p>{title}</p>
      <p>${price}</p>
    </div>
  );
}

export default Card;
