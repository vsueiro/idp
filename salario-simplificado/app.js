// List must have 100 items for calculation to work
const salaries = [80,100,150,200,200,240,300,300,300,350,400,400,450,500,500,500,600,600,600,700,750,800,800,900,900,937,937,937,937,937,937,937,937,937,937,937,937,950,1000,1000,1000,1000,1000,1000,1000,1040,1100,1100,1170,1200,1200,1200,1200,1200,1200,1270,1300,1300,1400,1400,1500,1500,1500,1500,1500,1500,1500,1600,1600,1700,1800,1800,1900,2000,2000,2000,2000,2000,2000,2200,2400,2500,2500,2500,2800,3000,3000,3000,3000,3500,4000,4000,4500,5000,5000,6000,7000,9000,12000,Infinity]

function calculate( event ) {

  event.preventDefault()

  const value = parseInt( input.value )
  let percentile = 0

  for ( let salary of salaries ) {
    if ( salary > value ) {
      show( percentile )
      break
    }
    percentile++
  }
}

function show( percentile ) {
  output.textContent = percentile
  progress.value = percentile
}

form.addEventListener( 'submit', calculate )