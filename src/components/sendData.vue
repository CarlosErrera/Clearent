<template>
<div>
	<div class="modalwindow">
		<div class="wrapper_modal_tel">
			<button class="btn btn_close_el" @click="emitClose()"></button>
			<div class="modal_tel">
				<div class="tel_title">Введите номер телефона клиента</div>			
				<input class="tel_number" type="tel" placeholder="+7 1234 56 78 90">
			</div>		
			<div class="tel_footer">
				<button class="btn btn_cancel btn_not_active btn_width-104px" style="margin-right:16px" @click="emitClose()">Отмена</button>
				<button class="btn btn_send btn_width-104px">Отправить</button>
			</div>
		</div>
	</div>	  
</div>
</template>
<script>
export default {
  data(){
      return{

      }
  },
  methods:{
      emitClose(){
          return this.$emit('closeMW')
      }
  }
}
</script>
<style>
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
.modalwindow{
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	width: 100%;
	height: 100%;
	/* background-color: rgb(0,0,0); Fallback color */
    background-color: rgba(0, 0, 0, .5); /* Black w/ opacity */
	z-index: 2;
	position: fixed;
	left: 0;
	top: 0;
	overflow-y: hidden;
}
  .wrapper_modal_tel {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 400px;
	height: 200px;
	background: #FFFFFF;
	box-shadow: 0px 4px 8px rgba(53, 75, 88, 0.16);
	border-radius: 4px;
 }
 
.modal_tel {
	display: flex;
	flex-direction: column;
	padding: 0 32px;
 }
 
.tel_footer {
	display: flex;
	justify-content: flex-end;
	padding: 24px;
 }
 
.tel_title {
	padding-top: 30px;
	margin-bottom: 24px;
	font-size: 1.6rem;
	color: #495260;
 }
 
.tel_number {
	padding: 4px 0;
	border: none;
	border-bottom: 1px solid #EDEDF6;
	outline: none;
	font-size: 1.6rem;
	color: #495260;
 }
 
.tel_number::placeholder {
	font-size: 1.6rem;
	color: #9FADC1;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
}
.fade-enter, .fade-leave-to  {
    opacity: 0;
} 
</style>


