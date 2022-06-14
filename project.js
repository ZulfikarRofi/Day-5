

// let dataProject = []
// console.log(dataProject);


// function newProject(event){
//     event.preventDefault();
    
//     let projectname = document.getElementById('pname').value
//     let strdate = document.getElementById('strdate').value
//     let enddate = document.getElementById('enddate').value
//     let description = document.getElementById('description').value
//     let images = document.getElementById('upload-images').files
    
//     images = URL.createObjectURL(images[0])

    
//     let postProject = {
//         projectname,
//         strdate,
//         enddate,
//         description,
//         images  
//     }

//     {Project.push(postProject)
//     console.log(newProject)

//     renderProject()
//     }
// }

// function renderProject(){


//     document.getElementById('contents').innerHTML = ''
//     for(let data = 0; data< dataProject.length; data++){
//         document.getElementById('contents').innerHTML +=
//         `
//         <div class="card">
//         <img src="${dataProject[data].images}" alt="content-image">
//         <a class="card-title">
//         ${dataProject[data].projectname}
//         </a>
//         <p class="content-duration">
//         durasi : 1 Bulan
//         </p>
//         <p class="content-text">
//         ${dataProject[data].description}
//         </p>
//         <div class="tech-logo">
//         <a href="">
//         <img src="assets/pic/nodejs.png" alt="nodejs">
//         </a>
//         <a href="">
//         <img src="assets/pic/nextjs.png" alt="nextjs">
//         </a>
//         <a href="">
//         <img src="assets/pic/reactjs.png" alt="reactjs">
//         </a>
//         <a href="">
//         <img src="assets/pic/typescript.png" alt="typescript">
//         </a>
//         </div>
//         <div class="card-button-group">
//         <a href="#">Edit</a>
//         <a href="#">Delete</a>
//         </div>
//         </div>
//         `
//     }
// }

let dataProject = []
console.log(dataProject);

function newProject(event){
    event.preventDefault();
    let pname = document.getElementById('pname').value
    let strdate = document.getElementById('strdate').value
    let enddate = document.getElementById('enddate').value
    let description = document.getElementById('description').value
    let contentimage = document.getElementById('upload-images').files

    contentimage = URL.createObjectURL(contentimage[0])

    let postProject = {
        pname, 
        strdate,
        enddate,
        description,
        contentimage
    }

    dataProject.push(postProject)
    console.log(dataProject);


    renderProject()
}

function renderProject(){
    
    document.getElementById('project-card').innerHTML = ""
    for(let data = 0; data< dataProject.length; data++){
                document.getElementById('project-card').innerHTML +=
                `
                <div class="card">
                <img src="${dataProject[data].contentimage}" alt="content-image">
                <a class="card-title">
                ${dataProject[data].pname}
                </a>
                <p class="content-duration">
                durasi : 1 Bulan
                </p>
                <p class="content-text">
                ${dataProject[data].description}
                </p>
                <div class="tech-logo">
                <a href="">
                <img src="assets/pic/nodejs.png" alt="nodejs">
                </a>
                <a href="">
                <img src="assets/pic/nextjs.png" alt="nextjs">
                </a>
                <a href="">
                <img src="assets/pic/reactjs.png" alt="reactjs">
                </a>
                <a href="">
                <img src="assets/pic/typescript.png" alt="typescript">
                </a>
                </div>
                <div class="card-button-group">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
                </div>
                </div>
                `
            }
}