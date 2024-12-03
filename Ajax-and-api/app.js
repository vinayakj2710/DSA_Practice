// let url = "https://catfact.ninja/fact";

//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.fact) ;
//       return fetch(url);
//     })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data2) => {
//         console.log(data2.fact) ;
//     })
//     .catch((err) => {
//       console.log("Error ", err);
//     });

let url = "https://catfact.ninja/fact";

async function getData () {
    try{
        let res = await fetch(url);
        if(!res.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        if(!res2.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        let data2 = await res2.json();
        console.log(data.fact);
    }catch(err) {
        console.log(err);
    }
}





