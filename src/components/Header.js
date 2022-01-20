import cx from "classnames";
import MiniCartItem from "./MiniCartItem";

import { toggleMiniCart } from "../store/action";
import { resolveQuantity } from "../util/util";

const AppHeader = (props) => {
    const { appState, dispatch } = props;
    const { cart, isMiniCartToggled } = appState;

    return (
        <nav className="App__Header">
            <button 
                className={cx("MiniCart__Button", { active: isMiniCartToggled })}
                onClick={() => { dispatch(toggleMiniCart()) }}
            >
               <span className="MiniCart__Icon"/>
               <span className="MiniCart__Text">My Cart</span>
               <span>( {resolveQuantity(cart)} )</span>
            </button>

            <div className={cx("MiniCart__Dropdown", { active: isMiniCartToggled })}>
                {
                    cart.map((item)=>{
                        return (
                            <MiniCartItem key={item.key} product={item}/>
                        );
                    })
                }
            </div>
        </nav>
    );
}

export default AppHeader;