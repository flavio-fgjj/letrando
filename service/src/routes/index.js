const express = require('express')

const randonWordsController = require('../controllers/controller-randonWord')
const wordDataController = require('../controllers/controller-wordData')

const Model = require('../model/index')

const route = express.Router()

route.get('/fix', async (req, res) => {
  let now = new Date()
  now.setDate(now.getDate())
  const startToday = new Date(now.getFullYear(),now.getMonth(),now.getDate(),1,0,0)
  const endToday = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,59,59)

  let query = { $and: [ 
    { "extracted_date": {$gte: startToday, $lt: endToday} },
    { "meaning": { $exists: true, $ne: null } },
  ]}

  // get max gane_seq
  let group = {$group:{_id:"$game_seq", gameDate:{$push:"$game_date"}, count:{$sum:1}}}
  let sort  = {$sort:{"_id":-1}}
  let limit = {$limit:1}

  //let maxSeq = await Model.find().sort({"game_seq": -1}).limit(1)
  let maxSeq = await Model.aggregate([group, sort, limit])
  let maxGameSeq = 0
  let totalOfMaxGameSeq = 0
  let game_date

  if (maxSeq) {
    maxGameSeq = maxSeq[0]._id
    totalOfMaxGameSeq = maxSeq[0].count
    game_date = maxSeq[0].game_date
  }

  let update = { game_date: now }
  let filter

  // Model
  //   .find({ game_seq: maxGameSeq })
  //   .exec((err, result) => {
  //     if (err) {
  //       return result
  //         .status(500)
  //         .send({
  //           output: `Err -> ${err}`
  //         })
  //     }


  //   })


//   Model.find(query, (err, result) => {
//     if (err) {
//       return result
//         .status(500)
//         .send({
//           output: `Err -> ${err}`
//         })
//     }
    
//     if(result.length > 0) {
//       now.setDate(now.getDate() + 1)
//       let nextDay = 1

//       result.forEach(async (item, index) => {
//         if (nextDay > 7) {
//           nextDay = 1
//           now.setDate(now.getDate() + 1)
//           update = { game_date: now }
//         } else {
//           nextDay++
//         }
        
//         filter = { _id: item._id }
//         await Model.findOneAndUpdate(filter, update)
//       })
//     }

//     return res.status(200).send({
//       output: 'OK',
//       //payload: result
//     })
//   }); 
})

route.get('/', async (req, res) => {
  let now = new Date()
  let year = ''
  let month = ''
  let day = ''

  // get max game_seq
  let group = {$group:{_id:"$game_seq", gameDate:{$push:"$game_date"}, count:{$sum:1}}}
  let sort  = {$sort:{"_id":-1}}
  let limit = {$limit:1}
  
  let maxSeq = await Model.aggregate([group, sort, limit])
  //let maxSeq = await Model.find({ game_seq: 0 })
  let maxGameSeq = 0
  let totalOfMaxGameSeq = 0
  if (maxSeq && maxSeq.length > 0) {
    maxGameSeq = maxSeq[0]._id
    totalOfMaxGameSeq = maxSeq[0].count > 7 ? 7 : maxSeq[0].count
    if (maxGameSeq > 0) {
      year = maxSeq[0].gameDate[0].substring(4,10)
      month = maxSeq[0].gameDate[0].substring(2,4)
      day = maxSeq[0].gameDate[0].substring(0,2)
    }
  } else {
    totalOfMaxGameSeq = 7
  }

  if (totalOfMaxGameSeq == 7 && maxGameSeq == 0) {
    now.setDate(now.getDate()) 
    maxGameSeq++
  } else if (totalOfMaxGameSeq == 7 && maxGameSeq > 0) {
    now = new Date(`${year}-${month}-${day}T00:00:00`)
    now.setDate(now.getDate() + 1)
    maxGameSeq++
  } else {
    if (year != '' && !isNaN(year)) {
      now = new Date(`${year}-${month}-${day}T00:00:00`)
      now.setDate(now.getDate())
    }
  }
  
  let filter
  let update
  
  totalOfMaxGameSeq = totalOfMaxGameSeq < 7 ? 7 - totalOfMaxGameSeq : 7

  Model
    .find({ game_seq: 0 })
    .limit(totalOfMaxGameSeq)
    .exec((err, result) => {
      if (err) {
        return result
          .status(500)
          .send({
            output: `Err -> ${err}`
          })
      }

      let month = now.getMonth() + 1
      if(result.length > 0) {
        result.forEach(async (item, index) => {
          nextDay = 1
          update = { game_date: `${now.getDate().toString().padStart(2, '0')}${month.toString().padStart(2, '0')}${now.getFullYear().toString().padStart(4, '0')}`, game_seq: maxGameSeq }
          filter = { _id: item._id }
          await Model.findOneAndUpdate(filter, update)
        })
      }
  
      return res.status(200).send({
        output: 'OK',
        //payload: result
      })
    })
  // Model.find(query, (err, result) => {
  //   if (err) {
  //     return result
  //       .status(500)
  //       .send({
  //         output: `Err -> ${err}`
  //       })
  //   }
    
  //   if(result.length > 0) {
  //     now.setDate(now.getDate() + 1) // 7 words per day
  //     let nextDay = totalOfMaxGameSeq

  //     result.forEach(async (item, index) => {
  //       if (nextDay > 7) {
  //         maxGameSeq++
  //         nextDay = 1
  //         now.setDate(now.getDate() + 1)
  //         update = { game_date: now, game_seq: maxGameSeq }
  //       } else {
  //         nextDay++
  //       }
        
  //       filter = { _id: item._id }
  //       await Model.findOneAndUpdate(filter, update)
  //     })
  //   }

  //   return res.status(200).send({
  //     output: 'OK',
  //     //payload: result
  //   })
  // }); 
})

