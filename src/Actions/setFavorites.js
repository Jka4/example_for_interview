const setFavorites = (heroId, favorites) => {
  return (dispatch) => {
    const alreadyInFavorite = favorites?.includes(heroId);
    let newArr = [];

    if (alreadyInFavorite) {
      let newFav = favorites;
      let nameIndex = newFav.indexOf(heroId);

      newFav.splice(nameIndex, 1);
      newArr = newFav;
    } else {
      newArr = [...favorites, heroId];
    }

    dispatch({ type: 'ADD_TO_FAVORITES', payload: newArr });
  };
};

export { setFavorites };
