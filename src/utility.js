  function getSortedData(productList, sortBy) {
    if (sortBy === "HIGH_TO_LOW")
      return productList.sort((a, b) => b.price - a.price);
    if (sortBy === "LOW_TO_HIGH")
      return productList.sort((a, b) => a.price - b.price);
    return productList;
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

 export {getSortedData,getFilteredData,getPriceRange,getRatings}