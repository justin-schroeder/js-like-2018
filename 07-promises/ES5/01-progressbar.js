/**
 * 01-progressbar
 *
 * Creates a progress bar to delete all files.
 */

function progressbar (seconds, message, callback) {
  var start = process.hrtime();
  console.log(message);
  var update = function () {
    var cols = process.stdout.columns;
    var ref = process.hrtime(start);
    var percent = (ref[0] + (ref[1]/1000000000))/seconds;
    if (percent < 1) {
      setLine("=".repeat(Math.ceil(percent * cols) - 1) + '>');
      setTimeout(function () {
        update();
      }, 10);
    } else {
      setLine("✅  Complete! \n");
      callback();
    }
  };
  update();
}

function setLine (message) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(message);
}

progressbar(6, '🗑  Deleting all your files...', function () {
  progressbar(2, '🤡  Just kidding, retrieving your deleted files...', function () {
    progressbar(10, '⚠  Ummmmm...hold on...trying to figure out where they went.', function () {
      console.log('😢  Terribly sorry mate. It appears all your files are gone. Woops.');
    });
  });
});

