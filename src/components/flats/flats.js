export default{
	data(){
		return{
			modalMap:false,
			modalWindow:false,
			rooms:[
				{ value:1, state:false },
				{ value:2, state:false },
				{ value:3, state:false },
				{ value:4, state:false },
				{ value:5, state:false }
			],
			flats:[
					{
						id:1,
						date:'13.07.2017',
						address:'Карла Маркса 48',
						room_count:2,
						price:20000,
						tel:71234567890,
						photo_count:5
					},
					{
						id:2,
						date:'13.07.2017',
						address:'Карла Маркса 48',
						room_count:4,
						price:20000,
						tel:71234567890,
						photo_count:5
					},
					{
						id:3,
						date:'13.07.2017',
						address:'Карла Маркса 48',
						room_count:3,
						price:20000,
						tel:71234567890,
						photo_count:5
					}
													
				]
		}
	},
	methods:{
			showModalWindow(){
				this.modalWindow = true;
			},
			closeModalWindow(){
				this.modalWindow = false;
			},
			showMap(){
				// 
				this.modalMap = true;
			},
			closeMap(){
				this.modalMap = false;
				// document.getElementById('modalmap').style.display = "none";				
			},
			escapeEventListener(event){
				if(event.keyCode === 27 && this.modalOpen){
					this.modalOpen = false 
				}
			}
	},
	creadted(){
		document.addEventListener('keyup', this.escapeEventListener);
	},
	destroyed(){
		document.addEventListener('keyup', this.escapeEventListener);
	}
}
