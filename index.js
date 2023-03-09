/*
  This is JavaScript code that is responsible for calculating the percentage
  based on user input and updating the graphs accordingly.
  The calculatePercentage() function is called when the user inputs a value and a maximum value.
*/
function calculatePercentage() {
  /*
    The function first hides the graphs section using the CSS display: none property.
    It then retrieves the input value and maximum value from the input fields using
    the getElementById() method. If both values exist, the function calculates the
    percentage by dividing the input value by the maximum value and multiplying by 100.
  */
  var graphsSection = document.getElementById('graphs-section');
  graphsSection?.setAttribute("style", "display: none");
  var inputValue = document.getElementById('input-value')?.value;
  var maxValue = document.getElementById('max-value')?.value;

  if (inputValue && maxValue) {
    /*
      If the input value is greater than the maximum value, the function displays
      an alert message to the user using the alert() method.
      Otherwise, the function updates the graphs with the calculated percentage.
    */
    if (+inputValue > +maxValue) {
      setTimeout(() => {
        alert('Input value should be less than max value');
      }, 100);
    } else {
      /*
        The function retrieves the necessary HTML elements using getElementById()
        and updates their styles using the setAttribute() method. The innerText
        property is used to update the percentage text elements with the calculated
        percentage value. Finally, the graphsSection element is displayed by setting
        its display style property to block.
      */
      var percentage = (+inputValue / +maxValue) * 100;
      var percentageElements = document.querySelectorAll('[id=percentage]');
      var bar = document.getElementById('bar');
      var gradientBar = document.getElementById('gradient-bar');
      var pieChart = document.getElementById('pie-chart');

      bar?.setAttribute("style", `height: ${percentage}%`);
      gradientBar?.setAttribute("style", `height: ${percentage}%`);
      pieChart?.setAttribute("style", `background: conic-gradient(#008CFF ${percentage}%, 0, #C2E3FF)`);
      console.log(percentageElements)
      if (percentageElements && percentageElements.length > 0) {
        percentageElements.forEach(percentageElement => {
          percentageElement.innerText = `${percentage}%`;
        });
      }
      graphsSection?.setAttribute("style", "display: block");
    }
  }
}

/*
  The initialize() function is called when the page loads and hides the
  graphs section using the same method as calculatePercentage().
*/
function initialize() {
  console.log('loaded')
  var graphsSection = document.getElementById('graphs-section');
  graphsSection?.setAttribute("style", "display: none");
}
