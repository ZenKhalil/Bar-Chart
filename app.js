"use strict";

// Et array med 40 elementer der er tomme
const queue = new Array(40).fill(0);

// Funktion der opdaterer kø-diagrammet
function updateChart() {
  // Hent antal kunder fra en funktion
  const queueSize = getNumberOfCustomers();

  // Tilføj antal kunder til køen
  queue.push(queueSize);

  // Vis antal kunder og hele køen i konsollen (For at jeg kunne få et bedre overblik)
  console.log(`Queue size: ${queueSize}, queue: ${queue}`);

  // Hvis køen er længere end 40, fjern det ældste element
  if (queue.length > 40) {
    queue.shift();
  }

  // Hent alle kø-søjler og sæt højden på hver enkelt baseret på køens elementer
  const bars = document.querySelectorAll(".queue-bar");
  for (let i = 0; i < queue.length; i++) {
    const height = (queue[i] / 32) * 100;
    bars[i].style.height = `${height}%`;
  }
}

// Find kø-diagrammet på siden
const queueChart = document.getElementById("queue-chart");

// Opret 40 kø-søjler og tilføj dem til kø-diagrammet (Enten det eller manuelt oprette 40 div i html)
for (let i = 0; i < 40; i++) {
  const queueBar = document.createElement("div");
  queueBar.className = "queue-bar";
  queueChart.appendChild(queueBar);
}

// Opdatere kø hvert sekund
setInterval(updateChart, 1000);

// Funktion der giver et tilfældigt antal kunder
function getNumberOfCustomers() {
  return Math.floor(Math.random()*32);
}