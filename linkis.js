
const fetch = require ('node-fetch');


const readlink = (data) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const arrayLink = data.match(urlRegex);
    console.log(arrayLink);
    
    
  };
/*
  const counting = (arrayLink) => {
    
    const uniqueLinks =
      arrayLink.filter((x, i, a) =>
        a.indexOf(x) == i);
    console.log(
      `Total de links: ${arrayLink.length} 
      Links únicos: ${uniqueLinks.length} `

      )};
      counting ();
*/

  





 module.exports.readlink= readlink;

