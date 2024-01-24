//Search Function
export function filterData (allRestuarantListData, searchText) {
    const FilterData = allRestuarantListData.filter((restuarant) => 
    restuarant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
   
    return FilterData;
  }