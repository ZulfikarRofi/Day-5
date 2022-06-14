let dataProject = []
console.log(dataProject);

function newProject(event){
    event.preventDefault();
    let pname = document.getElementById('pname').value
    let strdate = document.getElementById('strdate').value
    let enddate = document.getElementById('enddate').value
    let description = document.getElementById('description').value
    let techNode = document.getElementById('nodejs').checked
    let techVue = document.getElementById('vuejs').checked
    let techReact = document.getElementById('reactjs').checked
    let techBootstrap = document.getElementById('bootstrap').checked
    let contentimage = document.getElementById('upload-images').files

    contentimage = URL.createObjectURL(contentimage[0])

    let projectDuration = getDuration(strdate, enddate);
    
    let postProject = {
        pname, 
        strdate,
        enddate,
        projectDuration,
        description,
        techNode,
        techVue,
        techReact,
        techBootstrap,
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
                <a href="detail.html" class="card-title">
                ${dataProject[data].pname}
                </a>
                <p class="content-duration">
                ${dataProject[data].projectDuration} Bulan
                </p>
                <p class="content-text">
                ${dataProject[data].description}
                </p>
                <div class="tech-logo">
                ${dataProject[data].techNode ?`<i class="fa-brands fa-node-js"></i>` : ""}
                ${dataProject[data].techVue ? `<i class="fa-brands fa-vuejs"></i>` : ""}
                ${dataProject[data].techReact ? `<i class="fa-brands fa-react"></i>` : ""}
                ${dataProject[data].techBootstrap ? `<i class="fa-brands fa-bootstrap"></i>` : ""}
                </div>
                <div class="card-button-group">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
                </div>
                </div>
                `
            }
}
function getDuration (startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let duration = end.getTime() - start.getTime();
    let month = Math.round(duration / (1000 * 3600 * 24 * 30));

    if (month <1){
        return "kurang dari 1"
    }
    else{
        return month;
    }
}