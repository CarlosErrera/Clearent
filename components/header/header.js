import store from '../../store/store'

export default{
	data(){
		return{

		}
	},

	methods:{
		showflats(){
			return store.commit('getFlats');
		},
		showrenting(){
			return store.commit('getRenting');

		},
		showmyclients(){
			return store.commit('getMyclients');
		}
		// showflats(){
		// 	this.isflats=true;
		// 	this.isrent=false;
		// 	this.ismycl=false;			
		// },
		// showrenting(){
		// 	this.isflats=false;
		// 	this.isrent=true;
		// 	this.ismycl=false;
		// },
		// showmyclients(){
		// 	this.isflats=false;
		// 	this.isrent=false;
		// 	this.ismycl=true;
		// }

		// showflats(){
			
		// 	let element = document.getElementById("underline");
    	// 	element.style.marginLeft="0px";							
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