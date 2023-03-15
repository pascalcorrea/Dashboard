// se importa el modulo de indicadores
import monedas from './modulo.js'
// se ejecuta el modulo de indicadores
monedas();

// se importa el modulo de grafico
import grafico from './graph.js'
// se ejecuta el modulo de grafico con la variable uf inicial
grafico('uf');

// se trae el elemento combobox
    let elemento = document.getElementById("combobox");
// se extrae el valor que se encuentra seleccionado en el combobox
    let valorElemento = elemento.options[elemento.selectedIndex].value;
// se extrae el texto en el elemento combobox
    let textoElemento = elemento.options[elemento.selectedIndex].text;

// funcion que ejecuta el modulo de grafico segun lo que contenga el elemento combobox
function seleccionaIndicador() {
    elemento = document.getElementById("combobox");
    valorElemento = elemento.options[elemento.selectedIndex].value;
    textoElemento = elemento.options[elemento.selectedIndex].text;

    const nuevograph = document.getElementById("graphbox");
    nuevograph.setAttribute("id","graphbox")
    nuevograph.innerHTML=``
    nuevograph.innerHTML=`
    <div class="chart-container">
        <canvas id="mychart" ></canvas>
    </div>`
    const titulo=document.getElementById("graphtitle")
    titulo.innerHTML=`
    <h2>${textoElemento}</h2>
    `

    grafico(valorElemento);
  }

  document
    .getElementById("combobox")
    .addEventListener("change",seleccionaIndicador);