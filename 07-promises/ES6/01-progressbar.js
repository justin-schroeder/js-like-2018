/**
 * 01-progressbar
 *
 * Creates a progress bar to delete all files.
 */

function progressbar (seconds, message) {
  return new Promise((resolve, reject) => {
    var start = process.hrtime()
    console.log(message)
    let update = () => {
      var cols = process.stdout.columns
      var ref = process.hrtime(start)
      var percent = (ref[0] + (ref[1]/1000000000))/seconds
      if (percent < 1) {
        setLine("=".repeat(Math.ceil(percent * cols) - 1) + '>')
        setTimeout(() => update(), 10)
      } else {
        setLine("✅  Complete! \n")
        resolve()
      }
    }
    update()
  })
}

function setLine (message) {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(message)
}

progressbar(6, '🗑  Deleting all your files...')
.then(() => progressbar(2, '🤡  Just kidding, retrieving your deleted files...'))
.then(() => progressbar(10, '⚠  Ummmmm...hold on...trying to figure out where they went.'))
.then(() => console.log('😢  Terribly sorry mate. It appears all your files are gone. Woops.'))

