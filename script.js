// const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
// console.log(result) // Promise {<pending>}


  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)) // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}



const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)) // btn a click korle --> {userId: 1, id: 1, title: 'delectus aut autem', completed: false}

}




