function mostraInstruccions() {
    document.getElementById('benvi').style.display = 'none';
    document.getElementById('instruccions').style.display = 'block';

    const str = "Benvingut a l'Escape Room.\nResol les endevinalles per desbloquejar cada secció.\nMolta sort!"; 

    let i = 0;

    function maquinaEscriure() {
        if (i < str.length) {
           
            if (str[i] === '\n') {
                document.getElementById('resu').innerHTML += '<br>';  
            } else {
                document.getElementById('resu').innerHTML += str[i];  
            }
            i++;
            setTimeout(maquinaEscriure, 100); 
        } else {
            document.getElementById('començaBt').style.display = 'inline-block';  
        }
    }

    maquinaEscriure(); 
}

function mostraRellotge() {
    const ara = new Date();
    const hores = ara.getHours();
    const mins = ara.getMinutes();
    const segs = ara.getSeconds();
    
    const hores2 = (hores < 10 ? '0' : '') + hores;
    const mins2 = (mins < 10 ? '0' : '') + mins;
    const segs2 = (segs < 10 ? '0' : '') + segs;
    
    document.getElementById('rellotg').textContent = `${hores2}:${mins2}:${segs2}`;
}


setInterval(mostraRellotge, 1000);

function començaEscapeRoom() {
    document.getElementById('instruccions').style.display = 'none';
    document.getElementById('principal').style.display = 'block';
    mostraSobreMi();
}
function mostraSobreMi() {
    document.getElementById('sobreMi').style.display = 'block';
    document.getElementById('projectes').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('contacte').style.display = 'none';
}
function comprovaCodiSM() {
    const codi = document.getElementById('codiSM').value.trim().toLowerCase();
    if (codi === "12") {  
        document.getElementById('sobreMi').innerHTML = `
            <h2>Sobre Mi</h2>
            <p>¡Hola! Em dic Marta Rodrigo, soc estudiant d’últim any de Desenvolupament
            d'Aplicacions Web (DAW) amb una gran passió per la
            ciberseguretat. <br> He completat diversos cursos en línia
            sobre hacking, pentesting i criptografia, i estic
            desitjant aplicar els meus coneixements en el món real.  <br> Aprenc ràpidament i soc una persona proactiva,
            a qui li agraden els reptes i les noves experiències.  <br>
            Tinc una mentalitat creativa i analítica que em permet
            resoldre problemes i innovar solucions.</p>
            <button onclick="mostraProjectes()">Seguent Repte!</button>
        `;
    } else {
        alert('ERROR: CODI INCORRECTE. Torna-ho a provar.');
    }
}

