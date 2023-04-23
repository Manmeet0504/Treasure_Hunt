`use strict`;

(() => {
  let x = document.getElementById("login");
  let y = document.getElementById("register");
  let z = document.getElementById("btn");
  let a = document.getElementById("log");
  let b = document.getElementById("reg");
  let w = document.getElementById("other");
  let input = document.getElementById("myInput");
  const url = "http://localhost:3000/account";

  let submitFormId = document.querySelector("#register");
  if (submitFormId) {
    submitFormId.addEventListener("submit", function (e) {
      registerUserClick(e, this);
    });
  }

  let loginFormId = document.querySelector("#login");
  if (loginFormId) {
    loginFormId.addEventListener("submit", function (e) {
      loginUserClick(e, this);
    });
  }

  const registerUserClick = (e, form) => {
    e.preventDefault();
    let user = {
      fullname: "",
      email: "",
      password: "",
      progress: {
        clues: {
          clue1: { timer: "0", numberoftry: "0" },
          clue2: { timer: "0", numberoftry: "0" },
          clue3: { timer: "0", numberoftry: "0" },
          clue4: { timer: "0", numberoftry: "0" },
        },
      },
    };

    let jsonFormData = {};
    for (const pair of new FormData(form)) {
      jsonFormData[pair[0]] = pair[1];
    }
    user.email = jsonFormData.email;
    user.fullname = jsonFormData.fullName;
    user.password = jsonFormData.psame;

    console.log(user);
    registerUser(user).then((response) => {
      console.log(response);
    });
    return false;
  };

  const registerUser = async (user) => {
    try {
      let urlToList = `${url}/addaccount`;
      let response = await fetch(urlToList, {
        method: "POST",
        headers: {
          accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const loginUserClick = (e, form) => {
    e.preventDefault();
    let user = {
      email: "",
      password: "",
    };

    let jsonFormData = {};
    for (const pair of new FormData(form)) {
      jsonFormData[pair[0]] = pair[1];
    }
    user.email = jsonFormData.email;
    user.password = jsonFormData.password;

    console.log(user);
    loginUser(user).then((response) => {
      console.log(response);
      if (response.isUserExists) {
        window.localStorage.setItem(
          "user",
          JSON.stringify(response.userDetails)
        );
        window.location.href = "clue1.html";
      } else {
        window.localStorage.setItem(
          "user",
          JSON.stringify(response.userDetails)
        );
        window.location.href = "login.html";
      }
    });
    return false;
  };

  const loginUser = async (user) => {
    try {
      let urlToList = `${url}/login`;
      let response = await fetch(urlToList, {
        method: "POST",
        headers: {
          accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  register = () => {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
  };

  login = () => {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
  };

  Clue1 = () => {
    // window.open("C:UsersManmeet SinghOneDriveDesktopeLitmusclue1.html");
    window.location.href = "http://127.0.0.1:5501/clue1.html";
  };

  checkInput = () => {
    let input = document.getElementById("myInput");
    let inputValue = input.value;
    let correctAnswer = "XKIpOmg8pBxnlmvz60Gm8Q==your sword";

    if (inputValue == "XKIpOmg8pBxnlmvz60Gm8Q==") {
      window.location.href = "clue2(Incorrect).html";
    } else if (inputValue == "XKIpOmg8pBxnlmvz60Gm8Q==your sword") {
      window.location.href = "clue2.html";
    }
  };

  clue2I = () => {
    let input = document.getElementById("myInput1");
    let inputValue = input.value;
    let correctAnswer = "rum always";

    if (inputValue == correctAnswer) {
      window.location.href = "deadEnd1.html";
    } else {
      document.getElementById("result").textContent = "Incorrect.";
    }
  };

  clue2 = () => {
    let input = document.getElementById("myInput2");
    let inputValue = input.value;

    if (inputValue == "https://shorturl.at/enemies/erAM9") {
      window.location.href = "clue3(Incorrect).html";
    } else if ("https://shorturl.at/erAM9") {
      window.location.href = "clue4.html";
    }
  };

  clue3 = () => {
    let input = document.getElementById("myInput3");
    let inputValue = input.value;

    if (inputValue == "Zheng Yi") {
      window.location.href = "deadEnd1.html";
    }
  };

  clue4 = () => {
    let input = document.getElementById("myInput4");
    let inputValue = input.value;

    if (inputValue == "treasure") {
      window.location.href = "final.html";
    } else if ("https://shorturl.at/erAM9") {
      window.location.href = "clue4.html";
    }
  };

  const getAllUsers = async () => {
    try {
      let urlToList = `${url}/list`;
      let response = await fetch(urlToList);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register: register,
    login: login,
    clue1: Clue1,
    checkInput: checkInput,
    clue2I: clue2I,
    clue2: clue2,
    clue3: clue3,
    clue4: clue4,
  };
})();
