const goalList = () => {
    const array = ['test'];
    const getArray = () => array;
    const addToArray = (object) => array.push(object)
    return{goalList, getArray, addToArray}
}

export { goalList }