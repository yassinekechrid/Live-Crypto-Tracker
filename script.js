oldprix = null;
function savelocal(oldprix) {
    localStorage.setItem("oldprix", oldprix);
    console.log("saved prix:", oldprix);
}
 async function getCrypto() {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur");
    const data = await response.json();
    const oldprix = localStorage.getItem("oldprix");
    if (oldprix !== null) {
        if (data.bitcoin.eur > oldprix) {
            document.getElementById("crypto-container").innerHTML = `<p style="color: green;">Le prix actuel du Bitcoin est de ${data.bitcoin.eur} euros.</p>`;
            savelocal(data.bitcoin.eur);
        }else if (data.bitcoin.eur < oldprix) {
            document.getElementById("crypto-container").innerHTML = `<p style="color: red;">Le prix actuel du Bitcoin est de ${data.bitcoin.eur} euros.</p>`;
            savelocal(data.bitcoin.eur);
        }
    } else {
        document.getElementById("crypto-container").innerHTML = `Le prix actuel du Bitcoin est de ${data.bitcoin.eur} euros.`;
        savelocal(data.bitcoin.eur);
    }
    console.log("prix saved", data.bitcoin.eur);
}
getCrypto();
setInterval(getCrypto, 30000);