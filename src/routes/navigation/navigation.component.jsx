import { Fragment, useContext } from "react";
import {Outlet} from 'react-router-dom'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from "../../contexts/cart.context";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";
const Navigation = ()=>{
	const {isCartOpen} = useContext(CartContext);
	return(
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					Decowallity
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>
						Shop
					</NavLink>
					<NavLink to='/auth'>
						Sign In
					</NavLink>
					<CartIcon/>
				</NavLinks>
				{isCartOpen && <CartDropdown/>}
			</NavigationContainer>
			<Outlet/>
		</Fragment>
	)
}

export default Navigation;