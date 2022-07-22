import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Outlet} from 'react-router-dom'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.actions";
const Navigation = ()=>{
	const dispatch = useDispatch();
	const currentUser= useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen)
	const signOutUser = ()=> dispatch(signOutStart());
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
					{
						currentUser ? (
							<NavLink as='span' onClick={signOutUser}>
								Sign Out
							</NavLink>
						) : (
							<NavLink to='/auth'>
								Sign In
							</NavLink>
						)
					}
					<CartIcon/>
				</NavLinks>
				{isCartOpen && <CartDropdown/>}
			</NavigationContainer>
			<Outlet/>
		</Fragment>
	)
}

export default Navigation;