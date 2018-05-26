import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{
	data(){
		return{
			modalMap:false,
			ModalTel:false,
			isActiveModal:false,
			selected1:false,
			selected2:false,
			selected3:false,
			selected4:false,
			selected5:false,
			costFrom:'',
			costTo:''
	
		}
	},
	components: {
		swiper,
		swiperSlide
	},
	computed:{
		Flats(){
			return this.$store.getters.flatsResult
			// return this.$store.getters.getOneRoom
		}
		
	},
	methods:{
			showModalAbout(id){
				//search id on Vuex store
				this.$store.commit('sendDataToAboutWindow', id);
				this.isActiveModal = true;

			},
			closeModalAbout(){
				this.isActiveModal = false;
			},
			showMap(){
				this.modalMap = true;
			},
			closeMap(){
				this.modalMap = false;				
			},
			showModalTel(){
				this.ModalTel = true;
			},
			closeModalTel(){
				this.ModalTel = false;
			},
			getOneRoom(selected, room){
				//console.log(selected);
				if(selected){return this.$store.commit('getOriginalFlats')}	
				else{ return this.$store.commit('getOneRoom', room)}
			},
			clearAllFilters(){
				this.selected1=false
				this.selected2=false
				this.selected3=false
				this.selected4=false
				this.selected5=false
				return this.$store.commit('getOriginalFlats')
			}
			// getOriginalFlats(){
			// 	return this.$store.commit('getOriginalFlats')
			// }

			


	}

}
