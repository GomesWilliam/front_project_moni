import axios from 'axios';
export const handleCadastrMat = info => {
    //Logica Turno
    const turnoRegex = /\b(noturno|diurno)\b/i;
    const turno = turnoRegex.exec(info.classe);



    


    //Logica Horas
    const regexHoras = /([0-9][0-9]:[0-9][0-9])/gm;
    let horasTeorica1 = "";
    let horasTeorica2 = "";
    let horasTeorica3 = "";
    let horasPratica1 = "";
    let horasPratica2 = "";
    let horasPratica3 = "";


    if(info.aulaTeoria !== "0"){
        const teoriaArray = info.aulaTeoria.split(/,/);
        if(teoriaArray.length <= 3){
            let match = regexHoras.exec(teoriaArray[0]);
            let horas = [];
            while(match){
                const filename = match[1];
                horas.push(filename)
                match = regexHoras.exec(teoriaArray[0]);
            }
            
            //Horas 1
            const hora1p1 = horas[0];
            let horaSeparada1 = hora1p1.split(/:/);
            const hora2p1 = horas[1];
            let horaSeparada2 = hora2p1.split(/:/);
            let horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
            horasTeorica1 = horasFinal;
            horasTeorica2 = "";
            horasTeorica3 = "";

        } else if (teoriaArray.length <= 6 && teoriaArray.length > 3){
            let match = regexHoras.exec(teoriaArray[0]);
            let horas1 = [];
            let horas2 = [];

            while(match){
                const filename = match[1];
                horas1.push(filename)
                match = regexHoras.exec(teoriaArray[0]);
            }

            match = regexHoras.exec(teoriaArray[3]);
            while(match){  
                const filename = match[1];
                horas2.push(filename)
                match = regexHoras.exec(teoriaArray[3]);
            }

            //Horas 1
            const hora1p1 = horas1[0];
            let horaSeparada1 = hora1p1.split(/:/);
            const hora2p1 = horas1[1];
            let horaSeparada2 = hora2p1.split(/:/);
            let horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
            horasTeorica1 = horasFinal

            const hora1p2 = horas2[0];
            horaSeparada1 = hora1p2.split(/:/);
            const hora2p2 = horas2[1];
            horaSeparada2 = hora2p2.split(/:/);
            horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
            horasTeorica2 = horasFinal;
            horasTeorica3 = "";

        } else {
            let match = regexHoras.exec(teoriaArray[0]);
            let horas = [];

            while(match){
                const filename = match[1];
                horas.push(filename)
                match = regexHoras.exec(teoriaArray[0]);
            }

            //Horas 1
            let hora1 = horas[0];
            let horaSeparada1 = hora1.split(/:/);
            let hora2 = horas[1];
            let horaSeparada2 = hora2.split(/:/);
            let horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
            horasTeorica1 = horasFinal

            match = regexHoras.exec(teoriaArray[3]);
            horas = [];
            while(match){  
                const filename = match[1];
                horas.push(filename)
                match = regexHoras.exec(teoriaArray[3]);
            }

            hora1 = horas[0];
            horaSeparada1 = hora1.split(/:/);
            hora2 = horas[1];
            horaSeparada2 = hora2.split(/:/);
            horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
            horasTeorica2 = horasFinal;

            match = regexHoras.exec(teoriaArray[6]);
            horas = [];
            while(match){  
                const filename = match[1];
                horas.push(filename)
                match = regexHoras.exec(teoriaArray[3]);
            }

            hora1 = horas[0];
            horaSeparada1 = hora1.split(/:/);
            hora2 = horas[1];
            horaSeparada2 = hora2.split(/:/);
            horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
            horasTeorica3 = horasFinal




            }
        }

        //Contagem de horas para parte pratica
        const praticaArray = info.aulaPratica.split(/,/);
        if(info.aulaPratica !== "0"){
            if(praticaArray.length <= 3){
                let match = regexHoras.exec(praticaArray[0]);
                let horas = [];
                while(match){
                    const filename = match[1];
                    horas.push(filename)
                    match = regexHoras.exec(praticaArray[0]);
                }
                
                //Horas 1
                const hora1p1 = horas[0];
                let horaSeparada1 = hora1p1.split(/:/);
                const hora2p1 = horas[1];
                let horaSeparada2 = hora2p1.split(/:/);
                let horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
                horasPratica1 = horasFinal;
                horasPratica2 = "";
                horasPratica3 = "";
    
            } else if (praticaArray.length <= 6 && praticaArray.length > 3){
                let match = regexHoras.exec(praticaArray[0]);
                let horas1 = [];
                let horas2 = [];
    
                while(match){
                    const filename = match[1];
                    horas1.push(filename)
                    match = regexHoras.exec(praticaArray[0]);
                }
    
                match = regexHoras.exec(praticaArray[3]);
                while(match){  
                    const filename = match[1];
                    horas2.push(filename)
                    match = regexHoras.exec(praticaArray[3]);
                }
    
                //Horas 1
                const hora1p1 = horas1[0];
                let horaSeparada1 = hora1p1.split(/:/);
                const hora2p1 = horas1[1];
                let horaSeparada2 = hora2p1.split(/:/);
                let horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
                horasPratica1 = horasFinal
    
                const hora1p2 = horas2[0];
                horaSeparada1 = hora1p2.split(/:/);
                const hora2p2 = horas2[1];
                horaSeparada2 = hora2p2.split(/:/);
                horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
                horasPratica2 = horasFinal;
                horasPratica3 = "";
    
            } else {
                let match = regexHoras.exec(praticaArray[0]);
                let horas = [];
    
                while(match){
                    const filename = match[1];
                    horas.push(filename)
                    match = regexHoras.exec(praticaArray[0]);
                }
    
                //Horas 1
                let hora1 = horas[0];
                let horaSeparada1 = hora1.split(/:/);
                let hora2 = horas[1];
                let horaSeparada2 = hora2.split(/:/);
                let horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
                horasPratica1 = horasFinal
    
                match = regexHoras.exec(praticaArray[3]);
                horas = [];
                while(match){  
                    const filename = match[1];
                    horas.push(filename)
                    match = regexHoras.exec(praticaArray[3]);
                }
    
                hora1 = horas[0];
                horaSeparada1 = hora1.split(/:/);
                hora2 = horas[1];
                horaSeparada2 = hora2.split(/:/);
                horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
                horasPratica2 = horasFinal;
    
                match = regexHoras.exec(praticaArray[6]);
                horas = [];
                while(match){  
                    const filename = match[1];
                    horas.push(filename)
                    match = regexHoras.exec(praticaArray[3]);
                }
    
                hora1 = horas[0];
                horaSeparada1 = hora1.split(/:/);
                hora2 = horas[1];
                horaSeparada2 = hora2.split(/:/);
                horasFinal = (parseInt(horaSeparada2[0])*60 +parseInt(horaSeparada2[1]) -  parseInt(horaSeparada1[0])*60 -parseInt(horaSeparada1[1]))/60;
                horasPratica3 = horasFinal
    
    
    
    
                }
            }

    //Logica teoria 
    let aulaTeorica1 = '' 
    let aulaTeorica2 = '' 
    let aulaTeorica3 = '' 
    if(info.aulaTeoria !== "0"){
        const teoriaArray = info.aulaTeoria.split(/,/);

        if(teoriaArray.length <= 3){

            aulaTeorica1  = teoriaArray[0] +  teoriaArray[1] + teoriaArray[2];
        } else if (teoriaArray.length <= 6 && teoriaArray.length > 3){
            aulaTeorica1  = teoriaArray[0] +  teoriaArray[1] + teoriaArray[2];
            aulaTeorica2  = teoriaArray[3] +  teoriaArray[4] + teoriaArray[5];
        } else {
            aulaTeorica1  = teoriaArray[0] +  teoriaArray[1] + teoriaArray[2];
            aulaTeorica2  = teoriaArray[3] +  teoriaArray[4] + teoriaArray[5];
            aulaTeorica3  = teoriaArray[6] +  teoriaArray[7] + teoriaArray[8];
        }
    }
    
    //Logica pratica 
    let aulaPratica1 = '' 
    let aulaPratica2 = '' 
    let aulaPratica3 = '' 
    if(info.aulaPratica !== "0"){
        const praticaArray = info.aulaPratica.split(/,/);
        if(praticaArray.length <= 3){
            aulaPratica1  = praticaArray[0] +  praticaArray[1] + praticaArray[2];
        } else if (praticaArray.length <= 6 && praticaArray.length > 3){
            aulaPratica1  = praticaArray[0] +  praticaArray[1] + praticaArray[2];
            aulaPratica2  = praticaArray[3] +  praticaArray[4] + praticaArray[5];
        } else {
            aulaPratica1  = praticaArray[0] +  praticaArray[1] + praticaArray[2];
            aulaPratica2  = praticaArray[3] +  praticaArray[4] + praticaArray[5];
            aulaPratica3  = praticaArray[6] +  praticaArray[7] + praticaArray[8];
        }
    }

    //logica quad
    const today = new Date();
    const month = today.getMonth();
    let quarter;
    if (month < 6)
    quarter = 1;
    else if (month < 9)
    quarter = 2;
    else if (month < 13)
    quarter = 3;

    //Logica ano
    const dateFull = new Date();
    const ano = dateFull.getFullYear()


    const finalInfo = {
        ra_pcd: info.ra,
        disciplina: info.classe,
        aulaTeoria1: aulaTeorica1,
        horasTeoria1: horasTeorica1,
        aulaTeorica2: aulaTeorica2,
        horasTeoria2: horasTeorica2,
        aulaTeorica3: aulaTeorica3,
        horasTeoria3: horasTeorica3,
        docenteTeoria: info.docenteTeoria,
        aulaPratica1: aulaPratica1,
        horasPratica1: horasPratica1,
        aulaPratica2: aulaPratica2,
        horasPratica2: horasPratica2,
        aulaPratica3: aulaPratica3,
        horasPratica3: horasPratica3,
        docentePratica: info.docentePratica,
        turno: turno[0],
        quadAtual: quarter,
        anoAtual: ano
    }

    console.log(finalInfo);


    axios.post(`https://us-central1-monitoring-project-4fd4d.cloudfunctions.net/api/cadastrardisciplina`, finalInfo)
        .then(res => {
            
            window.alert("Disciplina Cadastrada com sucesso");
        })
        .catch(err => {
            window.alert("Não foi possivel cadastrar a disciplina");
        });
}