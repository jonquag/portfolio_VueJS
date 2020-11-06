app.component('contact-component',{
    template:
    /*html*/
    `
    <div class="three__wide">
        <a href="mailto:jon.quag@gmail.com"
                class="icon">
        <img    src="./assets/imgs/mail.svg" 
                alt="Mail icon"
                class="icon__img"></a>
        <a href="https://www.linkedin.com/in/jonathan-quagliariello-6372b5a6/"
                class="icon">
        <img    src="./assets/imgs/linkedin.svg" 
                alt="Linkedin icon"
                class="icon__img"></a>
        <a href="https://github.com/jonquag"
                class="icon">
        <img    src="./assets/imgs/github.svg" 
                alt="Github icon"
                class="icon__img"></a>
        <div class="contact__blurb"> Please contact me via E-mail or LinkedIn for more information about my journey to learn front end development, or checkout my Github.
        </div>
        </div>
        
    `,
    data() {
        return {
            
        }
    }
})