document
  .getElementById("ComparisonButton")
  .addEventListener("click", async function () {
    let p1 = document.getElementById("player1").value;
    let r1 = await compare(p1);
    let p2 = document.getElementById("player2").value;
    let r2 = await compare(p2);
    if (p1.trim() == "" || p2.trim == "") {
      alert("Please enter valid user name ");
      return;
    }
    if (r1[0] == undefined || r2[0] == undefined) {
      alert("Please enter valid user names ");
      return;
    }

    if (r1 > r2) {
      document.getElementById("resuelt").innerHTML = `<div class="winer">
        <div>
          <h2>The winner is ${p1}</h2>
        </div>
        <div>
          <img
            style="border-radius: 50%; width: 230px"
            src="${r1[2]}"
            alt=""
          />
        </div>
      </div>`;
    } else if (r2 > r1) {
      document.getElementById("resuelt").innerHTML = `<div class="winer">
        <div>
          <h2>The winner is ${p2}</h2>
        </div>
        <div>
          <img
            style="border-radius: 50%; width: 230px"
            src="${r2[2]}"
            alt=""
          />
        </div>
      </div>`;
    } else {
      if (r1[1] > r2[1]) {
        document.getElementById("resuelt").innerHTML = `<div class="winer">
            <div>
              <h2>The winner is ${p1}</h2>
              
            </div>
            <div>
              <img
                style="border-radius: 50%; width: 230px"
                src="${r1[2]}"
                alt=""
              />
            </div>
          </div>`;
      } else if (r2[1] > r1[1]) {
        document.getElementById("resuelt").innerHTML = `<div class="winer">
        <div>
          <h2>The winner is ${p2}</h2>
        </div>
        <div>
          <img
            style="border-radius: 50%; width: 230px"
            src="${r2[2]}"
            alt=""
          />
        </div>
      </div>`;
      } else {
        document.getElementById("resuelt").innerHTML = `
        <div class="winer">
        <div>
        <h2 style="color:#a88d32">Draw</h2>
      </div>
      </div>
      `;
      }
    }
  });
async function compare(p) {
  try {
    const response = await fetch(`https://api.github.com/users/${p}`);
    const data = await response.json();
    let arr = [
      await data.public_repos,
      await data.followers,
      await data.avatar_url
    ];
    return arr;
  } catch {
    alert("somthing going wrong");
  }
}
/*public_repos
    followers
*/
document.getElementById("mnue").addEventListener("click", function () {
  let x = document.getElementById("link");
  if (x.style.display == "none") {
    x.style.cssText = "display: flex;flex-direction: column;";
  } else {
    x.style.display = "none";
  }
});
