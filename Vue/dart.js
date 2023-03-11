const { createApp, ref } = Vue;

// 3.0 composition API style
const dartboard = Vue.createApp({
    data(){
        return {
            scores: [20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5]
        }
    },
    methods:{
        show(i){
            if (i == 50){
                showboard.shoot = showboard.shoot + 50
            }else{
                showboard.shoot = showboard.shoot + this.scores[i-1]
            }
        },
        board_style(i){
            return {
                'transform': `rotate(${(Number.parseInt(i)-1)*18}deg)`,
                '-webkit-transform:': `rotate(${i*20} deg)`,
            };
        }
    },
}).mount('#board')

const showboard1 = Vue.createApp({
    data(){
        return {
            shoot: 0,
            AisShow: true
        }
    }
}).mount('#player_1')

const showboard2 = Vue.createApp({
    data(){
        return {
            shoot: 0,
            BisShow: true
        }
    }
}).mount('#player_2')

const showboard3 = Vue.createApp({
    data(){
        return {
            shoot: 0
        }
    }
}).mount('#player_3')

const showboard4 = Vue.createApp({
    data(){
        return {
            shoot: 0
        }
    }
}).mount('#player_4')