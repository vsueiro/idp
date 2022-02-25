let salaries = []

fetch( 'salaries.json' )
  .then( response => response.json() )
  .then( data     => salaries = data )

function calculate( event ) {

  event.preventDefault()
  const value = parseInt( input.value )

  for ( let salary of salaries ) {
    if ( value > salary.lowerLimit ) {
      show( salary.percentile )
      break
    }
  }

}

function show( percentile ) {
  output.textContent = percentile
  progress.value = percentile
}

form.addEventListener( 'submit', calculate )