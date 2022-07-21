import { useDispatch, useSelector } from 'react-redux';
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { Footer, Img, ProductCartContainer } from "./product-card.style";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from '../../store/cart/cart.selector';
const ProductCard = ({product})=>{
	const {name, price, imageUrl }=product;
	const cartItems = useSelector(selectCartItems)
	const dispatch = useDispatch();
	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
	return(
		<ProductCartContainer>
			<Img src={imageUrl} alt={`${name}`}/>
			<Footer>
				<span className="name">{name}</span>
				<span className="price">{price}$</span>
				<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
					Add to cart
				</Button>
			</Footer>	
		</ProductCartContainer>
	)
}

export default ProductCard;