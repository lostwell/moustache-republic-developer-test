const resolveSize = (sizes) => {
    const sizesArray = Object.entries(sizes);
    for (const [key, value] of sizesArray){
        if(value) return key;
    }
    return '';
}

const resolveQuantity = (products) => {
    return products.reduce((total, curr) => (total + curr.quantity), 0);
}

export {
    resolveSize,
    resolveQuantity,
};