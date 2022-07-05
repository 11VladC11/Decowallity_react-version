import { useState, useEffect, Fragment } from "react";
import {useParams} from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoryTitle,CategoryContainer} from './category.style';

const Category =()=>{
	const {category}= useParams();
	const categoriesMap= useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category])
	useEffect(()=>{
		setProducts(categoriesMap[category]);
	},[category, categoriesMap]);

	return (
		<Fragment>
			<CategoryTitle>{category}</CategoryTitle>
			<CategoryContainer>
			{
				products &&
				products.map((product)=>(
					<ProductCard key={product.id} product={product}/>
				))}
			</CategoryContainer>
		</Fragment>
	)
}

export default Category