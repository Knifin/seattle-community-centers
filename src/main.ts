import './style.css'
import CommunityCenter from "./Objects/CommunityCenter.ts";

class main {
    protected _cc: Array<CommunityCenter>;

    constructor() {
        this._cc = new Array<CommunityCenter>();
        this.buildSchedule();
    }

    protected buildSchedule(): void {
        // Ballard CC
        let location: CommunityCenter = new CommunityCenter('Ballard Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/ballard-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/pAt8c88R5dbeEn8SA';
        location.address = '6020 28th Ave NW, Seattle, WA 98107';
        location.lat = 47.672843549999996;
        location.lng = -122.39218530611328;

        location.addSchedule("2025-01-03 00:00:01", "2025-03-31 23:59:59", "Monday", "10:00", "12:30", "Tot Gym");
        location.addSchedule("2025-01-03 00:00:01", "2025-03-31 23:59:59", "Wednesday", "10:00", "12:30", "Tot Gym");
        location.addSchedule("2025-01-03 00:00:01", "2025-03-31 23:59:59", "Friday", "10:00", "12:30", "Tot Gym");
        this._cc.push(location);

        // Bitter Lake CC
        location = new CommunityCenter('Bitter Lake Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/bitter-lake-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/X4JFhiQLesB2esoX8';
        location.address = '13035 Linden Ave N, Seattle, WA 98133';
        location.lat = 47.72479810602333;
        location.lng = -122.34855274323624;

        location.addSchedule("2025-01-05 00:00:01", "2025-03-31 23:59:59", "Monday", "10:30", "12:30", "Tot Gym");
        location.addSchedule("2025-01-05 00:00:01", "2025-03-31 23:59:59", "Wednesday", "10:30", "12:30", "Tot Gym");
        location.addSchedule("2025-01-05 00:00:01", "2025-03-31 23:59:59", "Friday", "10:30", "12:30", "Tot Gym");
        this._cc.push(location);

        // Delridge CC
        location = new CommunityCenter('Delridge Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/delridge-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/xkseYeTSJk59ukXs7';
        location.address = '4501 Delridge Wy SW, Seattle, WA 98106';
        location.lat = 47.564081801534634;
        location.lng = -122.3637378162162;

        location.addSchedule("2025-01-06 00:00:01", "2025-03-21 23:59:59", "Monday", "09:30", "14:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-21 23:59:59", "Tuesday", "09:30", "14:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-21 23:59:59", "Wednesday", "09:30", "14:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-21 23:59:59", "Thursday", "09:30", "14:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-21 23:59:59", "Friday", "09:30", "14:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-21 23:59:59", "Saturday", "10:00", "14:00", "Tot Room");
        this._cc.push(location);

        // Discovery Park VC
        location = new CommunityCenter('Discovery Park Visitor Center');
        location.website = 'https://www.seattle.gov/parks/allparks/discovery-park/discovery-park-visitor-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/bTgiCATNPByMVVSd6';
        location.address = '3801 Discovery Park Blvd, Seattle, WA 98199';
        location.lat = 47.65805149878053;
        location.lng = -122.40641396387382;

        location.addSchedule("2025-01-06 00:00:01", "2025-03-29 23:59:59", "Monday", "11:30", "16:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-29 23:59:59", "Tuesday", "11:30", "16:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-29 23:59:59", "Wednesday", "11:30", "16:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-29 23:59:59", "Thursday", "11:30", "16:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-29 23:59:59", "Friday", "11:30", "16:30", "Tot Room");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-29 23:59:59", "Saturday", "11:30", "16:30", "Tot Room");
        this._cc.push(location);

        // Garfield CC
        location = new CommunityCenter('Garfield Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/garfield-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/Qe3CxEXQmvKnWreZA';
        location.address = '2323 E Cherry St, Seattle, WA 98122';
        location.lat = 47.60785694038088;
        location.lng = -122.3012500192359;

        location.addSchedule("2025-01-06 00:00:01", "2025-03-31 23:59:59", "Monday", "10:00", "13:00", "Tot Gym");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-31 23:59:59", "Wednesday", "10:00", "13:00", "Tot Gym");

        this._cc.push(location);

        // Green Lake CC
        location = new CommunityCenter('Green Lake Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/green-lake-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/cneEd1behCzrQW476';
        location.address = '7201 East Green Lake Dr N, Seattle, WA 98115';
        location.lat = 47.68092457373161;
        location.lng = -122.32883869072076;

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Monday", "10:00", "13:00", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Monday", "14:00", "20:00", "Tot Room");

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Tuesday", "10:00", "13:00", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Tuesday", "14:00", "20:00", "Tot Room");

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Wednesday", "10:00", "13:00", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Wednesday", "14:00", "20:00", "Tot Room");

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Thursday", "10:00", "13:00", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Thursday", "14:00", "20:00", "Tot Room");

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Friday", "10:00", "13:00", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Friday", "14:00", "20:00", "Tot Room");

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Saturday", "10:00", "13:00", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Saturday", "14:00", "20:00", "Tot Room");
        this._cc.push(location);

