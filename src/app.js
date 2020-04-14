const usersDiv = document.querySelector("#users");
usersDiv.innerHTML = "";
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw response.statusText;
  } // early return
  const users = await response.json();
  users.forEach((user) => {
    usersDiv.innerHTML += ` 
    <div class='card'>
      <h4> ${user.name}</h4>
      <p> ${user.email}</p>
    </div>`;
  });
  return users;
};
fetchUsers();
