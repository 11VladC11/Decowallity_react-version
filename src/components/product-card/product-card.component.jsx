import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { Footer, Img, ProductCartContainer } from "./product-card.style";

const ProductCard = ({product})=>{
	const {name, price, imageUrl }=product;
	const {addItemToCart} = useContext(CartContext);
	const addProductToCart = () => addItemToCart(product);
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