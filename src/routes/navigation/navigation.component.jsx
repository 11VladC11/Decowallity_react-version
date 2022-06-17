import { Fragment } from "react";
import {Outlet} from 'react-router-dom'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";
const Navigation = ()=>{
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
			</NavigationContainer>
			<Outlet/>
		</Fragment>
	)
}

export default Navigation;