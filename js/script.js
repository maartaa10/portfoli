
/*------------------------------- GENERAL-------------------------------*/
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
function començaEscapeRoom() {
    document.getElementById('instruccions').style.display = 'none';
    document.getElementById('principal').style.display = 'block';
    mostraSobreMi();
}
/*------------------------------- SECCIÓ: Instruccions-------------------------------*/
function mostraInstruccions() {
    document.getElementById('benvi').style.display = 'none';
    document.getElementById('instruccions').style.display = 'block';

    const str = "Benvingut a l'Escape Room.\nResol les endevinalles per desbloquejar cada secció.\nMolta sort!"; 

    let i = 0;
    const musica = document.getElementById('musica');
    musica.play(); 
   
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
/*------------------------------- SECCIÓ: header-------------------------------*/
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

/*------------------------------- SECCIÓ: SObre Mi-------------------------------*/
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
    <p>Hola! Em dic Marta Rodrigo, soc estudiant d'últim any de Desenvolupament d'Aplicacions Web (DAW) amb una gran passió per la ciberseguretat.<br> 
    He completat diversos cursos en línia sobre hacking, pentesting i criptografia, i estic desitjant aplicar els meus coneixements en el món real.<br>  
    Aprenc ràpidament i soc una persona proactiva, a qui li agraden els reptes i les noves experiències.<br>  
    Tinc una mentalitat creativa i analítica que em permet resoldre problemes i innovar solucions.<br><br>

    El meu interès per la ciberseguretat va començar quan tenia uns 9-10 anys, quan vaig descobrir Jumpstart, una eina que permetia explorar les vulnerabilitats del sistema Wi-Fi WEP. <br>
    Aquest sistema de seguretat, que era força comú a l'època, utilitzava una clau fixa i poc segura que es podia desxifrar fàcilment (per això va ser substituït per WPA i WPA2). <br> 
    Amb aquella eina vaig "hackejar" la contrasenya del WiFi d'un veí, i tot i que la meva acció no era ètica (i no ho recomano), va ser amb aquesta experiència quan em vaig quedar fascinada pel potencial de la ciberseguretat i, des de llavors, no he deixat d’aprendre'n més. Estic emocionada de seguir explorant aquest camp, aplicar el que sé i afrontar els nous reptes que sorgeixen cada dia.</p>
    
    <img src="./img/sobremi.jpeg" alt="" style="max-width: 50%; height: auto;"/>
    <br>
    <button onclick="mostraProjectes()">Seguent Repte!</button>
`;

    } else {
        alert('ERROR: CODI INCORRECTE. Torna-ho a provar.');
    }
}
/*------------------------------- SECCIÓ: Projectes-------------------------------*/
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

/*------------------------------- SECCIÓ: Skills-------------------------------*/
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
                    <h3>Idiomes</h3>
                    <div class="skillTarg">
                        <h4>Anglés</h4>
                        <div class="barra">
                            <div class="prog" style="width: 70%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Profesional</p>
                    </div>
                     <div class="skillTarg">
                        <h4>Italià</h4>
                        <div class="barra">
                            <div class="prog" style="width: 20%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Basic</p>
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
                            <div class="prog" style="width: 100%;"></div>
                        </div>
                        <p class="skillNivell">Nivell: Natiu</p>
                    </div>
                </div>
            </div>
            <button onclick="mostraExperiencia()">Següent</button> 
        `;
    } else {
        alert('ERROR: CODI INCORRECTE \n\nTorna-ho a provar..');
    }
}
/*------------------------------- SECCIÓ: EXperiencia-------------------------------*/

function mostraExperiencia() {
    document.getElementById('skills').style.display = 'none';  
    document.getElementById('experiencia').style.display = 'block';  
}

function comprovaCodiExperiencia() {
    const codi = document.getElementById('codiExperiencia').value.trim();
    if (codi === "3") {
        ocultaEndevinalla(); 
        mostrarDescripcioExperiencia(); 
        mostrarMapa(); 
    } else {
        alert('ERROR: CODI INCORRECTE. Torna-ho a provar.');
    }
}


function mostrarDescripcioExperiencia() {
    document.getElementById('descripcioExperiencia').style.display = 'block'; 
}


function ocultaEndevinalla() {
    document.getElementById('descripcioExperiencia').style.display = 'block';
    document.getElementById('codiExperiencia').style.display = 'none';
    document.getElementById('btnExperiencia').style.display = 'none';
    document.querySelector('section#experiencia p:nth-of-type(2)').style.display = 'none'; 
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
        .bindPopup("<strong>Apple</strong><br>Enginyera de Software<br>2018-2022<br>Desenvolupament de sistemes de seguretat")
        .openPopup();
}

