app.component('project-component', {
    template:
    /*html*/
    `
    <div    class="project__grid">
    <div    class="project__card shadow"
            v-for="(project,index) in projects"
            :class="project.style"
            >
        <h3>{{ project.title }}</h3>
        <a :href="hyperRef"
            :key="project.id"
            @click="updateProject(index)"
            
            target="_blank">
            <img    :src="project.thumb"
                    :alt="project.alt"
                    class="project__thumb">
        </a>
        <p>{{ project.desc }}</p>
        
    </div>
    
    </div>
    `,
    data() {
        return {
            selectedProject: 0,
            projects: [
                {   
                    id: 001,
                    title: "Find Siggy",
                    thumb: "assets/imgs/siggy-head.svg",
                    alt: "Siggy cartoon head",
                    desc: "Search pods to find Siggy.",
                    destination: "Space-pod-shuffle.html",
                    style: "",
                },
                {
                    id: 002,
                    title: "Gallery 2.0",
                    thumb: "assets/imgs/galleryImage12.jpg",
                    alt: "Gallery cabin",
                    desc: "Densely populated grid gallery",
                    destination: "gallery2.html",
                    style: "",
                },
                {
                    id: 003,
                    title: "Color Changer",
                    thumb: "assets/imgs/rainbow.svg",
                    alt: "Rainbow",
                    desc: "First project manipulating DOM events",
                    destination: "colourChanger.html",
                    style: "",
                },
                {
                    id: 004,
                    title: "Recipe Book",
                    thumb: "assets/imgs/shaker.jpg",
                    alt: "Cocktail shaker pouring",
                    desc: "Currently being developed",
                    destination: "",
                    style: "disabled",
                }
            ]
        }
    },
    methods: {
        updateProject(index) {
            this.selectedProject = index
            console.log(selectedProject)
        }
    },
    computed: {
        hyperRef() {
            return this.projects[this.selectedProject].destination
        }
    }
})