import { IMG_CDN_URL } from "./Config";
import  useRestuarantMenu  from "../utils/useRestuarantMenu";
import {useParams} from "react-router-dom"

const RestuarantMenu = () => {
  const  params = useParams();
  const {id}=params;
  const restaurant=useRestuarantMenu(id);
  return (
    <>
    
      <div>
        <h1>Restaurant ID : {restaurant?.id}</h1>
        <h2>Restaurant Name: {restaurant?.name}</h2>
        <img
          className="Resto_img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
        <h2>Address: {restaurant?.areaName}</h2>
      </div>
      <div>
        <h2>menu:</h2>
      </div>
    </>
  );
};

export default RestuarantMenu;
