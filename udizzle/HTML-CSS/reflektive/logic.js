console.log('hello world')

function updateDiv(table){
    var divBlock = document.getElementById('user-table');
    divBlock.innerHTML = ''
    divBlock.appendChild(table);
}

function renderTable(data) {
    // id, name, full_name, provate, owner.login
    let headers = ['ID', 'Repo Name', 'Full Name', 'Private' , 'Owner Login'];

    let table = document.createElement('table');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');

    // Setup Head
    let tableHeadRow = document.createElement('tr');
    headers.forEach((title)=>{
        let titleBlock = document.createElement('td');
        titleBlock.innerText = title;
        tableHeadRow.appendChild(titleBlock);
    });
    tableBody.appendChild(tableHeadRow);
    

    // Setup Body
    data.forEach((repoInfo)=>{
        let repoRow = document.createElement('tr');

        let idBlock = document.createElement('td');
        let nameBlock = document.createElement('td');
        let fullBlock = document.createElement('td');
        let privateBlock = document.createElement('td');
        let loginBlock = document.createElement('td');

        idBlock.innerText = repoInfo.id;
        nameBlock.innerText = repoInfo.name;
        fullBlock.innerText = repoInfo.full_name;
        privateBlock.innerText = repoInfo.private;
        loginBlock.innerText = repoInfo.owner.login;

        repoRow.appendChild(idBlock);
        repoRow.appendChild(nameBlock);
        repoRow.appendChild(fullBlock);
        repoRow.appendChild(privateBlock);
        repoRow.appendChild(loginBlock);
        
        tableBody.appendChild(repoRow);
    });

    table.appendChild(tableHead);
    table.appendChild(tableBody);
    updateDiv(table);
}


function extractData(){
    var data = this.responseText;
    data = JSON.parse(data);
    renderTable(data);
}

function submitData(){
    let name = event.target.gituser.value;
    console.log( "USERNAME =>" + name );
    if(name !== ''){
        getUserData(name);
    }
    // event.preventDefault();
}

function getUserData(username) {
    var xhr = new XMLHttpRequest();
    let url = "https://api.github.com/users/:user/repos"
    url = url.replace(':user', username);

    xhr.addEventListener('load', extractData);
    xhr.open('GET',url);
    xhr.send();

}