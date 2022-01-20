import cx from "classnames";
import { setViewedProduct, addToCart } from "../store/action";
import { resolveSize } from "../util/util";
 
 const ProductPage = (props) => {
    const { appState, dispatch } = props;
    const { viewedProduct, invalidAddition } = appState;
    const {
        imageUrl,
        name,
        price,
        sizes,
        description,
    } = viewedProduct;

    const selectedSize = resolveSize(sizes);

    const handleSizeButton = (sizeString) => {
        const result = viewedProduct;
        const initSizes = Object.keys(sizes).reduce((total, curr) => ({...total, [curr]: false}), {})
        result.sizes = {
            ...initSizes,
            [sizeString]: !result.sizes[sizeString],
        }
        dispatch(setViewedProduct(result))
    }

    return (
        <div className="ProductPage__Container">
            <div className="ProductPage__ImageWrapper">
                <img className="ProductPage__Image" src={imageUrl} alt={name}/>
            </div>
            <div className="ProductPage__Info">
                <div className="Info_Name">
                    <h2>{name}</h2>
                </div>
                <div className="Info__Price">
                    <strong>&#36;{price}</strong>
                </div>
                <div className="Info__Desc">
                    <p>{description}</p>
                </div>
                <div className="Info__Size">
                    <div className="Size__Label">
                        Size
                        <span className="Symbol__Required">*</span>
                        <span className="Size__Indicator">
                            {
                                invalidAddition
                                ? <span className="Symbol__Required">Please select a size</span>
                                : (resolveSize(sizes))
                            }
                        </span>
                    </div>
                    <div className="Size__ButtonWrapper">
                        {
                            Object.entries(sizes).map((size) => (
                                    <button
                                        key={size[0]}
                                        className={cx('Size__Button', 'toggle', { active: size[1] })}
                                        onClick={()=>{ handleSizeButton(size[0]) }}
                                    >
                                        <span className="Size__Symbol">{size[0]}</span>
                                    </button>
                                )
                            )
                        }
                    </div>
                </div>
                <div className="Info__Button">
                    <button onClick={() => { dispatch(addToCart(viewedProduct)) }}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;