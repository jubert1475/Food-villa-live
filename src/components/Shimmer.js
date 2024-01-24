const Shimmer = () => {
  return (
    <div className="restaurantList">
      {Array(10)
        .fill("")
        .map((e, index) => 
          <div key= {index} className="card-item_s"></div>
        )}
    </div>
    //<h1>Shimmer loading</h1>
  );
};
export default Shimmer;
