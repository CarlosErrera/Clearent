
export default{
    
    data(){
        return{

        }
    },
    computed:{
        rentes(){
            return this.$store.getters.rentResult
        }
    },
    methods:{
        addtoMycl(id){

            var btn = document.getElementsByTagName('button')[id];
            btn.classList.remove('btn_select')
            btn.classList.add('btn_added')           
            return this.$store.commit('putInMycl',id);
        }
    }
}