/*------------------------------- SECCIÓ: Contacte-------------------------------*/
function mostraContacte() {
    document.getElementById('educacio').style.display = 'none'; 
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

function contacte(event) {
    event.preventDefault(); 

    document.getElementById('contacte').style.display = 'none';

    
    document.getElementById('gracies').style.display = 'block';
}


/*------------------------------- SECCIÓ: Final escape room-------------------------------*/
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
/*------------------------------- SECCIÓ: Educacio-------------------------------*/
function mostraEducacio() {
    document.getElementById('experiencia').style.display = 'none'; 
    document.getElementById('educacio').style.display = 'block';  
}

function comprovaCodiEducacio() {
    const codi = document.getElementById('codiEducacio').value.trim();
    if (codi.toLowerCase() === "una clau mestra") { 
        document.getElementById('acertijoEducacio').style.display = 'none';
        document.getElementById('codiEducacio').style.display = 'none';
        document.getElementById('btnEducacio').style.display = 'none';
        document.getElementById('contingutEducacio').style.display = 'block';
        document.getElementById('contacteBtnEducacio').style.display = 'inline-block';  
    } else {
        alert('ERROR: CÒDIG INCORRECTE. Torna-ho a provar.');
    }
}

function educacio() {
    const educacio = {
        batxillerat: {
            nom: "Batxillerat Humanístic",
            centre: "Institut Carles Vallbona",
            data: "2020-2022",
            descripcio: "Vaig estudiar el batxillerat humanistic. Vaig explorar assignatures com literatura, història, filosofia i vaig desenvolupar habilitats de pensament crític.",
            detalls: "Vaig estudiar italià com a assignatura optativa, obtenint un nivell A1-A2.",
            imatge: "./img/batxi.jpeg"
        },
        fp: {
            nom: "Formació Professional en Desenvolupament d'Aplicacions Web (DAW)",
            centre: "Institut Carles Vallbona",
            data: "2023-2025",
            descripcio: "Fins ara, he adquirit coneixements en SQL, Java (Java bàsic, OOP, Swing i DAO), Administració de Sistemes (Linux, Ubuntu Server, Windows, etc.), Bash Scripting, HTML, CSS, gestió de WordPress, GIT bàsic i control de versions, i PostgreSQL.",
            detalls: "Després de guanyar el concurs de programació 'Pica-Tecles' al meu institut, els meus dos companys i jo vam ser seleccionats per competir al concurs regional 'Programa-me' celebrat a Olot. La competició consistia a resoldre tants problemes com fos possible dins d'un temps determinat. Tot i que no vam aconseguir el primer lloc, va ser una experiència enriquidora que em va permetre desenvolupar habilitats de treball en equip i rendir sota pressió.",
            imatge: "./img/fp.jpeg"
        },
        universitat: {
            nom: "Enginyeria de la Ciberseguretat",
            centre: "UNIR",
            data: "2025 - 2030",
            descripcio: "Futura estudiant d'Enginyeria de la Ciberseguretat, amb un enfocament en les tecnologies emergents de seguretat i la protecció de sistemes crítics.",
            detalls: "Tot i que encara no he començat els estudis, tinc previst adquirir coneixements avançats en seguretat informàtica, criptografia, gestió de riscos i protecció de dades. Estic interessada en les solucions tecnològiques per afrontar les amenaces digitals actuals.",
            imatge: "./img/ceh.jpeg"
        }
        ,
        cursos_online: [
            {
                nom: "Ethical Hacker",
                plataforma: "CISCO",
                data: "2024-03-19",
                descripcio: "Pentesting, social engineering, ethical ,hacking",
                diploma: "https://www.credly.com/badges/e3e9f573-340b-4bae-8395-d1347a3f537f/linked_in_profile"
               
            },
            {
                nom: "Introduction to CyberSecurity",
                plataforma: "CISCO",
                data: "2023-10-15",
                descripcio: "Introductory Knowledge of Cybersecurity,Understanding Vulnerabilities and Threat Detection",
                diploma: "https://www.credly.com/badges/19d52c8d-7af3-4306-bd47-410ff32ec02d/public_url",
               
            }, 
            {
                nom: "Artificial Intelligence Fundamentals",
                plataforma: "IBM",
                data: "2024-06-17",
                descripcio: "AI fundamentals, AI ethics, Watson studio, Natural Language Processing",
                diploma: "https://www.credly.com/badges/5c53570b-8f82-415d-9c7e-c4cac515564b/linked_in_profile",
               
            },
            {
                nom: "Wireshark  Expert",
                plataforma: "LetsDefend",
                data: "2024-03-01",
                descripcio: "Malware Traffic Analysis, ",
                diploma: "https://app.letsdefend.io/my-rewards/detail/9e257ecd-06fe-4688-b45f-820e3d4c31b6",
               
            }
        ]
    };

   
    document.getElementById('sqlQuery').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();  
            const consulta = event.target.value.toLowerCase().trim();
            let sortida = "";

            
            if (consulta === "select * from educacio.cursos_online;") {
                sortida = `
                    <div class="output-table">
                        <table style="width: 100%; color: #00FF00; border-collapse: collapse;">
                            <thead>
                                <tr>
                                    <th style="padding: 8px;">ID</th>
                                    <th style="padding: 8px;">Nom del Curs</th>
                                    <th style="padding: 8px;">Plataforma</th>
                                    <th style="padding: 8px;">Data</th>
                                    <th style="padding: 8px;">Descripció</th>
                                    <th style="padding: 8px;">Enllaç al Diploma</th>
                                </tr>
                            </thead>
                            <tbody>
                `;

                educacio.cursos_online.forEach((curs, index) => {
                    sortida += `
                        <tr style="border-bottom: 1px solid #444;">
                            <td style="padding: 8px; text-align: center;">${index + 1}</td>
                            <td style="padding: 8px;">${curs.nom}</td>
                            <td style="padding: 8px;">${curs.plataforma}</td>
                            <td style="padding: 8px;">${curs.data}</td>
                            <td style="padding: 8px; max-width: 300px; word-wrap: break-word;">${curs.descripcio}</td>
                            <td style="padding: 8px; text-align: center;">
                                <a href="${curs.diploma}" target="_blank" style="color: #00FF00; text-decoration: none;">Veure Diploma</a>
                            </td>
                        </tr>
                    `;
                });

                sortida += `
                            </tbody>
                        </table>
                    </div>
                `;
            } else if (consulta === "select * from educacio.batxillerat;") {
                sortida = `
                    <div class="card fade-in">
                        <img src="${educacio.batxillerat.imatge}" alt="Imatge Batxillerat">
                        <div class="content">
                            <h3>${educacio.batxillerat.nom}</h3>
                            <p><strong>Centre:</strong> ${educacio.batxillerat.centre}</p>
                            <p><strong>Data:</strong> ${educacio.batxillerat.data}</p>
                            <p><strong>Descripció:</strong> ${educacio.batxillerat.descripcio}</p>
                            <p><strong>Detalls:</strong> ${educacio.batxillerat.detalls}</p>
                        </div>
                    </div>
                `;
            } else if (consulta === "select * from educacio.fp;") {
                sortida = `
                    <div class="card fade-in">
                        <img src="${educacio.fp.imatge}" alt="Imatge Formació Professional">
                        <div class="content">
                            <h3>${educacio.fp.nom}</h3>
                            <p><strong>Centre:</strong> ${educacio.fp.centre}</p>
                            <p><strong>Data:</strong> ${educacio.fp.data}</p>
                            <p><strong>Descripció:</strong> ${educacio.fp.descripcio}</p>
                            <p><strong>Detalls:</strong> ${educacio.fp.detalls}</p>
                        </div>
                    </div>
                `;
            } else if (consulta === "select * from educacio.universitat;") {
                sortida = `
                    <div class="card fade-in">
                        <img src="${educacio.universitat.imatge}" alt="Imatge Universitat">
                        <div class="content">
                            <h3>${educacio.universitat.nom}</h3>
                            <p><strong>Centre:</strong> ${educacio.universitat.centre}</p>
                            <p><strong>Data:</strong> ${educacio.universitat.data}</p>
                            <p><strong>Descripció:</strong> ${educacio.universitat.descripcio}</p>
                            <p><strong>Detalls:</strong> ${educacio.universitat.detalls}</p>
                        </div>
                    </div>
                `;
            } else {
                sortida = `<p class="error">Error: Consulta SQL no vàlida. Intenta amb alguna cosa com 'SELECT * FROM educacio.cursos_online;', 'SELECT * FROM educacio.batxillerat;', 'SELECT * FROM educacio.fp;' o 'SELECT * FROM educacio.universitat;'</p>`;
            }

            
            const outputElement = document.getElementById('output');
            outputElement.innerHTML = sortida;
            event.target.value = '';  
        }
    });
}
educacio(); 

/*------------------------------- SECCIÓ: FOOTER-------------------------------*/

function dataFooter() {
    const ara = new Date();
    
    
    const dataFormt = ara.toLocaleDateString('es-ES'); 

    
    const dataIni = new Date(2024, 8, 16); 
    const temps = ara - dataIni; 
    const QuantDies = Math.floor(temps / (1000 * 60 * 60 * 24));
    
    document.getElementById('dataInfo').textContent = `Data: ${dataFormt} | Dies des del 16/09/2024: ${QuantDies}`;
}


dataFooter();

/*------------------------------- SECCIÓ: POPUP-------------------------------*/
function mostrarPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';

    
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000); 
}


window.onload = function() {
    mostrarPopup();
};
