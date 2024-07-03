function calcular() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    const area = base * altura;
    const perimetro = 2 * (base + altura);
    const diagonal = Math.sqrt(base * base + altura * altura);

    document.getElementById('area').innerText = area.toFixed(2);
    document.getElementById('perimetro').innerText = perimetro.toFixed(2);
    document.getElementById('diagonal').innerText = diagonal.toFixed(2);
}