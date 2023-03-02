const { createApp, ref } = Vue;

// 3.0 composition API style
const vm = createApp({
    setup () {
        const message = ref('Hello Vue 3.0 (1)!');
        return {
            message
        }
    }
});
vm.mount('#vue1')

const dataObj = {
    name: 'Default Name',
    age: 18,
    sex: 'Default'
}

// 3.0 options-base style
const vm2 = Vue.createApp({
    delimiters: ['%{', '}%'],
    data () {
        return { ...dataObj }
    }
});

const vm3 = Vue.createApp({
    delimiters: ['%{', '}%'],
    data () {
        return { ...dataObj }
    }
});

vue_obj2 = vm2.mount('#vue2')
vue_obj3 = vm3.mount('#vue3')
vue_obj2.$data.name = "Jimmy"
vue_obj3.$data.name = "Elena"
vue_obj2.$data.sex = "Male"
vue_obj3.$data.sex = "Female"
vue_obj2.$data.age = 29
vue_obj3.$data.age = 29

const vm4 = Vue.createApp({
    template: `Templete: {{ user }} {{ greeting }}`,
    data(){
        return {
            user: `Hi ${vue_obj2.$data.name}`,
            greeting: "Welcome back !!"
        }
    }
})
vm4.mount("#vue4")

const money_converter = Vue.createApp({
    data(){
        return {
            twd: 1,
            twd2jpy: 4.41,
            twd2usd: 0.033
        }
    },
    computed:{
        jpy:{
            get(){
                return Number.parseFloat(this.twd * this.twd2jpy).toFixed(3);
            },
            set(val){
                this.twd = Number.parseFloat(val / this.twd2jpy).toFixed(3);
            }
        },
        usd:{
            get(){
                return Number.parseFloat(this.twd * this.twd2usd).toFixed(3);
            },
            set(val){
                this.twd = Number.parseFloat(val / this.twd2usd).toFixed(3);
            }
        }
    }
})
money_converter.mount('#money_converter')

const imageVue = Vue.createApp({
    data(){
        return{
            imageSrcUrl: "img/onepiece1.jpg",
            imageW: 400,
            imageH: 400
        }
    },
    methods:{
        zoombig(){
            if(this.imageW < 600){
                this.imageW += 50
            }
            if(this.imageH < 600){
                this.imageH += 50
            }
        },
        zoomsmall(){
            if(this.imageW > 200){
                this.imageW -= 50
            }
            if(this.imageH > 200){
                this.imageH -= 50
            }
        },
        change_img(){
            if(this.imageSrcUrl == "img/onepiece1.jpg"){
                this.imageSrcUrl = "img/onepiece2.jpg"
            }else{
                this.imageSrcUrl = "img/onepiece1.jpg"
            }
        }
    }
})
imageVue.mount("#vue5")

const inputVue = Vue.createApp({
    data(){
        return {
            single_message: "Hello",
            multi_message: "Multiple Hello",
            picked: "Apple",
            checkedNames: [],
            selected: ""
        }
    },
    computed:{
        contain: function(){
            return this.multi_message.includes("Jimmy");
        },
        multi_style: function(){
            return {
                'border': this.contain ? 'green solid 3px' : '',
                'color': this.contain ? 'blue' : ''  
            };
        }
    }
})
inputVue.mount("#input_message");