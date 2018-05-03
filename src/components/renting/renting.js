
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
        addtoMycl(){
            document.getElementById('btnselect').classList.remove('btn_select');
            document.getElementById('btnselect').classList.add('btn_added');
            var id = document.getElementById('rentID').value;
            
            return this.$store.commit('putInMycl');
        }
    }
}