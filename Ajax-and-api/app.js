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

async function getData() {
  try {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    if (!res2.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    let data2 = await res2.json();
    console.log(data.fact);
  } catch (err) {
    console.log(err);
  }
}

// Exapmle 2

const getMovieName = async () => {
  try {
    let potterDbLink = "https://api.potterdb.com/v1/movies";
    let res = await fetch(potterDbLink);
    if (!res.ok) {
      throw new Error("something went wrong!!");
    }
    let data = await res.json();
    let movies = await data.data.map((item) => {
      return item.attributes.title;
    });
    for(let i=0; i<movies.length; i++){
        console.log(i+' '+movies[i]);
        printText(`- ${movies[i]}`);
        
    }
  } catch (err) {
    console.log(err);
  }
};

function printText (txt) {
    let h3 = document.createElement('h3');
    h3.innerText = txt;
    document.body.append(h3);
}

setTimeout(()=>{
    getMovieName();
},2000);
