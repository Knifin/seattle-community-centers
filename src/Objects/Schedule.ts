export default class Schedule {
    private readonly _today: Date;
    private readonly _day: string;
    private readonly _startDate: Date;
    private readonly _endDate: Date;
    private readonly _openTime: Date;
    private readonly _closeTime: Date;
    private readonly _type: string;

    public constructor(starteDate: string, endDate: string, day: string, openTime: string, closeTime: string, type: string) {
        this._today = new Date();

        this._startDate = new Date(starteDate);
        this._endDate = new Date(endDate);

        this._day = day;

        this._openTime = new Date();
        this._openTime.setHours(Number(openTime.split(':')[0]));
        this._openTime.setMinutes(Number(openTime.split(':')[1]));
        this._openTime.setSeconds(0);

        this._closeTime = new Date();
        this._closeTime.setHours(Number(closeTime.split(':')[0]));
        this._closeTime.setMinutes(Number(closeTime.split(':')[1]));
        this._closeTime.setSeconds(0);

        this._type = type;
    }

    public get today(): Date {
        return this._today;
    }

    public get day(): string {
        return this._day;
    }

    public get startDate(): Date {
        return this._startDate;
    }

    public get endDate(): Date {
        return this._endDate;
    }

    public get openTime(): Date {
        return this._openTime;
    }

    public get closeTime(): Date {
        return this._closeTime;
    }

    public get type(): string {
        return this._type;
    }

    public getHoursOpen(): string {
        return `${this._openTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - ${this._closeTime.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}`;
    }

    public getTimeLeft(): string {
        const now: Date = new Date();
        const diff: number = this._closeTime.getTime() - now.getTime();

        const hours: number = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes: number = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const hoursText: string = hours == 1 ? 'hour' : 'hours';
        const minutesText: string = minutes == 1 ? 'minute' : 'minutes';

        if (hours === 0) {
            return `${minutes} ${minutesText}`;
        }

        return `${hours} ${hoursText} and ${minutes} ${minutesText}`;
    }

    private getTodayDayName(): string {
        return this._today.toLocaleString('en-US', {weekday: 'long'});
    }

    public isOpenToday(): boolean {
        return (
            this._startDate <= this._today &&
            this._endDate >= this._today &&
            this._day === this.getTodayDayName()
        );
    }

    public isOpenNow(): boolean {
        return (
            this._startDate <= this._today &&
            this._endDate >= this._today &&
            this._openTime <= this._today &&
            this._closeTime >= this._today &&
            this._day === this.getTodayDayName()
        );
    }
}