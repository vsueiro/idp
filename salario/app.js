let salaries = []

fetch( 'salaries.json' )
  .then( response => response.json() )
  .then( data     => salaries = data )

function validate() {

  const value = parseInt( input.value )
  
  if ( isNaN( value ) || value < 0 )
    clear()
  else
    calculate( value )

}

function calculate( value ) {

  for ( let salary of salaries ) {
    if ( value > salary.lowerLimit ) {
      show( salary.percentile )
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
  fill.removeAttribute( 'style' )
}

input.addEventListener( 'input', validate )