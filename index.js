import mainLang from './lang/messages.js';


const languagesToCheck = Object.keys(mainLang).filter((key) => key !== 'en');
const missingPaths = {};
const uselessPaths = {};

languagesToCheck.map(key => {
  missingPaths[key] = [];
  uselessPaths[key] = [];
})

languagesToCheck.map((key) => {
  missingPaths[key] = checkInit(mainLang.en, mainLang[key], key);
  uselessPaths[key] =  checkInit(mainLang[key], mainLang.en, key);
})

console.log('MISSING PATHS');
console.log(missingPaths);
console.log('USELESS PATHS')
console.log(uselessPaths);

function checkInit(data, languageData, language){
  const over = [];

  const check = (data, path, langToCheck, lang) => {
    if(typeof data === "object"){
      Object.keys(data).map((key) => check(data[key], [...path, key], langToCheck, lang))
    } else {
      const value = path.reduce((obj, key) => obj && obj[key], langToCheck);

      if(typeof value === 'undefined'){
          over.push(path.join("."));
      }
    }
  }
  
  check(data, [], languageData, language);
  return over;
}