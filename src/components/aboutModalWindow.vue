<template>
<transition name="fade">
<div class="modalwindowAbout" v-if="showModal" v-for="item in About" >	
<div class="wrapper_modal_photo" id="modal">
	
	<button class="btn btn_close_el" v-on:click="emitClose()"></button>
	<div class="photo">
		<div class="photo_header">
			<div class="photo_data">
				<span class="desc">Дата:</span>
				
				<span class="desc_text">{{ item.date }}</span>
				
			</div>

			<div class="photo_wrapper_roomsAndCost">
				<div class="roomsAndCost_rooms">
					<span class="desc">Комнаты:</span>
					
					<span class="desc_text">{{ item.room_count}}</span>	
				</div>

				<div class="roomsAndCost_cost">{{ item.price | toRUB(item.price)}}</div>
			</div>
			<div class="photo_address">
				<span class="desc">Адрес:</span>
				
				<span class="desc_text">{{ item.address}}</span>
			</div>
			<div class="photo_tel">
				<span class="desc">Телефон</span>
				<span class="desc_text">{{ item.tel }}</span>
				
			</div>
		</div>

		<div class="photo_content">


			<div class="content_template"></div>
			

			<div class="content_menu">

				<!-- <div class="menu_btn_down">
					<i class="arrow_down"></i>
				</div>	 -->
				
				<div class="menu_block">

				</div>
						
			</div>

		</div>

		<div class="photo_footer">
		</div>
	</div>	
</div>
</div>

	<!-- <template id="photo-template">
		<div class="content_template">
			<img src="https://yandex.ru/images/search?text=%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0&img_url=http%3A%2F%2Fwww.yapidekoratif.com%2Fwp-content%2Fuploads%2F145.jpg&pos=8&rpt=simage" alt="">
		</div>
	</template>

	<template id="map-template">
		<div class="content_template">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A85825c7754233e7384ec642cb9cd2723bb3dd681a027800214330593920d4143&amp;source=constructor" 
		width="480" height="312" frameborder="0"></iframe>					
		</div>
	</template> -->

</transition>
</template>

<script>
export default {
	
  	data(){
    	return{

		 	
    	}
  	},
	props:['showModal'],
  	methods:{
      	emitClose(){
          	return this.$emit('closeAboutWindow')
		}
	},
	computed:{
		About(){
			return this.$store.getters.AboutWindowResult
		}
		
	}



}
</script>
<style>
.modalwindowAbout{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	/* background-color: rgb(0,0,0); Fallback color */
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 2;
	position: fixed;
	left: 0;
	top: 0;
	overflow-y: hidden;
}

.wrapper_modal_photo {
	width: 608px;
	position: relative;
	background: #FFFFFF;
	box-shadow: 0px 4px 8px rgba(53, 75, 88, 0.16);
	border-radius: 4px;
	z-index: 100;


 }
 
.btn_close_el {
	position: absolute;
	z-index: 3;
	top: 16px;
	right: 16px;
	border: none;
	width: 24px;
	height: 24px;
	background: url('../assets/icon/ic_close.svg') no-repeat center center;
	background-color: #fff;
	cursor: pointer;
	outline: none;
 }
 
.photo {
	display: flex;
	flex-direction: column;
	padding: 32px;
 }
 
.photo_data {padding-bottom: 12px;}
 
.photo_header {width: 100%;}
 
.photo_wrapper_roomsAndCost {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 12px;
 }
 
.photo_address {padding-bottom: 12px;}
 
.photo_tel {padding-bottom: 12px;}
 
.roomsAndCost_cost {
	font-weight: 500;
	font-size: 1.6rem;
	text-align: right;
	color: #495260;
 }
 
.desc {
	font-size: 1.6rem;
	color: #9CA5B3;
	margin-right: 8px;
 }
 
.desc_text {
	font-size: 1.6rem;
	color: #495260;
 }
 
.photo_content {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 24px;
 }
 
.content_template {
	width: 480px;
	height: 312px;
	align-self: center;
	background: #EFEFEF;
 }
 
.content_menu {
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start; */
	overflow: auto;
	height: 312px;
 }
 
.menu_block {
	width: 56px;
	height: 56px;
	background: #EFEFEF;
	/* background: url('../assets/img/wallpaper.jpg') no-repeat ; */
	background-size: 56px 56px;
	margin-bottom: 8px;

 }
 
.photo_footer {
	line-height: 20px;
	font-size: 14px;
	color: #495260;
 }
</style>


