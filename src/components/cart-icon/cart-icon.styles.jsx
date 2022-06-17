import styled from "styled-components";
import {ReactComponent as ShoppingSvg} from '../../assets/shopping-bag.svg';

export const ShopingIcon = styled(ShoppingSvg)`
	width: 30px;
	height: 30px;
`
export const CartIconContainer = styled.div`
	width: 50px;
	height: 50px;
	position: relative;
	display:flex ;
	align-items:center ;
	justify-content:center ;
	cursor: pointer;
	`
export const ItemCount = styled.span`
position:absolute ;
	font-size:14px ;
	font-weight: bold;
	bottom: 12px;
`
