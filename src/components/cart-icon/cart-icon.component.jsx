import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CartIconContainer, ItemCount, ShopingIcon } from "./cart-icon.styles"
import { selectIsCartOpen,selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
const CartIcon = ()=>{
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);
	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShopingIcon/>
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}
export default CartIcon;