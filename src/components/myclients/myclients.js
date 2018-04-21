export default{
    data(){
        return{
            selected:'Выбрать',
            isMenu:false,

            clients:[
                {
                    id:1,
                    date:'Только что',
                    tel:'1234567890'
                    //price:20000
                }
            ]
        }
    },
    methods:{
        showMenu(){
            if(this.isMenu){

                return this.isMenu = false;
            }else{
                
                return this.isMenu = true;
                
            }             
        },
        closeMenu(){
            return this.isMenu = false;
        }
    }


}