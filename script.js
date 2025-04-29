let hasRun = false;


function runOnce() {
  if (!hasRun) {
    // Function logic here
    console.log("Function executed once");
    min = Math.ceil(min);
    max = Math.floor(max);
    rand = Math.floor(Math.random() * (max - min) + min);
    const imgElement = document.getElementById('tuna');
    imgElement.src = 'tuna/tuna' + rand + '.jpg';
    hasRun = true;
  } else {
    console.log("Function has already run");
  }
}

runOnce();
