app.component('cert-component', {
    template:
    /*html*/
    `
        <img src="./assets/imgs/py4e-certificate.png" 
            alt="Python Certificate"
            class="cert__thumb shadow">
        <img src="./assets/imgs/wd4e-certificate.png" 
            alt="Web Development Certificate"
            class="cert__thumb shadow">
        <img src="./assets/imgs/JavaScript-Codecademy-Certificate.png" 
            alt="JavaScript Certificate"
            class="cert__thumb shadow">
        <img src="./assets/imgs/Udemy-JS-UWP.jpg" 
            alt="JavaScript Understanding the Weird Parts Certificate"
            class="cert__thumb shadow">`,
    data() {
        return {
            py4e: "./assets/imgs/py4e-certificate.png"
        }
    }

})
