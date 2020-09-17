const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}


const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) =>{
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) =>{
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
function id(valor_campo)
    {
        return document.getElementById(valor_campo);
    }
function getValor(valor_campo)
{
    var valor = document.getElementById(valor_campo).value.replace(',','.');
    return parseFloat(valor) * 100;
}

function soma()
{
    var total = getValor('produto2') + getValor('produto1');
    id('resultado').value = total / 100;
}