app.component('cert-component', {
    template:
    /*html*/
    `<div   class="cert__grid">
        <img    v-for="(cert, index) in certs"
                :key="cert.id"
                :src="cert.img" 
                :alt="cert.alt"
                class="cert__thumb shadow"
                :class="{ blurBG: overlayActive }"
                @click="toggleOverlay"
                @click="updateVariant(index)">
    </div>
    
    <div    class="cert__overlay"
            v-if="overlayActive">
            <div class="cert__inner">
                <button @click="toggleOverlay">X Close</button>
                <img    class="cert__imgOverlay"
                        :src="image">  
            </div>
    </div>
    `,
    data() {
        return {
            overlayActive: false,
            overlayImg: '',
            selectedVariant: 0,
            certs: [
                {   
                    id: 001,
                    img: "./assets/imgs/py4e-certificate.png",
                    alt: "Python Certificate",
                },
                {   
                    id: 002,
                    img: "./assets/imgs/wd4e-certificate.png",
                    alt: "Web Development Certificate",
                },
                {   
                    id: 003,
                    img: "./assets/imgs/JavaScript-Codecademy-Certificate.png",
                    alt: "JavaScript Certificate",
                },
                {   
                    id: 004,
                    img: "./assets/imgs/Udemy-JS-UWP.jpg",
                    alt: "JavaScript Understanding the Weird Parts Certificate",
                },
            ]
        }
    },
    methods: {
        toggleOverlay() {
            this.overlayActive = !this.overlayActive
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        image() {
            return this.certs[this.selectedVariant].img
        }
    }
    

})
