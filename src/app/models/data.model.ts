export class typeModel {
    public data: number;
    public date: string;
  }
  export class DataModel {
    public cumCasesByPublishDate: typeModel[];
    public cumDeaths28DaysByPublishDate: typeModel[];
    public cumTestsByPublishDate: typeModel[];
    public newAdmissions: typeModel[];
  
    // public currentDate = null;
  
    // public currentDateCases = null;
    // public currentDateDeaths = null;
    // public currentDateAdmissions = null;
    // public currentDateTests = null;
  
    public Tests = [];
    public Register = [];
    public Deaths = [];
    public Cases = [];
  
    setData(data) {
      let currentDateRow = null;
      if (data.length) {
        currentDateRow = data[0];
      }
  
    //   if (currentDateRow) {
    //     this.currentDateCases = currentDateRow.dailyCases;
    //     this.currentDateDeaths = currentDateRow.dailyDeaths;
    //     this.currentDateAdmissions = currentDateRow.dailyAdmissions;
    //     this.currentDateTests = currentDateRow.dailyTests;
    //     this.currentDate = currentDateRow.date;
    //   }
  
      data.forEach((d) => {
        let { date, dailyCases, dailyTests, dailyDeaths, dailyAdmissions } = d;
        this.Deaths.push({
          date:new Date(date),
          cases:dailyDeaths,
        });
        this.Tests.push({
          date:new Date(date),
          cases:dailyTests,
        });
        this.Register.push({
          date:new Date(date),
          cases:dailyAdmissions,
        });
        this.Cases.push({
          date:new Date(date),
          cases:dailyCases,
        });
      });
      return this;
    }

    // getIterableObject(){
    //     return [
    //         {
    //             type:"admissions"
    //         },
    //         { 
    //             tr
    //         },
    //         {},
    //         {}
    //     ]
    // }
  }
  