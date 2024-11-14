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