import { resolveSize } from "../util/util";

const MiniCartItem = (props)=> {
    const {
        imageUrl,
        name,
        quantity,
        price,
        sizes,
    } = props.product;

    return (
        <div className="MiniCart__Item">
            <div className="CartItem__ImageWrapper">
                <img className="CartItem__Image" src={imageUrl} alt={name}/>
            </div>
            <div className="CartItem__Info">
                <div>{name}</div>
                <div>
                    <span>{quantity}x </span>
                    <strong>&#36;{price}</strong>
                </div>
                <div>
                    Size: <span className="Size__Symbol">{resolveSize(sizes)}</span>
                </div>
            </div>
        </div>
    );
}

export default MiniCartItem;