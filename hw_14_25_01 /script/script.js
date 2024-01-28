
const fomNode = document.querySelector("#addForm");
const users =[];

fomNode.addEventListener("submit", (event) => { //ссылка на эл (нод), с кот произошло событие
    event.preventDefault();

    const{firstName,lastName, age } = event.target; //формируем нод для полей ввода
    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
    };
    users.push(user);
    render();   // вызываем парерисовку с юзерами
    event.target.reset();
})
function getUserNode(firstName, lastName, age){
    const firstNameNode = document.createElement("p"); //создали элементы
    const lastNameNode = document.createElement("p");
    const ageNode = document.createElement("p");
    const container = document.createElement("div");

    firstNameNode.innerText = firstName; // записали в элементы данные - аргументы
    lastNameNode.innerText = lastName;
    ageNode.innerText = age; 
    
    container.classList.add("item");
    container.style.backgroundColor = '#026956';
    container.append(firstNameNode, lastNameNode, ageNode);//компановка элементов в контейнер
    return container;                                      // вернули контейнер
}


function render(){
     const container = document.querySelector("#userContainer");
     container.innerText = '';
     users.forEach(({firstName, lastName, age}) => container.append(getUserNode(firstName, lastName, age)));
}




