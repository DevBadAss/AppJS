/**
 * Gets Display Stream
 * @param {Boolean} audio options for setting audio constraint.
 * @returns Display Stream
 */
async function getStream(audio) {
    return await navigator.mediaDevices.getDisplayMedia({
        audio: audio,
        video: true
    });
}

/**
 * Creates recorded video file and automatically downloads it.
 * @param {Object} data video contents
 */

function saveFile(data) {
    const blob = new Blob(data, { type: "video/webm" });
    let filename = window.prompt("Enter File name:"),
        fileLink = document.createElement("a");
    fileLink.href = URL.createObjectURL(blob);
    fileLink.download = `${filename}.webm`;
    document.body.appendChild(fileLink);
    fileLink.click();
    URL.revokeObjectURL(blob);
    document.body.removeChild(fileLink);
}


/**
 * Get Record Stream
 * @param {*} stream recording stream
 * @returns 
 */
function getRecord(stream) {
    let recordedChunks = [];
    const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    recorder.ondataavailable = e => {
        if (e.data.size > 0) {
            recordedChunks.push(e.data);
        }
    }
    recorder.onstop = () => {
        saveFile(recordedChunks);
        recordedChunks = [];
    }
    recorder.start();
    return recorder;
}


/**
 * Starts Recording
 * @param {Function} callback function to execute to stop recording and/or manipulated recording.
 */

async function startRecord(callback) {
    let Stream = await getStream(true);
    let record = getRecord(Stream);
    callback(record)
}

export default startRecord;