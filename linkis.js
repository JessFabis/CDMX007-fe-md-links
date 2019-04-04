
const readlink = (data) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const arrayLink = data.match(urlRegex);
    console.log(arrayLink);
  };


 module.exports.readlink= readlink;

