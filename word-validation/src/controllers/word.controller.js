require('dotenv').config()
const mysql = require('../mysql')

exports.getWord = async (req, res, next)=> {
    try {
        const query = 'SELECT * FROM words WHERE LOWER(TRIM(word)) = ?;'
        const result = await mysql.execute(query, [req.params.word])

        if (result.length == 0) {
          return res.status(200).send({
            status: 'NOK',
            message: `Word doesn't exists!`
          })
        }

        return res.status(200).send({
          status: 'OK',
          message: `Word exists!`
        });
    } catch (error) {
        return res.status(500).send({ error: error });
    }
}