var facilitators;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {

});
facilitators = ['Malkit', 'Ivonne', 'Tosin', 'Joe', 'Jennifer'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!facilitators.length) {
    let element_facilitator = document.getElementById('facilitator');
    let new_li = document.createElement('li');
    new_li.innerText = randomMember(facilitators);

    element_facilitator.appendChild(new_li);
  }

});

document.getElementById('add').addEventListener('click', (event) => {
  let element_input = document.getElementById('input');
  facilitators.unshift(getNumberOrString(document.getElementById('input').value));

});



document.getElementById('win').addEventListener('click', (event) => {
    let element_tourn = document.getElementById('tourn');
    element_tourn.style.color = '#990000';
  
  });
  
  document.getElementById('checkbox').addEventListener('click', (event) => {
    let element_play = document.getElementById('play');
    element_play.style.color = '#990000';
  
  });
  
  document.getElementById('attend').addEventListener('click', (event) => {
    let element_edin = document.getElementById('edin');
    element_edin.style.color = '#990000';
  
  });
  
  document.getElementById('climb').addEventListener('click', (event) => {
    let element_mount = document.getElementById('mount');
    element_mount.style.color = '#990000';
  
  });
  
  document.getElementById('visit').addEventListener('click', (event) => {
    let element_strath = document.getElementById('strath');
    element_strath.style.color = '#990000';
  
  });