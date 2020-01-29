let p = new Promise ((reject) => {
    setTimeout(
        () => {
            let dro = new Date();
            reject(dro);
        },
        20000
    )
});


p.catch(
    reject =>{
alert("rejected: "+ error);
},
