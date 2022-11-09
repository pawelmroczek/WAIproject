const save = (id) => {
  sessionStorage.setItem(id, document.getElementById(id).value);
};

const load = (id) => {
  document.getElementById(id).value = sessionStorage.getItem(id);
};

const saveGender = (id) => {
  sessionStorage.setItem("gender", id);
};

hobbys = document.getElementsByName("hobby");

const saveHobby = (id) => {
  if (sessionStorage.getItem(id) != id) {
    sessionStorage.setItem(id, document.getElementById(id).value);
  } else {
    sessionStorage.removeItem(id);
  }
};

const loadHobby = (id) => {
  if (sessionStorage.getItem(id) == id) {
    document.getElementById(id).checked = true;
  } else {
    document.getElementById(id).checked = false;
  }
};

for (hobby of hobbys) {
  loadHobby(hobby.value);
}

loadGender = () => {
  if (sessionStorage.getItem("gender") == "men") {
    document.getElementById("men").checked = true;
  } else if (sessionStorage.getItem("gender") == "women") {
    document.getElementById("women").checked = true;
  }
};

const clearButton = document.querySelector(".js-form__clear");

clearButton.addEventListener("click", () => {
  
});

load("slider")
load("form__name");
load("form__surname");
load("form__date");
load("form__target");
loadGender();
load("form__textarea");
