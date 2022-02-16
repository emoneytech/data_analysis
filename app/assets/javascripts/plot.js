function draw(expression, canvas_id, range) {
  try {
    const expr = math.compile(expression.replace("**", "^"))
    const xValues = math.range(range[0], range[1], range[2]).toArray()
    const yValues = xValues.map(function (x) {
      return expr.evaluate({x: x})
    })
    const trace1 = {
      x: xValues,
      y: yValues,
      type: 'scatter'
    }
    const data = [trace1]
    Plotly.newPlot(canvas_id, data)
  }
  catch (err) {
    console.error(err)
    alert(err)
  }
}

function calculateExpression(eq, opts) {
  try {
    const expr = math.compile(eq)
    return expr.evaluate(opts)
  }
  catch (err) {
    console.error(err)
    alert(err)
  }
}

function formatFactor(factor) { 
  return `${factor.toFixed(3)} %`
}