function atualizarContador() {
    const inicio = new Date("2018-11-28T00:00:00"); // Data inicial
    const agora = new Date(); // Data atual

    const diferenca = agora - inicio;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.4375));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `
        <div class="linha">
            <div class="bloco">
                <div class="valor">${anos}</div>
                <div class="label">anos</div>
            </div>
            <div class="bloco">
                <div class="valor">${meses}</div>
                <div class="label">meses</div>
            </div>
            <div class="bloco">
                <div class="valor">${dias}</div>
                <div class="label">dias</div>
            </div>
        </div>
        <div class="linha">
            <div class="bloco">
                <div class="valor">${horas}</div>
                <div class="label">horas</div>
            </div>
            <div class="bloco">
                <div class="valor">${minutos}</div>
                <div class="label">min</div>
            </div>
            <div class="bloco">
                <div class="valor">${segundos}</div>
                <div class="label">seg</div>
            </div>
        </div>
    `;
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chamada inicial
atualizarContador();