const app = Vue.createApp({
    data() {
        return {
            hello: 'hey',
            bye: 'cya',
            blurb: "blurrrrrb",
            test: true,
            activeDestination: 'about'
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


