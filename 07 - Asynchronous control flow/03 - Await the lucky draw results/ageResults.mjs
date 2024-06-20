function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function ageResults() {
  const players = ["Tina", "Jorge", "Julien"];

  for (const player of players) {
    try {
      const result = await luckyDraw(player);
      console.log(`${player}, ${result}`);
    } catch (error) {
      console.error(`${player}:`, error.message);
    }
  }
}

ageResults();
