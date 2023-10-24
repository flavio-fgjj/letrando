require('dotenv').config()

const axios = require('axios')
const cheerio = require('cheerio')

exports.get = async(fs, fs2) => {
  
  /*
    ### first parameter -> fs ###
      ** Total of words: &fs=4

    ### second parameter -> fs2 ###
      ** type of dictionary: &fs2=0
        0 - Dicionario Completo
        1 - Dicionario para criancas
        2 - Alimentos
        3 - Animais
        4 - Cores
        5 - Corpo humano
        6 - Educacao
        7 - Familia
        8 - Figuras geometricas
        9 - Midias de comunicacao
        10 - Numeros
        11 - Numeros de 0 a 9
        12 - Profissoes
        13 - Transporte
  */

  const url = `${process.env.RANDON_URL}palavras-aleatorias.php?fs=${fs}&fs2=${fs2}&Submit=Nova+palavra`
  const search = await axios.get(url)

  const $ = cheerio.load(search.data)
  const foundedWords = $('table tbody tr td > div')

  let foundedWordsArray = []
  let foundedWord = ''
  for(let i = 0; i < foundedWords.length -1; i++) {
    if(foundedWords[i].children[0].data != undefined) {
      foundedWord = foundedWords[i].children[0].data.toString().trim().replace('\n','')
      if (foundedWord.indexOf(' ') == -1 && foundedWord.toString().length <= 8 && foundedWord.toString().toLowerCase().slice(-1) != 's') // only words without space and with less than 8 chars amd no plural
        foundedWordsArray.push(foundedWord)
    }
  }

  return foundedWordsArray
}