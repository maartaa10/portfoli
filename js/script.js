let modoEscapeRoom = true;
const enllaç = document.querySelectorAll('#navbar a');

for (let i = 0; i < enllaç.length; i++) {
    enllaç[i].addEventListener('click', function(event) {
        event.preventDefault();
        const idSeccio = this.getAttribute('href').substring(1);

        const seccions = document.querySelectorAll('.seccioCont');
        for (let j = 0; j < seccions.length; j++) {
            seccions[j].style.display = 'none';
        }

        document.getElementById(idSeccio).style.display = 'block';
    });
}

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
function mostraProjectes() {
 
    document.getElementById('sobreMi').style.display = 'none';
    document.getElementById('projectes').style.display = 'block';
}


function comprovaCodiP() {
    const codi = document.getElementById('codiP').value.trim().toLowerCase();
    if (codi === "3") { 
        document.getElementById('projectes').innerHTML = `
         <h2>Projectes</h2>
            <p>Benvinguts a la secció de projectes; on la passió es troba amb l'execució.</p>
            <div class="projectesTot">
                <div class="targ">
                    <img src="./img/guardiana.png" alt="Guardiana">
                    <p><strong>Projecte 1</strong>: Guardiana</p>
                    <p>Sistema d'autenticació basat en el codi César. <strong>ATENCIO:</strong> Aquest projecte no es funcional en la vida real ja que el xifrat César és un tipus de criptografia molt dèbil, podríem trencar-lo en segons amb el Brute-Force Attack. Només és un projecte educatiu per saber de què sóc capaç en quant a ciberseguretat.</p>
                    <a href="https://github.com/maartaa10/Guardiana" target="_blank">Veure a GitHub</a>
                </div>
                <div class="targ">
                    <img src="./img/buscamines.jpeg" alt="BuscaMines">
                    <p><strong>Projecte 2</strong>: BuscaMines</p>
                    <p>Vaig desenvolupar una versió del clàssic joc Minesweeper en Java com a part d'un projecte per a la meva assignatura de programació. Aquest joc d'un sol jugador desafia l'usuari a descobrir les fitxes en un tauler mentre evita les mines ocultes. Vaig implementar diferents nivells de dificultat, permetent al jugador triar entre taulers predefinits o crear un personalitzat. Les característiques del joc inclouen la revelació de totes les mines en activar el mode "Pirata", i es va centrar en el codi clar i la usabilitat.</p>
                    <a href="https://github.com/maartaa10/Minesweeper" target="_blank">Veure a GitHub</a>
                </div>
                <div class="targ">
                    <img src="./img/hundirF.jpeg" alt="Hundir La Flota">
                    <p><strong>Projecte 3</strong>: Hundir La Flota</p>
                    <p>En aquest projecte fet en Java, vaig recrear el clàssic joc "Battleship" amb diferents nivells de dificultat. Des de configurar el taulell fins a enfonsar vaixells, ofereix una experiència de joc atractiva. Més enllà de l'entreteniment, em va ajudar a entendre conceptes de programació Java com arrays i condicionals. En general, em va ajudar a millorar les meves habilitats de resolució de problemes i em va introduir en el desenvolupament d'aplicacions en Java.</p>
                    <a href="https://github.com/maartaa10/BattleShip" target="_blank">Veure a GitHub</a>
                </div>
            </div>
            <button onclick="mostraSkills()">Següent</button>
        `;
    } else {
        alert('ERROR: CODI INCORRECTE. Torna-ho a provar.');
    }

}

function mostraSkills() {
 
    document.getElementById('projectes').style.display = 'none';
    document.getElementById('skills').style.display = 'block';
}

function comprovaSkills() {
    const codi = document.getElementById('codiS').value.trim().toLowerCase();
    if (codi === "3600") {  
        document.getElementById('skills').innerHTML = `
            <h2>Skills</h2>
            <div id="skillsTot">
              
                <div class="skillsColumn">
                    <h3>Llenguatges de Programació</h3>
                    <div class="skillTarg">
                        <h4>HTML</h4>
                        <div class="barra">
                            <div class="prog" style="width: 70%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Basic</p>
                    </div>
                    <div class="skillTarg">
                        <h4>CSS</h4>
                        <div class="barra">
                            <div class="prog" style="width: 60%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Basic</p>
                    </div>
                    <div class="skillTarg">
                        <h4>JavaScript</h4>
                        <div class="barra">
                            <div class="prog" style="width: 50%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Basic</p>
                    </div>
                    <div class="skillTarg">
                        <h4>Java</h4>
                        <div class="barra">
                            <div class="prog" style="width: 40%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Basic</p>
                    </div>
                </div>
                
                
                <div class="skillsColumn">
                    <h3>Idiomas</h3>
                    <div class="skillTarg">
                        <h4>Inglés</h4>
                        <div class="barra">
                            <div class="prog" style="width: 90%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Profesional</p>
                    </div>
                    <div class="skillTarg">
                        <h4>Español</h4>
                        <div class="barra">
                            <div class="prog" style="width: 100%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Natiu</p>
                    </div>
                    <div class="skillTarg">
                        <h4>Catala</h4>
                        <div class="barra">
                            <div class="prog" style="width: 80%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Natiu</p>
                    </div>
                </div>
            </div>
            <button onclick="mostraExperiencia()">Següent</button>  <!-- Cambio aquí -->
        `;
    } else {
        alert('ERROR: CODI INCORRECTE \n\nTorna-ho a provar..');
    }
}

