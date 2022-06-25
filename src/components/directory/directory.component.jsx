import DirectoryItem from "../directory-item/directory-item.component"
import { DirectoryContainer } from "./directory.styles"
// import vikingImg from '../../assets/Small-designs/viking.jpg';
// import firstWallImg from '../../assets/Wall-designs/first-wall.jpg';
// import accessoriesImg from '../../assets/Accessories/plastic-pvc.jpg'; 
// import comingSoonImg from '../../assets/Sketches/sketch-home.jpg';
import {scketches, viking, workspaceWall, plasticPvc } from '../../shop-data';
const categories = [
	{
		id:1,
		title:'small designs',
		imageUrl: viking,
		route:'shop/small-designs'
	},
	{
		id:2,
		title:'wall designs',
		imageUrl:workspaceWall,
		route:'/shop/wall-designs'
	},
	{
		id:3,
		title:'accessories',
		imageUrl: plasticPvc,
		route:'/shop/accessories',
	},
	{
		id:4,
		title:'coming soon',
		imageUrl:scketches,
	}
]

const Directory =()=>{
	return(
		<DirectoryContainer>
			{categories.map((category)=>(
				<DirectoryItem key={category.id} category={category}/>
			))}
		</DirectoryContainer>
	)
}

export default Directory;