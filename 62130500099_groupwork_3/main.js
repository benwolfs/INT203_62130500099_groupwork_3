const app = {
    data(){
        return{
            pics: [
                {img:'./images/Mei.jpg', alt:'Pic1', named:'Mei'},
                {img:'./images/rita.png', alt:'Pic2', named:'Rita'},
                {img:'./images/fuhua.png', alt:'Pic2', named:'Fuhua'}
            ]
        }
    },

    methods: {
        heart(index){
            this.pics[index].done = !this.pics[index].done
        }
    },

    computed: {
        numPic() {
            return this.pics.filter(t => !t.false).length
        }
    }
    
}
var mountedApp = Vue.createApp(app).mount('#app');