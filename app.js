const equipos = [
  { nombre: "LAST MINUTE TEAM", victorias: 6, derrotas: 3, tiempo: 160.2, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/lmt.png" },
  { nombre: "PENTANILO", victorias: 6, derrotas: 3, tiempo: 182.9, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/pentanilo.png" },
  { nombre: "SPACE KEVINS", victorias: 5, derrotas: 4, tiempo: 170.5, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/sk.png" },
  { nombre: "SMOKE PHOENIX", victorias: 5, derrotas: 4, tiempo: 176.6, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/skx2.png" },
  { nombre: "EL HOYO", victorias: 5, derrotas: 4, tiempo: 187.9, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/hyo.png" },
  { nombre: "UNICORNS OF BOLIVIA", victorias: 5, derrotas: 3, tiempo: 164.7, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/uob.png" },
  { nombre: "BANNING NOOBS", victorias: 3, derrotas: 5, tiempo: 96.2, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/bn.png" },
  { nombre: "O7", victorias: 3, derrotas: 5, tiempo: 102.2, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/07.png" },
  { nombre: "KOROROKO", victorias: 3, derrotas: 6, tiempo: 112.3, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/koko.png" },
  { nombre: "EVIL CORP", victorias: 2, derrotas: 6, tiempo: 75.8, logo: "images/Logos_equipos_T10 (1)/Logos_equipos/ecorp.png" }
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
    if (index < 8) fila.classList.add("clasificado");
    if (index >= ordenados.length - 2) fila.classList.add("last-2");

    fila.innerHTML = `
      <td>
        <img src="${equipo.logo}" alt="${equipo.nombre} logo" class="team-logo">
        ${equipo.nombre}
      </td>
      <td>${equipo.victorias}</td>
      <td>${equipo.derrotas}</td>
      <td>${equipo.tiempo} min</td>
    `;
    tbody.appendChild(fila);
  });
}

function mostrarPartidosSemana() {
  const matches = [
    {
      date: '2025-06-09T20:00:00',
      team1: { name: 'BN', logo: 'images/Logos_equipos_T10 (1)/Logos_equipos/bn.png' },
      team2: { name: 'EC', logo: 'images/Logos_equipos_T10 (1)/Logos_equipos/ecorp.png' },
      tournament: 'MV • Regular',
      type: 'MEJOR DE 1'
    },
    {
      date: '2025-06-10T22:30:00',
      team1: { name: 'O7', logo: 'images/Logos_equipos_T10 (1)/Logos_equipos/07.png' },
      team2: { name: 'UOB', logo: 'images/Logos_equipos_T10 (1)/Logos_equipos/ecorp.png' },
      tournament: 'MV • Regular',
      type: 'MEJOR DE 1'
    },
  ];

  const container = document.getElementById('match-schedule');
  if (!container) return;
  container.innerHTML = "";

  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay() + 1);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  matches.forEach(match => {
    const matchDate = new Date(match.date);
    if (matchDate >= startOfWeek && matchDate <= endOfWeek) {
      const hour = matchDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      container.innerHTML += `
        <div class="match">
          <div class="match-teams">
            <div class="team">
              <img class="team-logo" src="${match.team1.logo}" alt="${match.team1.name}">
              <span>${match.team1.name}</span>
            </div>
            <span> / </span>
            <div class="team">
              <img class="team-logo" src="${match.team2.logo}" alt="${match.team2.name}">
              <span>${match.team2.name}</span>
            </div>
          </div>
          <div class="match-details">
            <div>${matchDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short' })} - ${hour}</div>
            <div>${match.tournament} • ${match.type}</div>
          </div>
        </div>
      `;
    }
  });
}

mostrarClasificacion();
mostrarPartidosSemana();
