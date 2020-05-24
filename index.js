
const minimum = 50000;
const price = 100000;
const vysledekELm = document.querySelector(".vysledek");


const trip = () => {
  const Alena = Number(document.getElementById("Alena").value);
  const Karolina = Number(document.getElementById("Karolina").value);
  const savings = Alena + Karolina;
  if (savings == price) {
    if (Alena == Karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Alena si našetřila ${Alena} Kč a Karolína ${Karolina} Kč, což je na chlup stejně a akorát, takže nemusíte nic vyrovnávat.`;
    } else if (Alena > Karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Požadovanou částku dohromady máte, ale Karolína našetřila méně než 50 000 Kč, takže pak doplatí ještě ${minimum - Karolina} Kč.`;
    } else if (Alena < Karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Požadovanou částku dohromady máte, ale Alena našetřila méně než 50 000 Kč, takže pak doplatí ještě ${minimum - Alena} Kč.`;
    }


  } else if (savings > price) {
    if (Alena == Karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Máte našetřeno více než jste chtěly, a obě jste našetřily stejně, takže si můžete dát o několik piña colad víc a roztočit to.`;
    } else if (Alena > Karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Požadovanou částku dohromady máte, a dokonce Alena našetřila o ${Alena - minimum} Kč víc.`;
    } else if (Alena < Karolina) {
      vysledekELm.textContent = `Hurá! Můžete si balit kufry. Požadovanou částku dohromady máte, a dokonce Karolína našetřila o ${Karolina - minimum} Kč víc.`;
    }

  }

  else {
    if (Alena == minimum) {
      vysledekELm.textContent = `Do ${price} Kč vám chybí ještě ${price - savings} Kč. Alena už naštřila alespoň polovinu, takže je to Karolína, kdo musí přidat ještě ${minimum - Karolina} Kč.`;
    } else if (Karolina == minimum) {
      vysledekELm.textContent = `Do ${price} Kč vám chybí ještě ${price - savings} Kč. Karolína už naštřila alespoň polovinu, takže je to Alena, kdo musí přidat ještě ${minimum - Alena} Kč.`;
    } else if (Alena > minimum) {
      vysledekELm.textContent = `Do ${price} Kč vám chybí ještě ${price - savings} Kč. Alena už ale alespoň našetřila půlku z požadované částky, takže Karolína musí přidat ještě ${price - savings} Kč.`;
    } else if (Karolina > minimum) {
      vysledekELm.textContent = `Do ${price} Kč vám chybí ještě ${price - savings} Kč. Karolína už ale alespoň našetřila půlku z požadované částky, takže Alena musí přidat ještě ${price - savings} Kč.`;
    } else {
      vysledekELm.textContent = `Ani jedna nemáte ani polovinu z celkové částky, musíte dohromady nastřádat ještě ${price - savings} Kč.`;
    }
  }
};

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    trip()
    Alena.value = "";
    Karolina.value = "";
  }
}
);
const btnElm = document.querySelector("#btn");

btnElm.addEventListener("click", () => {
  trip();
  Alena.value = "";
  Karolina.value = "";
});




