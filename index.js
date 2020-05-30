
const minimum = 50000;
const price = 100000;
const vysledekELm = document.querySelector(".vysledek");


const trip = () => {
  const alena = Number(document.getElementById("alena").value);
  const karolina = Number(document.getElementById("karolina").value);
  const savings = alena + karolina;
  if (savings === price) {
    if (alena === karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Alena si našetřila ${alena} Kč a Karolína ${karolina} Kč, což je na chlup stejně a akorát, takže nemusíte nic vyrovnávat.`;
    } else if (alena > karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Požadovanou částku dohromady máte, ale Karolína našetřila méně než 50 000 Kč. Do této částky jí chybí ${minimum - karolina} Kč a po dovolené bude muset tuto částku splatit.`;
    } else if (alena < karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Požadovanou částku dohromady máte, ale Alena našetřila méně než 50 000 Kč. Do této částky jí chybí ${minimum - alena} Kč a po dovolené bude muset tuto částku splatit.`;
    }


  } else if (savings > price) {
    if (alena === karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Máte našetřeno více než jste chtěly, a obě jste našetřily stejně, takže si můžete dát o několik piña colad víc a roztočit to.`;
    } else if (alena > karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Požadovanou částku dohromady máte, a dokonce Alena našetřila o ${alena - minimum} Kč víc.`;
    } else if (alena < karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Požadovanou částku dohromady máte, a dokonce Karolína našetřila o ${karolina - minimum} Kč víc.`;
    }

  }

  else {
    if (alena === minimum) {
      vysledekELm.textContent = `Do ${price} Kč vám chybí ještě ${price - savings} Kč. Alena už naštřila alespoň polovinu, takže je to Karolína, kdo musí přidat ještě ${minimum - karolina} Kč.`;
    } else if (karolina === minimum) {
      vysledekELm.textContent = `Do ${price} Kč vám chybí ještě ${price - savings} Kč. Karolína už naštřila alespoň polovinu, takže je to Alena, kdo musí přidat ještě ${minimum - alena} Kč.`;
    } else if (alena > minimum) {
      vysledekELm.textContent = `Do ${price} Kč vám chybí ještě ${price - savings} Kč. Alena už ale alespoň našetřila půlku z požadované částky, takže Karolína musí přidat ještě ${price - savings} Kč.`;
    } else if (karolina > minimum) {
      vysledekELm.textContent = `Do ${price} Kč vám chybí ještě ${price - savings} Kč. Karolína už ale alespoň našetřila půlku z požadované částky, takže Alena musí přidat ještě ${price - savings} Kč.`;
    } else {
      vysledekELm.textContent = `Ani jedna nemáte ani polovinu z celkové částky, musíte dohromady nastřádat ještě ${price - savings} Kč.`;
    }
  }
};

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    trip()
    alena.value = "";
    karolina.value = "";
  }
}
);
const btnElm = document.querySelector("#btn");

btnElm.addEventListener("click", () => {
  trip();
  alena.value = "";
  karolina.value = "";
});




