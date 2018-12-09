// 1.wyświetlić w konsoli dane (fetch lub $.ajax)
// 2.wrzucić na stronę wszytskich użytkowników
window.onscroll = () => {
   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
   
       

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(response => {
        response.forEach(user => {
            let uzytkownik = document.createElement("div"); 
            uzytkownik.innerHTML = `
            <p>ID: ${user.id}</p>
            <p>ID: ${user.name}</p>
            <p>ID: ${user.website}</p>
            <p>-------------------------</p>
            `;
            document.body.appendChild(uzytkownik);
            
        });
        
    })
    .catch(err => console.log("Ooops, something gone wrong: ", err));
}}
    