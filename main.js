const app = Vue.createApp({
    data() {
        return {
            projects: [
                    {   
                        id: 001,
                        title: "Card #1",
                        thumb: "thumbnail",
                        desc: "This is a description",
                        area: 'a'
                    },
                    {
                        id: 002,
                        title: "Card #2",
                        thumb: "thumbnail",
                        desc: "This is a description",
                        area: 'b' 
                    },
                    {
                        id: 003,
                        title: "Card #3",
                        thumb: "thumbnail",
                        desc: "This is a description",
                        area: 'b' 
                    },
                    {
                        id: 004,
                        title: "Card #4",
                        thumb: "thumbnail",
                        desc: "This is a description",
                        area: 'b' 
                    },
                ]
            }
        }
})