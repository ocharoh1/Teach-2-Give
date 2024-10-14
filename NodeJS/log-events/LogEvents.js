const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');
const fs = require('fs').promises;
const path = require('path');

const logFolder = path.join(__dirname, 'logs');
const logFile = path.join(logFolder, 'eventLogs.txt');

const LogEvents = async (message) => {
  const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
  const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;

  try {
    // Check if the logs folder exists; if not, create it
    if (!await fs.stat(logFolder).catch(() => false)) {
      await fs.mkdir(logFolder);
    }
    // Append the log item to the file
    await fs.appendFile(logFile, logItem);
    console.log('Log written:', logItem);
  } catch (err) {
    console.error('Error while logging:', err);
  }
};

module.exports = LogEvents;
