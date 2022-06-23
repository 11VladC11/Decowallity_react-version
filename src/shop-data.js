import guitar from './assets/Small-designs/1gr.jpg';
import hflower from './assets/Small-designs/1hr.jpg';
import thearts from './assets/Small-designs/2hr.jpg';
import dragon from './assets/Small-designs/dragon.jpg';
import phoenixOne from './assets/Small-designs/phoenix.jpg';
import viking from './assets/Small-designs/viking.jpg';
import eagle from './assets/Small-designs/vultur.jpg';
import wolf from './assets/Small-designs/wr.jpg';
import phoenixTwo from './assets/Small-designs/phoenix.v2.jpg';
import workspaceWall from './assets/Wall-designs/first-wall.jpg';
import bullBear from './assets/Wall-designs/biciara3.jpg';
import worldMap from './assets/Wall-designs/world-map.jpg';
import dreamerWall from './assets/Wall-designs/second-wall.jpg';
import adhesiveTape from './assets/Accessories/bandadublsimp.webp';
import siliconTape from './assets//Accessories/bandadublasilic.jpg';
import plasticPvc from './assets/Accessories/plastic-pvc.jpg';
const SHOP_DATA =[
	{
		title:'Small-designs',
		items:[
			
			{
				id:1,
				name:'Phoenix',
				imageUrl:phoenixOne,
				price: 20
			},
			{
				id:2,
				name:'Viking',
				imageUrl:viking,
				price: 25
			},
			{
				id:3,
				name:'Eagle',
				imageUrl:eagle,
				price: 30
			},
			{
				id:4,
				name:'Phoenix',
				imageUrl:phoenixTwo,
				price: 25
			},
			{
				id:5,
				name:'Wolf',
				imageUrl:wolf,
				price: 25
			},
			{
				id:6,
				name:'Guitar',
				imageUrl: guitar,
				price: 20
			},
			{
				id:7,
				name:'Hearth-flower',
				imageUrl:hflower,
				price: 15
			},
			{
				id:8,
				name:'Two hearts',
				imageUrl:thearts,
				price: 15
			},
			{
				id:9,
				name:'Dragon',
				imageUrl:dragon,
				price: 40
			},
		]
	},
	{
		title:'Wall-designs',
		items:[
			{
				id:10,
				name:'Design for a workspace-wall',
				imageUrl:workspaceWall,
				price: 200
			},
			{
				id:11,
				name:'Bull and Bear',
				imageUrl:bullBear,
				price: 125 
			},
			{
				id:12,
				name:'World map',
				imageUrl:worldMap,
				price: 150
			},
			{
				id:13,
				name:'Dreamer-wall',
				imageUrl:dreamerWall,
				price: 150
			},
		]
	},
	
	{
		title:'Accessories',
		items:[
			{
				id: 14,
				name:'Adhesive tape',
				imageUrl:adhesiveTape,
				price: 3
			},
			{
				id:15,
				name:'Silicon adhesive tape',
				imageUrl:siliconTape,
				price: 7 
			},
			{
				id:16,
				name:'Plastic Pvc',
				imageUrl:plasticPvc,
				price: 20
			},
		]
	},
]

export default SHOP_DATA;