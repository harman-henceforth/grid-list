import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeAgo',
})
export class TimePipe implements PipeTransform {
    transform(value: string): string {
        var result: string;

        let now = new Date().getTime();

        let delta = (now - new Date(value.split('at')[0]).getTime()) / 1000;

        if (delta < 10) {
            result = 'just';
        } else if (delta < 60) {
            result = Math.floor(delta) + ' Seconds ago';
        } else if (delta < 3600) {
            result = Math.floor(delta / 60) + ' Minutes ago';
        } else if (delta < 86400) {
            result = Math.floor(delta / 3600) + ' Hours ago';
        } else {
            result = Math.floor(delta / 86400) + ' Days ago';
        }

        return result;
    }
}
