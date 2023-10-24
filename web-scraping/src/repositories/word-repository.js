require('dotenv').config()

const axios = require('axios')
const cheerio = require('cheerio')

let cleaningWord = require('../utils/CleaningWord')

let synonyms = []
let antonyms = []

exports.get = async(_word) => {
  let word = cleaningWord(_word)

  //const url = `${process.env.WORD_URL}pesquisa.php?q=${word}`
  const url = `${process.env.WORD_URL}${word}/`

  let search = await axios.get(url)

  let $ = cheerio.load(search.data)

  let _meaning = $('.significado span')

  let grammatical_class
  let meaning

  if(_meaning == undefined || _meaning.length <= 0) {
    // trying again
    url = `${process.env.WORD_URL}${word}`
    search = await axios.get(url)

    $ = cheerio.load(search.data)
    _meaning = $('.significado')

    if(_meaning.length <= 0) {
      synonyms = []
      antonyms = []
      return { 
        "status": "NOK",
        "message": "Palavra invalida",
        "data": { }
      }
    } else {
      let newMeaning
      _meaning.each(function() {
        newMeaning = this.children
      })

      grammatical_class = newMeaning[0].children[0].data
      meaning = newMeaning[1].next.children[0].data
    }
  } else {
    try {
      grammatical_class = _meaning[0].children[0].data
      meaning = _meaning[1].children[0].data
    } catch(err) {
      synonyms = []
      antonyms = []
      console.log('ERRO: palavra -> ', word)
      console.error(err)
      return {
        "status": "NOK",
        "message": "Palavra invalida",
        "data": { }
      }
    }
  }

  const _phraseFont = $('.fonte')
  const _phrase = $('.frase span')
  const _phraseAuthor = $('.frase span em')

  let phraseFont, phrase, phraseAuthor
  phrase = ''
  try {
    for(k = 0; k < _phrase[0].children.length; k++) {
      phrase += _phrase[0].children[k].data != undefined ? _phrase[0].children[k].data : ''
    }
    phraseFont = _phraseFont[0].children[0].data
    phraseAuthor = _phraseAuthor[0].children[0].data
  } catch {
    phraseFont = ''
    phrase = ''
    phraseAuthor = ''
  }
  
  const _syn_ant = $('.sinonimos a')

  getSynonyms(_syn_ant);
  
  return {
    "status": "OK",
    "data": {
      "grammatical_class": grammatical_class,
      "meaning": meaning,
      "synonyms": synonyms,
      "antonyms": antonyms
    },
    "phrase": {
      "font": phraseFont,
      "phrase": phrase,
      "author": phraseAuthor
    }
  }
  
}

function getSynonyms(syn) {
  antonyms = []
  synonyms = []
  let isSynonym = false
  let isAntonym = false
 
  if(syn.length > 0) {
    for(let i = 0; i < syn.length; i++) {
      let res = syn[i].prev.data.toString().trim()
      
      if(isAntonym) {
        antonyms.push(`${syn[i].attribs['href'].toString().trim().replace('/', '').replace('/', '')}`)
      }
      
      if(!isSynonym) {
          if(res.toString() != ',' && res.toString().indexOf('é sinônimo de:') != -1) {
              isSynonym = true
          }
      }

      if(isSynonym) {
          if(res.toString() != ',' && res.toString().indexOf('é o contrário de:') != -1) {
            isSynonym = false
            isAntonym = true
            antonyms.push(`${syn[i].attribs['href'].toString().trim().replace('/', '').replace('/', '')}`)
          } else {
            synonyms.push(`${syn[i].attribs['href'].toString().trim().replace('/', '').replace('/', '')}`)
          }
      }

    }
  } 
}