route.post('/', async (req,res)  => {
  let randonWords = null
  let hasError = false
  let err = ''

  const arrayDictionaryType = {
    'Dicionario Completo': 0, 
    //'Dicionario para criancas': 1, 
    //'Alimentos': 2, 
    //'Animais': 3,
    //'Cores': 4,
    //'Corpo humano': 5,
    //'Educacao': 6,
    //'Familia': 7,
    //'Figuras geometricas': 8,
    //'Midias de comunicacao': 9,
    //'Numeros': 10,
    //'Numeros de 0 a 9': 11,
    //'Profissoes': 12,
    //'Transporte': 13,
  }

  for (let dictionaryType in arrayDictionaryType) {
    await randonWordsController(arrayDictionaryType[dictionaryType].toString())
    .then(async r => {
      randonWords = await r.data
    })
    .catch(err => console.error(err))
    
    if (randonWords != null) {
      for(let i = 0; i < randonWords.length; i++) {
        await getMeaning(randonWords[i], dictionaryType)
      }
    }
  }
  
  if (!hasError) {
    res.status(201).send({ output: "New word added" })
  } else {
    res.status(500).send({ output: `Error -> ${err}` })
  }
  
})

async function getMeaning(word, dictionaryType) {
  let today = new Date()
  await wordDataController(word)
  .then(async x => {
    let wordData = await x.data

    if(wordData && wordData.status === 'OK') {
      let jsonData = wordData.data
      let syn = [], ant = []

      if(jsonData.synonyms.length > 0) {
        syn = jsonData.synonyms.slice(0, 5)
      }

      if(jsonData.antonyms.length > 0) {
        ant = jsonData.antonyms.slice(0, 5)
      }

      let isValid = word.toString().trim().indexOf(' ') == -1 && (word.toString().trim().length > 2 && word.toString().trim().length < 8) && word.toString().trim().toLowerCase().slice(-1) != 's'

      let model = new Model({
        dictionary_type: dictionaryType,
        word: word,
        grammatical_class: jsonData.grammatical_class, 
        meaning: jsonData.meaning,
        synonyms: syn, 
        antonyms: ant,
        phrase: wordData.phrase, 
        extracted_date: today,
        game_date: today,
        isWordValid: isValid, 
        game_seq: 0
      })

      jsonData = null
      syn = []
      ant = []

      // saving at mongodb
      if (isValid && model.meaning != '') {
        model
          .save()
          .then((result) => {
          })
          .catch((error) => {
            hasError = true
            err = error
          }) 
      }
    }
  })
  .catch(err => console.error(err))
}

module.exports = route