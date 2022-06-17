import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";


const DirectoryItem = ({category})=>{
	const {title, imageUrl} = category;
	return(
		<DirectoryItemContainer>
			<BackgroundImage imageUrl={imageUrl}/>
			<Body>
			<h2>{title}</h2>
			<p>{title !== 'coming soon' && 'Shop Now'}</p>
			</Body>
		</DirectoryItemContainer>
	)
}

export default DirectoryItem;