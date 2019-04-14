const groups = document.querySelector('#groups')
const bpm = document.querySelector('#bpm')
const speed = document.querySelector('#speed')
const table = document.querySelector('#bpm-table')

function calculate(groupValue, bpmValue) {
  return bpmValue * groupValue / 60
}

function drawTable() {
  const bpmValue = parseInt(bpm.value)
  const groupValue = parseInt(groups.options[groups.selectedIndex].value)  
  const start = bpmValue - 10
  const end = bpmValue + 10  

  table.querySelector('tbody').innerHTML = ''

  for (let i = start; i <= end; i++) {
    let tr = document.createElement('tr')
    
    for (let j = 2; j <= 11; j++) {
      let td = document.createElement('td')      
      td.innerText = (i * groupValue / j).toFixed(3)
      
      if (j === groupValue || i === bpmValue) {
        td.style.backgroundColor = 'skyblue'
        td.style.color = 'white'
      }
      
      tr.appendChild(td)
    }

    table.querySelector('tbody').appendChild(tr)
  }
}

bpm.addEventListener('input', (e) => {
  speed.innerHTML = calculate(groups.options[groups.selectedIndex].value, e.target.value).toFixed(3)
  drawTable()
})

groups.addEventListener('input', (e) => {
  speed.innerHTML = calculate(groups.options[groups.selectedIndex].value, bpm.value).toFixed(3)
  drawTable()
})

document.addEventListener('DOMContentLoaded', () => {
  drawTable()
})