// Declare global variables

let input     = document.querySelector( 'input' )
let button    = document.querySelector( 'button' )
let output    = document.querySelector( '.output' )
let fill      = document.querySelector( '.fill' )
let highlight = document.querySelector( '.highlight' )
let salaries



// Update results

function update() {

  // Cast input, from string to number
  let value = parseInt( input.value )

  // Check if input is valid
  if ( value > 0 ) {

    // Show highlight only after user input
    highlight.classList.add( 'visible' )

    // Begin from lowest 1% of salaries
    let percentil = 0

    // Loop through all 100 salary ranges
    for ( let salary of salaries ) {

      // Check for upper limit
      if ( salary == 'Infinity' )
        salary = Infinity

      // Check salary match
      if ( value < salary ) {

        // Update text
        output.textContent = 'Você ganha mais que ' +  percentil + '% dos brasileiros:'

        // Update bar chart
        fill.style.width = percentil + '%'
        highlight.style.left = percentil + '%'

        // Look no further
        break

      }
      
      // Increment 
      percentil++

    }

  } else {

    // Handle input error
    alert( 'Insira um salário válido' )

  }

}



// Load data

fetch( 'data.json' )
  .then( response => response.json() )
  .then( data => {

    // Assign data to global variable
    salaries = data

    // Handle click on button
    button.addEventListener( 'click', update )

  } )