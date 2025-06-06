const equipos = [
  { nombre: "LAST MINUTE TEAM", victorias: 5, derrotas: 2, tiempo: 160.2 },
  { nombre: "PENTANILO", victorias: 5, derrotas: 3, tiempo: 182.9 },
  { nombre: "SPACE KEVINS", victorias: 5, derrotas: 4, tiempo: 170.5 },
  { nombre: "SMOKE PHOENIX", victorias: 5, derrotas: 4, tiempo: 176.6 },
  { nombre: "EL HOYO", victorias: 5, derrotas: 4, tiempo: 187.9 },
  { nombre: "UNICORNS OF BOLIVIA", victorias: 4, derrotas: 3, tiempo: 164.7 },
  { nombre: "BANNING NOOBS", victorias: 3, derrotas: 4, tiempo: 96.2 },
  { nombre: "O7", victorias: 3, derrotas: 5, tiempo: 102.2 },
  { nombre: "KOROROKO", victorias: 3, derrotas: 6, tiempo: 112.3 },
  { nombre: "EVIL CORP", victorias: 2, derrotas: 5, tiempo: 75.8 }
];

const jugadores = [
  "Roggan - 7.77 KDA",
  "DiegoKiller - 6.5 KDA",
  "Darknesson - 5.93 KDA",
  "Circos - 5.93 KDA",
  "Vonsaz - 5.63 KDA"
];

function mostrarClasificacion() {
  const tbody = document.querySelector("#tabla-clasificacion tbody");
  tbody.innerHTML = "";

  const ordenados = [...equipos].sort((a, b) => {
    if (b.victorias !== a.victorias) return b.victorias - a.victorias;
    return a.tiempo - b.tiempo;
  });

  ordenados.forEach((equipo, index) => {
    const fila = document.createElement("tr");
    if (index < 8) fila.classList.add("top-8");
    if (index >= ordenados.length - 2) fila.classList.add("last-2");

    fila.innerHTML = `
      <td>${equipo.nombre}</td>
      <td>${equipo.victorias}</td>
      <td>${equipo.derrotas}</td>
      <td>${equipo.tiempo} min</td>
    `;
    tbody.appendChild(fila);
  });
}

function mostrarJugadoresTop() {
  const lista = document.getElementById("top-jugadores");
  jugadores.forEach((j) => {
    const li = document.createElement("li");
    li.textContent = j;
    lista.appendChild(li);
  });
}

window.onload = () => {
  mostrarClasificacion();
  mostrarJugadoresTop();
};
