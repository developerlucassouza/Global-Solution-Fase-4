function OndaDeCalor(t, u) {
    let it = ((t - 30) / 5) * 2 + 1;
    let iu = 3 - (u / 60) * 2;

    let pesoT = 0.7;
    let pesoU = 0.3;

    let resultado = (pesoT * it + pesoU * iu) / (pesoT + pesoU);

    if (resultado < 1.5) { return "Risco Baixo" } 
    else if (resultado < 2.5) { return "Risco Moderado" }
    else { return "Risco Alto" }
}

function Enchentes(p, t, i, h, d) {
    let resultado = (p * i * t) / d + h;

    if (resultado < 50) { return "Risco Baixo" } 
    else if (resultado < 100) { return "Risco Moderado" }
    else { return "Risco Alto" }
}

function Sanitario(ca, as, ar, ph, pd) {
    let resultado = (ca * ph) + (ar / (pd + 1) ) + (1 - as);

    if (resultado < 1) { return "Risco Baixo" } 
    else if (resultado < 2) { return "Risco Moderado" }
    else { return "Risco Alto" }
}