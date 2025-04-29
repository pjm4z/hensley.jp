let hasRun = false;


function runOnce() {
  if (!hasRun) {
    // Function logic here
    console.log("Function executed once");
    let min = Math.ceil(1);
    let max = Math.floor(12);
    rand = Math.floor(Math.random() * (max - min) + min);
    let imgElement = document.getElementById('tuna');
    let favicon = document.querySelector("link[rel*='icon']");
    imgElement.src = 'tuna/tuna' + rand + '.png';
    favicon.href = 'tuna/tuna' + rand + '.png';
    hasRun = true;
  } else {
    console.log("Function has already run");
  }
}

runOnce();
