const projects = [
    {
        idProject: 1,
        imgProject: '../assets/img/ai-generated-8061340_1280.jpg',
        titleProject: 'Texto encriptador',
        descriptionProject: 'Este es un programa o aplicación web creada con JavaScript, que permite a los usuarios encriptar y desencriptar texto.',
        linkProject: 'https://text-encriptado.vercel.app/'
    },
    {
        idProject: 2,
        imgProject: '../assets/img/ai-generated-8061340_1280.jpg',
        titleProject: 'Texto encriptador 2.0',
        descriptionProject: 'Este programa es una version mejorada que permite a los usuarios encriptar y desencriptar texto.',
        linkProject: 'https://text-encriptado.vercel.app/'
    },
]



document.querySelectorAll('a[href^="#"]').forEach(anclas => {
    anclas.addEventListener('click', function (event){
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            window.scrollTo({
                top: target.offsetTop,
                behavior:'smooth'
            });
        }
    });
});

function upSectionProject (){
    projects.forEach(project => projectsCardSelect(project));
}

function projectsCardSelect(project){
    const projectsCard = document.createElement('div');
    projectsCard.classList.add('card-projects')

    const Boximg = document.createElement('div')
    Boximg.classList.add('container-card-img')

    const imgCard = document.createElement('img')
    imgCard.src = project.imgProject
    imgCard.alt = project.titleProject

    const BoxDescription = document.createElement('div')
    BoxDescription.classList.add('container-card-info')

    const titleCard = document.createElement('h3')
    titleCard.textContent = project.titleProject

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = project.descriptionProject

    const linkcard = document.createElement('a')
    linkcard.href = project.linkProject

    linkcard.setAttribute('target', '_blank')
    linkcard.textContent = 'Ver proyecto'

    projectsCard.appendChild(Boximg)
    projectsCard.appendChild(BoxDescription)

    Boximg.appendChild(imgCard)
    BoxDescription.appendChild(titleCard)
    BoxDescription.appendChild(descriptionCard)
    BoxDescription.appendChild(linkcard)

    document.querySelector('.container-card').appendChild(projectsCard)
    

}

/*function projectsCardSelect (project) {
    const projectsCard = document.createElement('div')
    projectsCard.classList.add('card-projects')

    const Boximg = document.createElement('div')
    Boximg.classList.add('container-card-img')

    const imgCard = document.createElement('img')
    imgCard.src = project.imgProject
    imgCard.alt = project.titleProject

    const BoxDescription = document.createElement('div')
    BoxDescription.classList.add('container-card-info')

    const titleCard = document.createElement('h3')
    titleCard.textContent = project.titleProject

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = project.descriptionProject

    const linkcard = document.createElement('a')
    linkcard.href = project.linkProject

    linkcard.setAttribute('target', '_blank')
    linkcard.textContent = 'Ver Proyecto'

    projectsCard.appendChild(Boximg)
    projectsCard.appendChild(BoxDescription)

    Boximg.appendChild(imgCard)
    BoxDescription.appendChild(titleCard)
    BoxDescription.appendChild(descriptionCard)
    BoxDescription.appendChild(linkcard)
    
    document.querySelector('container-card').appendChild(projectsCard)
}*/
