export class ErrorTracker {
    static Log(error, source) {
        console.log('\x1b[33m%s\x1b[0m', `ERROR ON ${source}`);
        console.log('\x1b[33m%s\x1b[0m', `Due to: ${error}`);
    }
}