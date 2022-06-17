import DirectoryItem from "../directory-item/directory-item.component"
import { DirectoryContainer } from "./directory.styles"
import vikingImg from '../../assets/Small-designs/viking.jpg';
import firstWallImg from '../../assets/Wall-designs/first-wall.jpg';
import accessoriesImg from '../../assets/Accessories/plastic-pvc.jpg'; 
import comingSoonImg from '../../assets/Sketches/sketch-home.jpg';
const categories = [
	{
		id:1,
		title:'small designs',
		imageUrl: vikingImg,
	},
	{
		id:2,
		title:'wall designs',
		imageUrl:firstWallImg,
	},
	{
		id:3,
		title:'accessories',
		imageUrl:accessoriesImg,
	},
	{
		id:4,
		title:'coming soon',
		imageUrl:comingSoonImg,
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