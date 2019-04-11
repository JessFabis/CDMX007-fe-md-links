const fetch = require('node-fetch');
const path = require('path');
const color = require('colors');


const readlink = (data) => {
  const urlRegex = /(https?:\/\/[^\s\)]+)/g;
  const ObjectLink = data.match(urlRegex);

  // console.log(ObjectLink);
  if (ObjectLink !== null) {
    ObjectLink.forEach(element => {
      const route = path.parse(element);
      // console.log('route', route);
      const linkName = route.name;

      fetch(element).then(res => {
        const linkStatus = res.status
        //console.log(linkStatus)
        if (linkStatus === 200) {
          console.log(`${color.bgMagenta(linkName)}\n${color.rainbow(element)}\n ${color.green(linkStatus)} Link Valido 👍 \u2764\ufe0f `)
        } else {
          console.log(`${color.bgMagenta.bold(linkName)}\n${color.rainbow(element)}\n ${color.green(linkStatus)} Link Roto 👎 \ud83d\udc94\n`)
        }

      })

    })
  }
};

/*const countLink =(total)=>{
  const total = ObjectLink.lenght;
  console.log(total)

}*/



module.exports.readlink = readlink;
//module.exports.countLink = countLink;
