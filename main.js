function creatdgame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/${player1}.svg" alt="${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/${player2}.svg" alt="${player2}" />
  </li>          
  `
}
let delay = -0.3;
function createdcard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}
document.querySelector("#cards").innerHTML =
  createdcard(
    "24/11",
    "Quinta",
    creatdgame("icon.suica", "7:00", "icon.camaroes") +
      creatdgame("icon.uruguai", "10:00", "icon-coreia") +
      creatdgame("icon.portugal", "13:00", "icon-gana") +
      creatdgame("icon-brasil", "16:00", "icon-servia")
  ) +
  createdcard(
    "25/11",
    "Sexta",
    creatdgame("icon.suica", "7:00", "icon-iran") +
      creatdgame("icon-qatar", "10:00", "icon-senegal") +
      creatdgame("icon-netherlands", "13:00", "icon-ecuador") +
      creatdgame("icon-england", "16:00", "icon-united states")
  ) +
  createdcard(
    "26/11",
    "Sabado",
    creatdgame("icon-tunisia", "7:00", "icon-australia") +
      creatdgame("icon-poland", "10:00", "icon-saudi arabia") +
      creatdgame("icon-france", "13:00", "icon-denmark") +
      creatdgame("icon-argentina", "16:00", "icon-mexico")
  ) +
  createdcard(
    "27/11",
    "Domingo",
    creatdgame("icon.camaroes", "7:00", "icon-servia") +
      creatdgame("icon-coreia", "10:00", "icon-gana") +
      creatdgame("icon-brasil", "13:00", "icon.suica") +
      creatdgame("icon.portugal", "16:00", "icon.uruguai")
  )
