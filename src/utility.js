  function getSortedData(productList, sortBy) {
    let temp=productList;
    if (sortBy === "HIGH_TO_LOW")
      return temp.sort((a, b) => b.price - a.price);
    if (sortBy === "LOW_TO_HIGH")
      return temp.sort((a, b) => a.price - b.price);
    return temp;
  }
  function getFilteredData(
    productList,
    { showFastDelivery, showInventoryAll}
  ) {
    return productList
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
  }

  function getPriceRange(productList, state) {
        if(state.showPrice !== 0)
        return [...productList].filter((product) => product.price <= state.showPrice);
      return productList
  }
function getRatings(productList,state){
    if (state.showRating === "RATING_FOUR")
    return productList.filter((item) => item.ratings >= 4);
  else if (state.showRating === "RATING_THREE")
    return productList.filter((item) => item.ratings >= 3 && item.ratings <= 5);
  else if (state.showRating === "RATING_TWO")
    return productList.filter((item) => item.ratings >=2&& item.ratings <= 5);
  else return productList;
}
function getCategory (productList, state) {
   
    const categoryArray = state.showCategory;
    return categoryArray.length === 0
    ? productList
    : [...productList].filter((product) =>
    categoryArray.some((brandName) => brandName === product.category)
      );
};
 export {getSortedData,getFilteredData,getPriceRange,getRatings,getCategory}