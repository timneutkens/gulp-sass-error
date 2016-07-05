import { PluginError } from 'gulp-util';

export interface Error {
    messageFormatted: string
}

export function gulpSassError (fail: Boolean) {

    return function(error: Error): void {
        var message = new PluginError('sass', error.messageFormatted).toString();

        // Throw error instead of logging it if module is set to fail on error
        if(fail) {
            throw message;
        }

        process.stderr.write(message + '\n');
        this.emit('end');
    }
}
