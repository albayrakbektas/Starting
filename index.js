let box = document.getElementById("update");
let queue = [];
let patientNames = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

function createNewPatient(name, age, priority){
    return {
        nameIs: name,
        ageIs: age,
        priorityIs: priority
    };
}

document.getElementById("buttonLeft").addEventListener("click",()=>{
    let random = createNewPatient(patientNames[Math.floor(Math.random() * patientNames.length)], Math.round(Math.random() * 70), Math.round(Math.random() * 3));
    if(queue.length < 11){
        queue.push(random);
        console.log(queue);
        update();
    }
    else{
        alert(">>>THE QUEUE IS FULL<<<");
    }
})

function update(){
    let childNodes = box.childNodes;
    for(let child of [...childNodes]){
        child.remove()
    }

    queue.sort((a, b) => b.priorityIs - a.priorityIs)

    for(let i=0; i<queue.length; i++){
        let node = document.createElement("li");
        let name = document.createElement("span");
        name.textContent = queue[i].nameIs + "- Patient's priority is >>>";
        let priority = document.createElement("b")
        priority.textContent = queue[i].priorityIs
        node.appendChild(name);
        node.appendChild(priority);
        box.appendChild(node);
    }
}

function acceptNewPatient() {
    let patient = queue.shift();
    if (patient) {
        console.log(`Doctor with Patient: ${patient.nameIs}. Patient's age is ${patient.ageIs}.`);
        document.getElementById("thePatient").innerHTML = patient.nameIs;
    }else{
        document.getElementById("thePatient").innerHTML = 'No Pateint' ;

    }
}

document.getElementById("buttonRight").addEventListener("click", ()=>{
    acceptNewPatient();
    update();
})
