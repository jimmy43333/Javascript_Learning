const { createApp, ref } = Vue;

// 3.0 composition API style
const showVue = Vue.createApp({
    data(){
        return {
            message: 2
        }
    },
    methods:{
        show(){
            console.log(this.message)
        }
    }
}).mount('#board')
