app.component('project-component', {
    template:
    /*html*/
    `<div   class="project__card"
            v-for="project in projects">
        <h3>{{ project.title }}</h3>
        <p>{{ project.thumb }}</p>
        <p>{{ project.desc }}</p>
    </div>`,
    data() {
        return {
            hello: 'hey',
            test: 'true',
            projects: [
                {   
                    id: 001,
                    title: "Find Siggy",
                    thumb: "thumbnail",
                    desc: "This is a description",
                },
                {
                    id: 002,
                    title: "Gallery 2.0",
                    thumb: "thumbnail",
                    desc: "This is a description",
                },
                {
                    id: 003,
                    title: "Color Changer",
                    thumb: "thumbnail",
                    desc: "This is a description",
                },
                {
                    id: 004,
                    title: "Recipe Book",
                    thumb: "thumbnail",
                    desc: "This is a description",
                },
            ]
        }
    }
})