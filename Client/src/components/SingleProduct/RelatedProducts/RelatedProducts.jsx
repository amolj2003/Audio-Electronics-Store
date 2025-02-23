import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products"
const RelatedProducts = ({productId,categoriesId}) => {
    
    const{data} =useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters
    [categories][id]=${categoriesId}&pagination[start]=0&pagination[limit]=4`)

    return <div><Products products ={ data} headingText="Related Products"/></div>;
};

export default RelatedProducts;
