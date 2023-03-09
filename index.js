function calculatePercentage() {
    var graphsSection = document.getElementById('graphs-section');
    graphsSection?.setAttribute("style", "display: none");
    var inputValue = document.getElementById('input-value')?.value;
    var maxValue = document.getElementById('max-value')?.value;
  
    if (inputValue && maxValue) {
      if (+inputValue > +maxValue) {
        setTimeout(() => {
          alert('Input value should be less than max value');
        }, 100);
      } else {
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
  
  function initialize() {
    console.log('loaded')
    var graphsSection = document.getElementById('graphs-section');
    graphsSection?.setAttribute("style", "display: none");
  }