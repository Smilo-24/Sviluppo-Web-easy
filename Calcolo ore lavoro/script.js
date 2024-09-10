function calcolaOraUscita() {
    // Ottieni i valori di input
    var oraEntrata = document.getElementById("entry-time").value;
    var oraInizioPausa = document.getElementById("lunch-start-time").value;
    var oraFinePausa = document.getElementById("lunch-end-time").value;

    // Converti i valori di input in minuti
    var minutiEntrata = convertiTempoInMinuti(oraEntrata);
    var minutiInizioPausa = convertiTempoInMinuti(oraInizioPausa);
    var minutiFinePausa = convertiTempoInMinuti(oraFinePausa);

    // Calcola i minuti totali di lavoro
    var minutiLavoroMattina = minutiInizioPausa - minutiEntrata;
    var minutiLavoroPomeriggio = (8 * 60) - minutiLavoroMattina; // 8 ore di lavoro meno il lavoro del mattino
    var minutiUscita = minutiFinePausa + minutiLavoroPomeriggio;

    // Converti i minuti totali in orario
    var oraUscita = convertiMinutiInTempo(minutiUscita);

    // Mostra il risultato
    document.getElementById("result").innerHTML = "Oggi uscirai dal lavoro alle " + oraUscita;
}

function convertiTempoInMinuti(tempo) {
    var ore = parseInt(tempo.split(":")[0]);
    var minuti = parseInt(tempo.split(":")[1]);
    return ore * 60 + minuti;
}

function convertiMinutiInTempo(minuti) {
    var ore = Math.floor(minuti / 60);
    var minutiRimanenti = minuti % 60;
    return (ore < 10 ? "0" : "") + ore + ":" + (minutiRimanenti < 10 ? "0" : "") + minutiRimanenti;
}
