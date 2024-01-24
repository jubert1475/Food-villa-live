//optional chaining {.?}
//const CardItem = ({restuarant}) this is known as object destructuring so we dont need to use word props.so we can write restuarant.info.name
//const {name,cuisines,cloudinaryImageId,avgRating}= restuarant.info; //-- this is how we can again destructure the data.so now we can write only name
import { IMG_CDN_URL } from "./Config";

const CardItem = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
    return (
      <div className="card-item">
        <img
          className="img"
          src={
            IMG_CDN_URL + 
            cloudinaryImageId
          }
        />
        <div className="res-container">
        <h2 className="res-name">{name}</h2>
        <h4 className="rating">{avgRating} stars</h4>
        <h3 className="res-cuisine">{cuisines.join(",")}</h3>
    

        </div>
        
      </div>
    );
  };

  export default CardItem;