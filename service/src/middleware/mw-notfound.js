const notFound = ((req,res) => {
  res.type('application/json')
  res.send(404).send('404 - Not Found')
})

module.exports = notFound