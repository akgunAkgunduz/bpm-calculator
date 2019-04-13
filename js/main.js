const groups = document.querySelector('#groups')
const bpm = document.querySelector('#bpm')
const speed = document.querySelector('#speed')

function calculate(groupValue, bpmValue) {
  return bpmValue * groupValue / 60
}

bpm.addEventListener('input', (e) => {
  speed.innerHTML = calculate(groups.options[groups.selectedIndex].value, e.target.value).toFixed(3)
})

groups.addEventListener('input', (e) => {
  speed.innerHTML = calculate(groups.options[groups.selectedIndex].value, bpm.value).toFixed(3)
})