import { CartIconContainer, ItemCount, ShopingIcon } from "./cart-icon.styles"

const CartIcon = ()=>{
	return (
		<CartIconContainer>
			<ShopingIcon/>
			<ItemCount>0</ItemCount>
		</CartIconContainer>
	)
}
export default CartIcon;