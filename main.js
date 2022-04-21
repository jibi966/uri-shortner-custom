async function formData(event) {
  event.preventDefault();
  const uricode = document.getElementById("uricode").value;
  const longuri = document.getElementById("longuri").value;
  let data = {
    uricode,
    longuri,
  };
  fetch("https://url-shortner-custom.herokuapp.com/make-short", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status == 404) {
      alert("URI already exists");
    } else {
      console.log("Request complete! response:", response);
    }
  });
}

async function change() {
  document.getElementById("changing").innerHTML = "";
  const name = document.getElementById("getter").value;
  let data = await fetch(`https://url-shortner-custom.herokuapp.com/${name}`);
  let res = await data.json();
  const ab = document.createElement("a");
  ab.href = res.longuri;
  ab.innerText = "Click here to Browse";
  const main = document.getElementById("changing");
  main.appendChild(ab);
}
