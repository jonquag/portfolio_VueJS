const app = Vue.createApp({
    data() {
        return {
            activeDestination: 'about',
            overlayOn: false
        }
    },
    methods: {
        navChange(destination) {
            console.log(this.activeDestination)
            this.activeDestination = destination
            console.log(destination)
        }
    }
})