function mostraExperiencia() {
    document.getElementById('skills').style.display = 'none';  
    document.getElementById('experiencia').style.display = 'block';  
}

function mostraContacte() {
    document.getElementById('experiencia').style.display = 'none';
    document.getElementById('contacte').style.display = 'block';
}
function comprovaCodiContacte() {
    const codi = document.getElementById('codiContacte').value.trim();
    if (codi === "9") { 
        document.getElementById('acertijoContacte').style.display = 'none'; 
        document.getElementById('contacteForm').style.display = 'block'; 
    } else {
        alert('ERROR: CODI INCORRECTE. Torna-ho a provar.');
    }
}
function mostraGracies() {
    document.getElementById('gracies').style.display = 'block';
    document.getElementById('contacte').style.display = 'none'; 
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projectes').style.display = 'none';
    document.getElementById('sobreMi').style.display = 'none'; 
    document.querySelectorAll('button').forEach(boto => {
        if (boto.textContent !== 'Reiniciar Escape Room' && boto.textContent !== 'Navegar Seccions') {
            boto.style.display = 'none'; 
        }
    });
}

function contacte(event) {
    event.preventDefault(); 

    document.getElementById('contacte').style.display = 'none';

    
    document.getElementById('gracies').style.display = 'block';
}

function reiniciarEscapeRoom() {
    document.getElementById('finalButtons').style.display = 'none';
    document.getElementById('benvi').style.display = 'flex';  
    document.getElementById('instruccions').style.display = 'none';
    document.getElementById('principal').style.display = 'none';
    document.getElementById('sobreMi').style.display = 'none';
    document.getElementById('projectes').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('contacte').style.display = 'none';
    document.getElementById('navbar').style.display = 'none'; 
}
function mostrarNavbar() {
    modoEscapeRoom = false;
    document.getElementById('navbar').style.display = 'block'; 
    document.querySelectorAll('.seccioCont').forEach(seccio => {
        seccio.style.display = 'none'; 
    });
}

function recarregaPag() {
    location.reload();
}


function navegarSeccions() {
    mostrarNavbar();
    document.getElementById('finalButtons').style.display = 'none';
    document.querySelectorAll('button').forEach(boto => {
        if (boto.textContent === 'Reiniciar Escape Room' || boto.textContent === 'Navegar Seccions') {
            boto.style.display = 'inline-block';
        } else {
            boto.style.display = 'none'; 
        }
        actualitzaBotons(); 
    });
}
function actualitzaBotons() {
    if (!modoEscapeRoom) {
        document.querySelectorAll('button').forEach(boto => {
          
            if (!boto.classList.contains('enviaBt')) {
                boto.style.display = 'none';
            } else {
                boto.style.display = 'inline-block'; 
            }
        });
    }
}
function comprovaCodiExperiencia() {
    const codi = document.getElementById('codiExperiencia').value.trim();
    if (codi === "3") { 
        ocultaEndevinalla(); 
        mostrarMapa(); 
    } else {
        alert('ERROR: CODI INCORRECTE. Torna-ho a provar.');
    }
}

function ocultaEndevinalla() {
  
    document.querySelector('section#experiencia p').style.display = 'none'; 
    document.getElementById('codiExperiencia').style.display = 'none'; 
    document.getElementById('btnExperiencia').style.display = 'none'; 
}

function mostrarMapa() {
   
    document.getElementById('mapa').style.display = 'block'; 
    document.getElementById('contacteBtn').style.display = 'inline-block';
    
   
    const mapa = L.map('mapa').setView([51.505, -0.09], 2);  
    
   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);

    
    L.marker([51.505, -0.09]).addTo(mapa)  
        .bindPopup("<strong>Google</strong><br>Hacker Étic<br>2010-2018<br>Vaig mitigar mes de 1000 vulnerabilitats en aplicacions")
        .openPopup();

    L.marker([40.7128, -74.0060]).addTo(mapa)  
        .bindPopup("<strong>MIT</strong><br>Especialista en Ciberseguretat<br>2015-2020<br>Auditoría de xarxes i sistemes")
        .openPopup();

    L.marker([34.0522, -118.2437]).addTo(mapa)  
        .bindPopup("<strong>Apple</strong><br>Enginyer de Software<br>2018-2022<br>Desenvolupament de sistemes de seguretat")
        .openPopup();
}
function dataFooter() {
    const ara = new Date();
    
    
    const dataFormt = ara.toLocaleDateString('es-ES'); 

    
    const dataIni = new Date(2024, 8, 16); 
    const temps = ara - dataIni; 
    const QuantDies = Math.floor(temps / (1000 * 60 * 60 * 24));
    
    document.getElementById('dataInfo').textContent = `Data: ${dataFormt} | Dies des del 16/09/2024: ${QuantDies}`;
}


dataFooter();