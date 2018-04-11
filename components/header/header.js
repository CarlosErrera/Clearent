
//import store from "../../store/store";
export default{
	data(){
		return{

		}
	},
	methods:{
		showflats(){
			return this.$store.commit('changeFlats');
		},
		showrenting(){
			return this.$store.commit('changeRenting');
		},
		showmyclients(){
			return this.$store.commit('changeMycl');
		}
	},
	computed:{
		flats(){
			return this.$store.getters.flats
		},
		rent(){
			return this.$store.getters.renting
		},
		mycl(){
			return this.$store.getters.mycl
		}
		// showflats(){
			
		// 	let element = document.getElementById("underline");
		// 	console.log(element);
    	// 	// element.style.marginLeft="0px";							
    	// },

		// showmyclients(){	
			
		// 	let element = document.getElementById("underline");
	    // 	element.style.marginLeft="320px";		
	 	// },
		// showrenting(){	
				
		// 	let element = document.getElementById("underline");
	    // 	element.style.marginLeft="160px"	
	    // }
	}
	


}