import './style.css'
import CommunityCenter from "./Objects/CommunityCenter.ts";
import Schedule from "./Objects/Schedule.ts";

class main {
    public _cc: Array<CommunityCenter>;

    constructor() {
        this._cc = new Array<CommunityCenter>();

        // Ballard CC
        let location: CommunityCenter = new CommunityCenter('Ballard Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/ballard-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/pAt8c88R5dbeEn8SA';
        location.address = '6020 28th Ave NW, Seattle, WA 98107';
        location.lat = 47.672843549999996;
        location.lng = -122.39218530611328;

        location.addSchedule("Sunday", 10, 0,14, 0);
        location.addSchedule("Monday", 10,0,19,0);
        location.addSchedule("Tuesday", 10,0,19,0);
        location.addSchedule("Wednesday", 10,0,19,0);
        location.addSchedule("Thursday", 10,0,19,0);
        location.addSchedule("Friday", 10,0,19,0);
        location.addSchedule("Saturday", 10,0,17,0);
        this._cc.push(location);

        // Delridge CC
        location = new CommunityCenter('Delridge Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/delridge-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/xkseYeTSJk59ukXs7';
        location.address = '4501 Delridge Wy SW, Seattle, WA 98106';
        location.lat = 47.564081801534634;
        location.lng = -122.3637378162162;

        location.addSchedule("Monday", 10,0,15,0);
        location.addSchedule("Tuesday", 10,0,15,0);
        location.addSchedule("Wednesday", 10,0,15,0);
        location.addSchedule("Thursday", 10,0,15,0);
        location.addSchedule("Friday", 10,0,15,0);
        location.addSchedule("Saturday", 10,0,14,0);
        this._cc.push(location);

        // Discovery Park VC
        location = new CommunityCenter('Discovery Park Visitor Center');
        location.website = 'https://www.seattle.gov/parks/allparks/discovery-park/discovery-park-visitor-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/bTgiCATNPByMVVSd6';
        location.address = '3801 Discovery Park Blvd, Seattle, WA 98199';
        location.lat = 47.65805149878053;
        location.lng = -122.40641396387382;

        location.addSchedule("Tuesday", 9,0,16,30);
        location.addSchedule("Wednesday", 9,0,16,30);
        location.addSchedule("Thursday", 9,0,16,30);
        location.addSchedule("Friday", 9,0,16,30);
        location.addSchedule("Saturday", 9,0,16,30);
        this._cc.push(location);

        // Green Lake CC
        location = new CommunityCenter('Green Lake Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/green-lake-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/cneEd1behCzrQW476';
        location.address = '7201 East Green Lake Dr N, Seattle, WA 98115';
        location.lat = 47.68092457373161;
        location.lng = -122.32883869072076;

        location.addSchedule("Monday", 10,0,13,0);
        location.addSchedule("Monday", 14,0,20,0);

        location.addSchedule("Tuesday", 10,0,13,0);
        location.addSchedule("Tuesday", 14,0,20,0);

        location.addSchedule("Wednesday", 10,0,13,0);
        location.addSchedule("Wednesday", 14,0,20,0);

        location.addSchedule("Thursday", 10,0,13,0);
        location.addSchedule("Thursday", 14,0,20,0);

        location.addSchedule("Friday", 10,0,13,0);
        location.addSchedule("Friday", 14,0,20,0);

        location.addSchedule("Saturday", 8,30,13,0);
        location.addSchedule("Saturday", 14,0,16,30);
        this._cc.push(location);

        // Lake City CC
        location = new CommunityCenter('Lake City Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/lake-city-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/KYMKB5UaL3M3qHip7';
        location.address = '12360 Lake City Way NE #100, Seattle, WA 98125';
        location.lat = 47.718953310478284;
        location.lng = -122.29432046098346;

        location.addSchedule("Tuesday", 10,0,12,0);
        location.addSchedule("Thursday", 10,0,12,0);
        this._cc.push(location);

        // Laurelhurst CC
        location = new CommunityCenter('Laurelhurst Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/laurelhurst-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/dHXpGs8YDqcouUuU9';
        location.address = '4554 NE 41st St, Seattle, WA 98105';
        location.lat = 47.706322076451094;
        location.lng = -122.29112529312832;

        location.addSchedule("Monday", 14,30,18,0);
        location.addSchedule("Tuesday", 9,30,13,0);
        location.addSchedule("Wednesday", 14,30,18,0);
        location.addSchedule("Thursday", 9,30,13,0);
        this._cc.push(location);

        // Meadowbrook CC
        location = new CommunityCenter('Meadowbrook Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/meadowbrook-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/DaomguKiTcDo9ubFA';
        location.address = '10517 35th Ave NE, Seattle, WA 98125';
        location.lat = 47.70617515758765;
        location.lng = -122.29112527279621;

        location.addSchedule("Monday", 12,30,14,30);
        location.addSchedule("Wednesday", 12,30,14,30);
        location.addSchedule("Friday", 12,30,14,30);
        this._cc.push(location);

        // Miller CC
        location = new CommunityCenter('Miller Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/miller-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/fbEsitkUkFhW9TDa6';
        location.address = '330 19th Ave E, Seattle, WA 98112';
        location.lat = 47.6212612930151;
        location.lng = -122.30706602348438;

        location.addSchedule("Monday", 10,0,18,30);
        location.addSchedule("Tuesday", 10,0,18,30);
        location.addSchedule("Wednesday", 10,0,18,30);
        location.addSchedule("Thursday", 10,0,18,30);
        location.addSchedule("Friday", 110,0,18,30);
        this._cc.push(location);

        // Queen Anne CC
        location = new CommunityCenter('Queen Anne Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/queen-anne-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/aF3DskRtQhuTBpJ87';
        location.address = '1901 1st Ave W, Seattle, WA 98119';
        location.lat = 47.63738697323356;
        location.lng = -122.35897071435109;

        location.addSchedule("Monday", 9,0,19,30);
        location.addSchedule("Tuesday", 9,0,19,30);
        location.addSchedule("Wednesday", 9,0,19,30);
        location.addSchedule("Thursday", 9,0,19,30);
        location.addSchedule("Friday", 9,0,19,30);
        location.addSchedule("Saturday", 9,0,16,30);
        this._cc.push(location);

        // Ravenna-Eckstein CC
        location = new CommunityCenter('Ravenna Eckstein Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/ravenna-eckstein-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/Xcor5qXBYTHG9XGq7';
        location.address = '6535 Ravenna Ave NE, Seattle, WA 98115';
        location.lat = 47.67647592126659;
        location.lng = -122.30513906458229;

        location.addSchedule("Monday", 15,0,16,30);
        location.addSchedule("Monday", 18,0,19,0);
        location.addSchedule("Friday", 17,0,19,0);
        location.addSchedule("Saturday", 11,30,16,30);
        this._cc.push(location);
    }

    public print(date: Date, title: string): string {
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        let output: string = `<table><thead><tr><td colspan="5"><strong>${title}</strong></td></tr><tr><th>Name</th><th>Address</th><th>Schedule</th><th>Closes in</th></tr></thead>`;

        this._cc.forEach((item: CommunityCenter): void => {
            item.schedule.forEach((slot: Schedule): void => {
                if (slot.isOpen(dayName, date.getHours(), date.getMinutes())) {
                    output += `<tr><td><a href="${item.website}" target="_blank">${item.name}</a></td><td><a href="${item.getDirections()}" target="_blank">${item.address}</a></td><td>${slot.getHoursOpen()}</td><td>${slot.getTimeUntilClose(date.getHours(),date.getMinutes())}</td></tr>`;
                }
            });
        });

        output += `</table>`;

        return output;
    }
}

const app: main = new main();
const now: Date = new Date();
const dayName: string = now.toLocaleString('en-US', { weekday: 'long' });
document.querySelector<HTMLDivElement>('#schedule-current')!.innerHTML = `${app.print(now, `Tot Rooms Currently Open on ${dayName}`)}`;