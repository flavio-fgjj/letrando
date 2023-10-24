const { job, saveForNextDay, fixForNextDay } = require('./service')

let timesPerDay = 1
async function runJob() {
  const today = new Date()
  const hour = today.getHours()

  console.log('Actual hour', hour)
  
  if ((hour >= 18 && hour < 20) && timesPerDay < 4) {
    console.log(`Service started at ${new Date()}`)

    //TODO: check if service was already executed (send email)
    await job()
      .then(r => {
        console.log(`Process number for job (${timesPerDay}) executed successfully at ${new Date()}`)
      })
      .catch((err) => {
        console.log(`Process number for job (${timesPerDay}) executed without success ${new Date()}`)
        console.error(err)
      })

      if (timesPerDay < 4) {
        timesPerDay++
        console.log(`Service Job ${timesPerDay} finished at ${new Date()}`)
      }
  }

  //if (hour >= 21 && hour <= 22) {
  if (hour >= 8 && hour <= 22) {
    console.log(`Service 'saveForNextDay' started at ${new Date()}`)
    await saveForNextDay()
    console.log(`Service 'saveForNextDay' finished at ${new Date()}`)
  }

  // if (hour > 10) {
  //   console.log(`Service 'fixForNextDay' started at ${new Date()}`)
  //   await fixForNextDay()
  //   console.log(`Service 'fixForNextDay' finished at ${new Date()}`)
  //   console.log(`Service finished at ${new Date()}`)
  // }
  
}

runJob()

//setInterval(runJob, 1000 * 60 * 60) // run job every one hour
setInterval(runJob, 60000) // run job every one minute