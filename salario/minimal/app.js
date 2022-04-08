let salaries = [
  {
    "from": 5,
    "to": 10,
    "lowerLimit": 146
  },
  {
    "from": 10,
    "to": 20,
    "lowerLimit": 252
  },
  {
    "from": 20,
    "to": 30,
    "lowerLimit": 396
  },
  {
    "from": 30,
    "to": 40,
    "lowerLimit": 527
  },
  {
    "from": 40,
    "to": 50,
    "lowerLimit": 673
  },
  {
    "from": 50,
    "to": 60,
    "lowerLimit": 836
  },
  {
    "from": 60,
    "to": 70,
    "lowerLimit": 1035
  },
  {
    "from": 70,
    "to": 80,
    "lowerLimit": 1263
  },
  {
    "from": 80,
    "to": 90,
    "lowerLimit": 1682
  },
  {
    "from": 90,
    "to": 95,
    "lowerLimit": 2646
  },
  {
    "from": 95,
    "to": 99,
    "lowerLimit": 4082
  },
  {
    "from": 99,
    "to": 100,
    "lowerLimit": 9832
  }
]

salaries.reverse()

input.addEventListener( 'input', validate )

function validate() {

  const value = parseInt( input.value )
  
  if ( value > 0 )
    calculate( value )
  else
    clear()

}

function calculate( value ) {

  clear()

  for ( let salary of salaries ) {

    if ( value > salary.lowerLimit ) {
      show( salary.from )
      break
    }
  }

}

function show( percentile ) {
  output.textContent = percentile + '%'
  fill.style.width = percentile + '%'
}

function clear() {
  output.textContent = '…%'
  fill.style.width = '0%'
}