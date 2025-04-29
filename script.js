let hasRun = false;


function runOnce() {
  if (!hasRun) {
    // Function logic here
    console.log("Function executed once");
    let min = Math.ceil(1);
    let max = Math.floor(12);
    rand = Math.floor(Math.random() * (max - min) + min);
    const imgElement = document.getElementById('tuna');
    imgElement.src = 'tuna/tuna' + rand + '.jpg';
    hasRun = true;
  } else {
    console.log("Function has already run");
  }
}

runOnce();
