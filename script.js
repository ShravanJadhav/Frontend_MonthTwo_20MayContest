// Initial array of users
let users = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
  ];
  
  // Function to render user cards
  function renderUserCards(users) {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
  
    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.className = "userCard";
  
     const id = document.createElement("p");
     id.textContent =  user.id;

      const name = document.createElement("p");
      name.textContent = `Name: ${user.name}`;
  
      const age = document.createElement("p");
      age.textContent = `Age: ${user.age}`;
  
      const profession = document.createElement("p");
      profession.textContent = `Profession: ${user.profession}`;
  
      userCard.appendChild(id);
      userCard.appendChild(name);
      userCard.appendChild(age);
      userCard.appendChild(profession);
  
      userList.appendChild(userCard);
    });
  }
  
  // Function to filter users by profession
  function filterUsersByProfession(profession) {
     
    const filteredUsers = users.filter(user => user.profession === profession);
    renderUserCards(filteredUsers);
  }
  
  // Event listener for filter button
  document.getElementById("filterBtn").addEventListener("click", () => {
    const professionSelect = document.getElementById("profession");
    const selectedProfession = professionSelect.value;
    filterUsersByProfession(selectedProfession);
  });
  
  // Event listener for add user button
  document.getElementById("addUserBtn").addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const professionSelect = document.getElementById("addProfession");
  
    const name = nameInput.value;
    const age = ageInput.value;
    const profession = professionSelect.value;
  
    if (name === "" || age === "" || profession === "") {
      alert("Please enter all the user details before clicking the add button.");
      return;
    }
  
    const newUser = {
      id: users.length + 1,
      name: name,
      age: age,
      profession: profession
    };
  
    users.push(newUser);
    renderUserCards(users);
  
    // Reset input fields
    nameInput.value = "";
    ageInput.value = "";
    professionSelect.value = "";
  });
  