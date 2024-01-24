import { filterData } from "../utils/helper";

const SearchBtn=()=>{
    const [searchText, setSearchText] = useState("");

    return(
        <div>
        <input
          type="searchBox"
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            //Filter the list
            const data = filterData(allRestuarantListData, searchText);

            //update the state
            setFilteredRestaurantListData(data);
          }}
        >
          Search
        </button>
      </div>
    )
}

export default SearchBtn;

