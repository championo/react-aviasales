import * as types from "../actionTypes";
import * as actions from "../index";

describe("Сheck actions creators and actions", () => {
  it("Создатель действия setTickets должен создать действие SET_TICKETS", () => {
    const ticketsCollection = [
      {
        id: "1",
        origin: "VVO",
        origin_name: "Владивосток",
        destination: "TLV",
        destination_name: "Тель-Авив",
        departure_date: "12.05.18",
        departure_time: "16:20",
        arrival_date: "12.05.18",
        arrival_time: "22:10",
        carrier: "TK",
        stops: 3,
        price: 12400
      },
      {
        id: "2",
        origin: "VVO",
        origin_name: "Владивосток",
        destination: "TLV",
        destination_name: "Тель-Авив",
        departure_date: "12.05.18",
        departure_time: "17:20",
        arrival_date: "12.05.18",
        arrival_time: "23:50",
        carrier: "S7",
        stops: 1,
        price: 13100
      }
    ];
    expect(actions.setTickets(ticketsCollection)).toEqual({
      type: types.SET_TICKETS,
      tickets: ticketsCollection
    });
  });

  it("Создатель действия setCourses должен создать действие SET_COURSES", () => {
    const coursesCollection = {
      lastUpdate: new Date(),
      valuta: [
        {
          ID: "R01010",
          NumCode: "036",
          CharCode: "AUD",
          Nominal: 1,
          Name: "Австралийский доллар",
          Value: 46.5801,
          Previous: 46.6096
        }
      ]
    };
    expect(actions.setCourses(coursesCollection)).toEqual({
      type: types.SET_COURSES,
      courses: coursesCollection
    });
  });

  it("Создатель действия setCurrency должен создать действие SET_CURRENCY", () => {
    expect(actions.setCurrency("rub")).toEqual({
      type: types.SET_CURRENCY,
      currency: "rub"
    });
  });

  it("Создатель действия setStops должен создать действие SET_STOPS", () => {
    expect(actions.setStops(0)).toEqual({
      type: types.SET_STOPS,
      stopsCount: 0
    });
  });

  it("Создатель действия setOnlyStop должен создать действие SET_ONLY_STOP", () => {
    expect(actions.setOnlyStop(1)).toEqual({
      type: types.SET_ONLY_STOP,
      stopsCount: 1
    });
  });
});