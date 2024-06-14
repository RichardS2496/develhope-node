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

luckyDraw("Joe")
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error))
  .finally(() => console.log("Participacion de Joe"));
luckyDraw("Caroline")
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error))
  .finally(() => console.log("Participacion de Caroline"));
luckyDraw("Sabrina")
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error))
  .finally(() => console.log("Participacion de Sabrina"));
