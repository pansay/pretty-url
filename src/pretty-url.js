// // http://obvcode.blogspot.com/2008/05/strtr-for-javascript.html
// function strtr(str, from, to) {
//   var subst;
//   for (i = 0; i < from.length; i++) {
//       subst = (to[i]) ? to[i] : to[to.length-1];
//       str = str.replace(new RegExp(str[str.indexOf(from[i])], 'g'), subst);
//   }
//   return str;
// }

// const from = " ()!$'?:,&+-\*/¥µÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåçèéêëìíîïðñòóôõöøùúûüýÿ";
// const to = "---------------YuAAAAAACEEEEIIIIDNOOOOOOUUUUYaaaaaaceeeeiiiionoooooouuuuyy";

const prettyUrl = (str) => {
  return str + 'a';
}

export default prettyUrl;
