const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    /* iserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.5817554",
        lng: "-46.6386614",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade socialPresta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "1199988776655",
        images: [
            "https://images.unsplash.com/photo-1602389569471-5df5bde61968?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitas das 8h até as 18h",
        open_on_weekends: "0"      
    }) */

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELect * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo ID
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    //console.log(orphanage)

    // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})