app.component('about-component', {
    template:
    /*html*/
    
    `<div class="about">
        <div>
            {{ blurb1 }}
        </div>
        <br>
        <div>
            {{ blurb2 }}
        </div>
    </div>`,
    data() {
        return {
            blurb1: 'I am an aspiring Front End Developer with a passion for creating seamless user experiences through responsive web pages and warm, welcoming layouts for end users. I have always had a keen interest in technology, and have recently taken a deep dive into my computer programming education. I am certified in Python, Javascript ES6, HTML5, CSS3, and VueJS. I am committed to continuous learning alongside personal and professional development and hope to bring my various transferable skills to a like-minded tech organization.',
            blurb2: 'My background in hospitality has allowed me the opportunity to work as part of a team both as a leader and a supporting cast member. I have developed leadership skills in the workforce as a certified trainer and through my experiences coaching and playing in high-level athletics. While working in hospitality I have developed a passion to create outstanding guest experiences that I have most recently translated into a technological experience through design and usability.'
        }
    }

})