fetch("https://api.coingecko.com/api/v3/coins/list")
  .then(response => response.json())
  .then(data => {
    let output = "";
    data.forEach(coin => {
      output += `
        <div class="coin">
          <h2>${coin.name}</h2>
          <p>${coin.symbol}</p>
        </div>
      `;
    });
    document.getElementById("data").innerHTML = output;

    
    const search = document.getElementById("search");
    search.addEventListener("keyup", () => {
      const term = search.value.toLowerCase();
      const coins = document.getElementsByClassName("coin");
      Array.from(coins).forEach(coin => {
        const name = coin.getElementsByTagName("h2")[0].innerText;
        const symbol = coin.getElementsByTagName("p")[0].innerText;
        if (name.toLowerCase().indexOf(term) != -1 || symbol.toLowerCase().indexOf(term) != -1) {
          coin.style.display = "block";
        } else {
          coin.style.display = "none";
        }
      });
    });
  });
