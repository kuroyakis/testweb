// Datos
const jugadores = [
  { nombre: "Darknesson", puntos: 7, img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Circos", puntos: 5, img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Pinti", puntos: 7, img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Petasuh", puntos: 12, img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Galaik", puntos: 4, img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Riskke", puntos: 2, img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" }
];

const leyendas = [
  { nombre: "Darknesson", splits: "9", img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Petasuh", splits: "9", img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Drew", splits: "7", img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Roro", splits: "6", img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Jackies", splits: "5", img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Circos", splits: "5", img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "Galaik", splits: "3", img: "../images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" }
];

// Funciones para crear tablas
function crearTablaJugadores() {
  const div = document.createElement("section");
  div.className = "left";
  div.innerHTML = `
    <h2>Jugadores Actuales</h2>
    <table>
      <thead>
        <tr><th></th><th>Jugador</th><th>Puntos</th></tr>
      </thead>
      <tbody>
        ${jugadores.map(j => `
          <tr>
            <td><img src="${j.img}" alt="${j.nombre}" style="height:30px;"></td>
            <td>${j.nombre}</td>
            <td>${j.puntos}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
  return div;
}

function crearTablaLeyendas() {
  const div = document.createElement("section");
  div.className = "right";
  div.innerHTML = `
    <h2>Jugadores Leyenda</h2>
    <table>
      <thead>
        <tr><th> </th><th>Jugador</th><th>Splits</th></tr>
      </thead>
      <tbody>
        ${leyendas.map(l => `
          <tr>
            <td><img src="${l.img}" alt="${l.nombre}" style="height:30px;"></td>
            <td>${l.nombre}</td>
            <td>${l.splits}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
  return div;
}

// Renderizar tablas
const contenedor = document.getElementById("contenedor-tablas");
contenedor.appendChild(crearTablaJugadores());
contenedor.appendChild(crearTablaLeyendas());
