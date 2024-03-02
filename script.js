const ERROR1 = document.getElementById("error1");
const ERROR2 = document.getElementById("error2");
const RESULTADO = document.getElementById("resultadoHS");
const RESULTADO1500 = document.getElementById("resultadoSC1500");
const RESULTADO2000 = document.getElementById("resultadoSC2000");
const BUTTON = document.getElementById("calcular").addEventListener("click", () => {
    const PESO = document.getElementById("peso").value;
    ERROR1.style.display = "none";
    ERROR2.style.display = "none";
    RESULTADO.style.display = "none";
    RESULTADO1500.style.display = "none";
    RESULTADO2000.style.display = "none";
    if (PESO == "" || PESO == 0) {
        ERROR1.style.display = "block";
    } else if (PESO < 0) {
        ERROR2.style.display = "block";
    } else if (PESO <= 30) {
        hollidaySegar(parseFloat(PESO));
    } else {
        superficieCorporal(parseFloat(PESO));
    }
});

function hollidaySegar(peso) {
    let volumenDiario;
    if (peso <= 10) {
        volumenDiario = peso * 100;
    } else if (peso <= 20) {
        volumenDiario = 1000 + (peso - 10) * 50;
    } else {
        volumenDiario = 1500 + (peso - 20) * 20;
    }
    let mantenimiento = volumenDiario / 24;
    let mm2 = mantenimiento * 1.5;

    document.getElementById("rhs1").innerHTML = "Volumen Diario= " + Math.round(volumenDiario) + "cc";
    document.getElementById("rhs2").innerHTML = "Mantenimiento= " + Math.round(mantenimiento) + "cc/hr";
    document.getElementById("rhs3").innerHTML = "M+M/2= " + Math.round(mm2) + "cc/hr";
    RESULTADO.style.display = "block";
}

function superficieCorporal(peso) {
    let sc = (peso * 4 + 7) / (peso + 90);

    let volumenDiario1500 = sc * 1500;
    let mantenimiento1500 = volumenDiario1500 / 24;
    let mm1500 = mantenimiento1500 * 1.5;

    let volumenDiario2000 = sc * 2000;
    let mantenimiento2000 = volumenDiario2000 / 24;
    let mm2000 = mantenimiento2000 * 1.5;

    document.getElementById("rsc15001").innerHTML =
    "Volumen Diario= " + Math.round(volumenDiario1500) + "cc";
    document.getElementById("rsc15002").innerHTML = 
    "Mantenimiento= " + Math.round(mantenimiento1500) + "cc/hr";
    document.getElementById("rsc15003").innerHTML = "M+M/2= " + Math.round(mm1500) + "cc/hr";
    RESULTADO1500.style.display = "block";
    
    document.getElementById("rsc20001").innerHTML =
    "Volumen Diario= " + Math.round(volumenDiario2000) + "cc";
    document.getElementById("rsc20002").innerHTML = 
    "Mantenimiento= " + Math.round(mantenimiento2000) + "cc/hr";
    document.getElementById("rsc20003").innerHTML = "M+M/2= " + Math.round(mm2000) + "cc/hr";
    RESULTADO2000.style.display = "block";
}