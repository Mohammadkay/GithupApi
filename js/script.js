document
  .getElementById("Search")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let user = document.getElementById("Search").value;
      githunb(user);
      fetch(`https://api.github.com/users/${user}/repos`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length >= 0) {
            let repo = document.querySelector(".right");
            repo.innerHTML = "<h3>Popular repositories</h3>";
            let count = 0;
            if (data.length < 6) {
              count = data.length;
            } else {
              count = 6;
            }

            for (let i = 0; i < count; i++) {
              let coler = "red";
              if (data[i].language == "JavaScript") {
                console.log(data[i].language);
                coler = "yellow";
              } else if (data[i].language == "CSS") {
                coler = "blue";
              }

              repo.innerHTML += `  
              <div class="repocard">
              <p id="repotitle"><a href="#">${data[i].name}</a></p>
                 <span id="idntify">Public</span>
                 <div style="display: flex;align-items: center;">
                 <span
                   style="
                     width: 10px;
                     display: inline-block;
                     background: ${coler};
                     height: 10px;
                     border-radius: 50%;
                   "
                 ></span>
                 <p id="type">${data[i].language}</p>
                 </div>
               </div>
        `;
            }
          }
        });
    }
  });
async function githunb(user) {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();
  if (data.message !== "Not Found") {
    let avater = await data.avatar_url;
    let followers = await data.followers;
    let following = await data.following;
    let login = await data.login;
    document.getElementById("avatar").setAttribute("src", avater);
    document.getElementById("followers").innerHTML = followers;
    document.getElementById("following").innerHTML = following;
    document.getElementById("login").innerHTML = login;
  } else {
    alert("Not found");
    return;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  console.log("sadsda");
  fetch(`https://api.github.com/users/Mohammadkay/repos`)
    .then((response) => response.json())
    .then((data) => {
      let repo = document.querySelector(".right");
      let count = 6;
      if (data.length < 6) {
        count = data.length;
      }
      repo.innerHTML = "<h3>Popular repositories</h3>";
      for (let i = 0; i < count; i++) {
        let coler = "red";
        if (data[i].language == "JavaScript") {
          coler = "yellow";
        }
        repo.innerHTML += `
        
        <div class="repocard">
       <p id="repotitle"><a href="#">${data[i].name}</a></p>
          <span id="idntify">Public</span>
          <div style="display: flex;align-items: center;">
          <span
            style="
              width: 10px;
              display: inline-block;
              background: ${coler};
              height: 10px;
              border-radius: 50%;
            "
          ></span>
          <p id="type">${data[i].language}</p>
          </div>
        </div>
        `;
      }
    });
});
document.getElementById("mnue").addEventListener("click", function () {
  let x = document.getElementById("link");
  if (x.style.display == "none") {
    x.style.cssText = "display: flex;flex-direction: column;";
  } else {
    x.style.display = "none";
  }
});