        // High Point CC
        location = new CommunityCenter('High Point Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/high-point-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/mUj6TVHug8svuDgF7';
        location.address = '6920 34th Ave SW, Seattle, WA 98126';
        location.lat = 47.54083334641864;
        location.lng = -122.37470685082006;

        location.addSchedule("2025-01-07 00:00:01", "2025-03-27 23:59:59", "Tuesday", "10:00", "12:30", "Tot Gym");
        location.addSchedule("2025-01-07 00:00:01", "2025-03-27 23:59:59", "Thursday", "10:00", "12:30", "Tot Gym");

        this._cc.push(location);

        // Jefferson CC
        location = new CommunityCenter('Jefferson Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/jefferson-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/4qKWT9fWfYqDd8z99';
        location.address = '3801 Beacon Ave S, Seattle, WA 98108';
        location.lat = 47.56950069332558;
        location.lng = -122.30811557961836;

        location.addSchedule("2025-01-07 00:00:01", "2025-03-27 23:59:59", "Tuesday", "10:00", "14:00", "Tot Gym");
        location.addSchedule("2025-01-07 00:00:01", "2025-03-27 23:59:59", "Thursday", "10:00", "14:00", "Tot Gym");

        this._cc.push(location);

        // Lake City CC
        location = new CommunityCenter('Lake City Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/lake-city-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/KYMKB5UaL3M3qHip7';
        location.address = '12360 Lake City Way NE #100, Seattle, WA 98125';
        location.lat = 47.718953310478284;
        location.lng = -122.29432046098346;

        location.addSchedule("2025-01-07 00:00:01", "2025-03-27 23:59:59", "Tuesday", "10:00", "12:00", "Tot Gym");
        location.addSchedule("2025-01-07 00:00:01", "2025-03-27 23:59:59", "Thursday", "10:00", "12:00", "Tot Gym");

        this._cc.push(location);

        // Laurelhurst CC
        location = new CommunityCenter('Laurelhurst Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/laurelhurst-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/dHXpGs8YDqcouUuU9';
        location.address = '4554 NE 41st St, Seattle, WA 98105';
        location.lat = 47.706322076451094;
        location.lng = -122.29112529312832;

        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Monday", "14:30", "18:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Tuesday", "09:30", "13:00", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Wednesday", "14:30", "18:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Thursday", "09:30", "13:00", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Friday", "14:30", "18:30", "Tot Room");
        this._cc.push(location);

        // Loyal Heights CC
        location = new CommunityCenter('Loyal Heights Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/loyal-heights-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/C9Dbitw1FS75pqH49';
        location.address = '2101 NW 77th St, Seattle, WA 98117';
        location.lat = 47.68495525560374;
        location.lng = -122.38370665008466;

        this._cc.push(location);

        // Magnuson CC
        location = new CommunityCenter('Magnuson Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/magnuson-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/Napje6m3oWYZSKpW6';
        location.address = '7110 62nd Ave NE, Seattle, WA 98115';
        location.lat = 47.680028065834605;
        location.lng = -122.26190036659878;

        location.addSchedule("2025-01-07 00:00:01", "2025-03-27 23:59:59", "Wednesday", "9:30", "11:30", "Tot Gym");

        this._cc.push(location);

        // Meadowbrook CC
        location = new CommunityCenter('Meadowbrook Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/meadowbrook-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/DaomguKiTcDo9ubFA';
        location.address = '10517 35th Ave NE, Seattle, WA 98125';
        location.lat = 47.70617515758765;
        location.lng = -122.29112527279621;

        location.addSchedule("2025-01-03 00:00:01", "2025-03-31 23:59:59", "Monday", "12:00", "14:30", "Tot Gym");
        location.addSchedule("2025-01-03 00:00:01", "2025-03-31 23:59:59", "Wednesday", "12:00", "14:30", "Tot Gym");
        location.addSchedule("2025-01-03 00:00:01", "2025-03-31 23:59:59", "Friday", "12:00", "14:30", "Tot Gym");

        this._cc.push(location);

        // Miller CC
        location = new CommunityCenter('Miller Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/miller-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/fbEsitkUkFhW9TDa6';
        location.address = '330 19th Ave E, Seattle, WA 98112';
        location.lat = 47.6212612930151;
        location.lng = -122.30706602348438;

        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Tuesday", "10:00", "13:00", "Tot Gym");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Thursday", "10:00", "13:00", "Tot Gym");

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Monday", "10:00", "18:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Tuesday", "10:00", "18:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Wednesday", "10:00", "18:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Thursday", "10:00", "18:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Friday", "10:00", "18:30", "Tot Room");

        this._cc.push(location);

        // Northgate CC
        location = new CommunityCenter('Northgate Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/northgate-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/KMuLLwEfYKGx9GGa6';
        location.address = '10510 5th Ave NE, Seattle, WA 98125';
        location.lat = 47.70629580360756;
        location.lng = -122.3225326413714;

        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Tuesday", "9:00", "11:30", "Tot Gym");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Thursday", "9:00", "11:30", "Tot Gym");

        this._cc.push(location);

        // Queen Anne CC
        location = new CommunityCenter('Queen Anne Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/queen-anne-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/aF3DskRtQhuTBpJ87';
        location.address = '1901 1st Ave W, Seattle, WA 98119';
        location.lat = 47.63738697323356;
        location.lng = -122.35897071435109;

        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Tuesday", "9:30", "11:30", "Tot Gym");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Thursday", "9:30", "11:30", "Tot Gym");

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Monday", "09:00", "19:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Tuesday", "09:00", "19:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Wednesday", "09:00", "19:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Thursday", "09:00", "19:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Friday", "09:00", "19:30", "Tot Room");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Saturday", "09:00", "19:30", "Tot Room");
        this._cc.push(location);

        // Rainier CC
        location = new CommunityCenter('Rainier Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/rainier-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/PxSTAwYZ3vrkgd2z9';
        location.address = '4600 38th Ave. S, Seattle, WA 98118';
        location.lat = 47.561480074710275;
        location.lng = -122.28334756106187;

        this._cc.push(location);

        // Rainier Beach CC
        location = new CommunityCenter('Rainier Beach Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/rainier-beach-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/zEmXHtuu9BoWhBBW8';
        location.address = '8825 Rainier Ave S, Seattle, WA 98118';
        location.lat = 47.52483356301034;
        location.lng = -122.27058996228826;

        location.addSchedule("2025-01-06 00:00:01", "2025-03-31 23:59:59", "Monday", "9:00", "12:00", "Tot Gym");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-31 23:59:59", "Thursday", "9:00", "12:00", "Tot Gym");
        location.addSchedule("2025-01-06 00:00:01", "2025-03-31 23:59:59", "Friday", "9:00", "12:00", "Tot Gym");

        this._cc.push(location);

        // Ravenna-Eckstein CC
        location = new CommunityCenter('Ravenna Eckstein Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/ravenna-eckstein-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/Xcor5qXBYTHG9XGq7';
        location.address = '6535 Ravenna Ave NE, Seattle, WA 98115';
        location.lat = 47.67647592126659;
        location.lng = -122.30513906458229;

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Monday", "12:30", "14:30", "Tot Gym");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Tuesday", "12:30", "14:30", "Tot Gym");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Wednesday", "12:30", "14:30", "Tot Gym");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Thursday", "12:30", "14:30", "Tot Gym");

        location.addSchedule("2025-01-04 00:00:01", "2025-03-29 23:59:59", "Saturday", "11:30", "16:30", "Tot Room");
        this._cc.push(location);

        // Van Asselt CC
        location = new CommunityCenter('Van Asselt Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/van-asselt-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/XfB89UxqAVnfNjD5A';
        location.address = '2820 S Myrtle St, Seattle, WA 98108';
        location.lat = 47.5397172213937;
        location.lng = -122.29575124031376;

        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Tuesday", "11:00", "14:00", "Tot Gym");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-27 23:59:59", "Thursday", "11:00", "14:00", "Tot Gym");

        this._cc.push(location);

        // Yesler CC
        location = new CommunityCenter('Yesler Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/yesler-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/ecf4yiA5q23TygT98';
        location.address = '917 E Yesler Wy, Seattle, WA 98122';
        location.lat = 47.60104392465421;
        location.lng = -122.31975867368088;

        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Monday", "11:00", "13:00", "Tot Gym");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Wednesday", "11:00", "13:00", "Tot Gym");
        location.addSchedule("2025-01-02 00:00:01", "2025-03-31 23:59:59", "Friday", "11:00", "13:00", "Tot Gym");

        this._cc.push(location);
    }

    public printOpenNow(type: string, title: string, divId: string) {
        let html: string = `
            <table>
            <thead>
                <tr>
                    <td colspan="3"><h3>${title}</h3></td>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Schedule</th>
                    <th>Left to Play</th>
                </tr>
            </thead>
            <tbody>
        `;

        let isOpenCheck: boolean = false;
        this._cc.forEach(cc => {
            cc.schedule.forEach(item => {
                if (item.type === type && item.isOpenNow()) {
                    html += `
                        <tr>
                        <td><a href="${cc.website}" target="_blank">${cc.name}</a></td>
                        <td><a href="${cc.getDirections()}" target="_blank">${cc.address}</a></td>
                        <td>${item.getHoursOpen()}</td>
                        <td>${item.getTimeLeft()}</td>
                        </tr>
                    `;

                    isOpenCheck = true;
                }
            });
        });

        html += `
            </tbody>
            </table>
        `;

        if (!isOpenCheck) {
            html = `Nothing open right now for ${type}`;
        }

        document.querySelector<HTMLDivElement>(divId)!.innerHTML = html;
    }

    public printTodaysSchedule(type: string, title: string, divId: string) {
        let html: string = `
            <table>
            <thead>
                <tr>
                    <td colspan="3"><h3>${title}</h3></td>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Schedule</th>
                </tr>
            </thead>
            <tbody>
        `;

        let isOpenCheck: boolean = false;
        this._cc.forEach(cc => {
            cc.schedule.forEach(item => {
                if (item.type === type && item.isOpenToday()) {
                    html += `
                        <tr>
                        <td><a href="${cc.website}" target="_blank">${cc.name}</a></td>
                        <td><a href="${cc.getDirections()}" target="_blank">${cc.address}</a></td>
                        <td>${item.getHoursOpen()}</td>
                        </tr>
                    `;
                    isOpenCheck = true;
                }
            });
        });

        html += `
            </tbody>
            </table>
        `;

        if (!isOpenCheck) {
            html = `Nothing open today for ${type}`;
        }

        document.querySelector<HTMLDivElement>(divId)!.innerHTML = html;
    }

    public getWeekDay(): string {
        const date: Date = new Date();
        return date.toLocaleString('en-US', {weekday: 'long'});
    }

    public printSchedules(): void {
        app.printTodaysSchedule('Tot Gym', `Tot Gyms currently open on ${app.getWeekDay()}`,'#gym-schedule-today');
        app.printTodaysSchedule('Tot Room', `Tot Rooms currently open on ${app.getWeekDay()}`,'#tot-room-schedule-today');
    }

    public printCurrentSchedule(): void {
        app.printOpenNow('Tot Gym', `Tot Gyms open on ${app.getWeekDay()}`,'#gym-schedule-now');
        app.printOpenNow('Tot Room', `Tot Rooms open on ${app.getWeekDay()}`,'#tot-room-schedule-now');
    }
}

const app: main = new main();
app.printSchedules();
app.printCurrentSchedule();

const now: Date = new Date();
const millisecondsUntilNextMinute: number = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
setTimeout(() => {
    setInterval(() => {
        app.printCurrentSchedule();
    }, 60000);
}, millisecondsUntilNextMinute);