const prettyUrl = (str) => {
  return str
    .toLowerCase()
    .replace(/[ =.><\[\]{}()!$'?:;,&+*/\\]/gi, '-')
    .replace(/[àáâãäå]/gi, 'a')
    .replace(/[ç]/gi, 'c')
    .replace(/[èéêë]/gi, 'e')
    .replace(/[ìíîï]/gi, 'i')
    .replace(/[ñń]/gi, 'n')
    .replace(/[òóôõöø]/gi, 'o')
    .replace(/[ùúûü]/gi, 'u')
    .replace(/[ýÿ]/gi, 'y')
    .replace(/\-{1,}/gi, '-')
  ;
}

export default prettyUrl;
