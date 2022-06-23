import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd)=>{
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if(existingCartItem){
		return cartItems.map((cartItem)=>
		cartItem.id === productToAdd.id
		? {...cartItem, quantity: cartItem.quantity + 1}
		: cartItem
		);
	}
	return [...cartItems,{...productToAdd, quantity: 1}];
};


export const CartContext= createContext({
	isCartOpen:false,
	setIsCartOpen:()=>{},
	cartItems:[],
	addItemToCart:()=>{},
	removeItemFromCart:()=>{},
	clearItemFromCart:()=>{},
	cartCount:0,
	cartTotal:0,
});