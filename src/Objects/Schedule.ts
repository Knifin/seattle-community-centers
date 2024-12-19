export default class Schedule {
    private readonly _day: string;
    private readonly _startHour: number;
    private readonly _startMinute: number;
    private readonly _endHour: number;
    private readonly _endMinute: number;

    public constructor(day: string, startHour: number, startMinute: number, endHour: number, endMinute: number) {
        this._day = day;
        this._startHour = startHour;
        this._startMinute = startMinute;
        this._endHour = endHour;
        this._endMinute = endMinute;
    }

    public get day(): string {
        return this._day;
    }

    public get startHour(): number {
        return this._startHour;
    }

    public get startMinute(): number {
        return this._startMinute;
    }

    public get endHour(): number {
        return this._endHour;
    }

    public get endMinute(): number {
        return this._endMinute;
    }

    public isOpen(day: string, hours: number, minutes: number): boolean {
        const time: number = hours * 60 + minutes;
        const startTime: number = this._startHour * 60 + this._startMinute;
        const endTime: number = this._endHour * 60 + this._endMinute;

        return (this._day === day && time >= startTime && time <= endTime);
    }

    public getHoursOpen(): string {
        const startAmPm: string = this._startHour >= 12 ? 'PM' : 'AM';
        const endAmPm: string = this._endHour >= 12 ? 'PM' : 'AM';

        let startHours: number = this._startHour;
        let endHours: number = this._endHour;
        let startMinutes: string = '';
        let endMinutes: string = '';

        if (startHours >= 13) {
            startHours = startHours % 12;
        }

        if (endHours >= 13) {
            endHours = endHours % 12;
        }

        if (this._startMinute === 0) {
            startMinutes = '00';
        } else {
            startMinutes = `${this._startMinute}`;
        }

        if (this._endMinute === 0) {
            endMinutes = '00';
        } else {
            endMinutes = `${this._endMinute}`;
        }

        const output: string = `${startHours}:${startMinutes} ${startAmPm} - ${endHours}:${endMinutes} ${endAmPm}`;

        return output;
    }

    public getTimeUntilClose(currHour: number, currMinute: number): string {
        const time: number = (this._endHour * 60 + this._endMinute) - (currHour * 60 + currMinute);
        const hoursLeft: number = Math.floor(time / 60);
        const minutesLeft: number = time % 60;

        return `${hoursLeft} hours, ${minutesLeft} minutes`;
    }
}