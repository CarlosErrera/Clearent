<template>
<div>
<div class="modalwindowAbout">	
<div class="wrapper_modal_photo" id="modal">
	
	<button class="btn btn_close_el" @click="emitClose()"></button>
	<div class="photo">
		<div class="photo_header">
			<div class="photo_data">
				<span class="desc">Дата:</span>
				<!-- <span class="desc_text">{13.09.17 в 14:33}</span> -->
				<span class="desc_text">{{ date }}</span>
				
			</div>

			<div class="photo_wrapper_roomsAndCost">
				<div class="roomsAndCost_rooms">
					<span class="desc">Комнаты:</span>
					<!-- <span class="desc_text">1-комнатная, 36 м²</span> -->
					<span class="desc_text">{{ rooms }}</span>
					
				</div>
				<div class="roomsAndCost_cost">{{ price | toRUB(130000)}}</div>
			</div>
			<div class="photo_address">
				<span class="desc">Адрес:</span>
				<!-- <span class="desc_text">район Ново-Савиновский, ул Четаева, 13к1</span> -->
				<span class="desc_text">{{ address }}</span>
			</div>
			<div class="photo_tel">
				<span class="desc">Телефон</span>
				<span class="desc_text">{{ tel | phone(tel) }}</span>
				<!-- <span class="desc_text">+7 1234 56 78 90</span> -->
			</div>
		</div>

		<div class="photo_content">


			<div class="content_template"></div>
			

			<div class="content_menu">

				<!-- <div class="menu_btn_down">
					<i class="arrow_down"></i>
				</div>	 -->
				
				<div class="menu_block"></div>
				<div class="menu_block"></div>
				<div class="menu_block"></div>
				<div class="menu_block"></div>
						
			</div>

		</div>

		<div class="photo_footer">
			Сдам уютную 1к квартиру со всеми необходимыми вещами для комфортного проживания, рядом в 5 мин. ходьбы аквапарк, паркхаус, до центра города 10 мин на транспорте, звоните в любое время суток!
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

</div> 	
</template>

<script>
export default {
	props:['date', 'rooms','address', 'tel', 'price' ],
  	data(){
    	return{
		  
    	}
  	},
  methods:{
      emitClose(){
          return this.$emit('closeAboutWindow')
	  }
  }
}
</script>
<style>
.modalwindowAbout{
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	width: 100%;
	height: 100%;
	/* background-color: rgb(0,0,0); Fallback color */
    background-color: rgba(0, 0, 0, .3); /* Black w/ opacity */
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
	background: url('../assets/img/icon/ic_close.svg') no-repeat center center;
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
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: relative;
	height: 100%;
 }
 
.menu_block {
	width: 56px;
	height: 56px;
	background: #EFEFEF;
	margin-bottom: 8px;
 }
 
.photo_footer {
	line-height: 20px;
	font-size: 14px;
	color: #495260;
 }
</style>


