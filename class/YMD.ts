class YMD {
  year: number;
  month: number;
  day: number;

  // [0] => 平年の時の各月の日数
  // [1] => 閏年の時の各月の日数
  private static mdays: number[][] = [
    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  ];

  constructor(year?: number, month?: number, day?: number) {
    const now = new Date();
    this.year = year || now.getFullYear();
    this.month = month || now.getMonth() + 1;
    this.day = day || now.getDate();
  }

  static isLeap(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? true
      : false;
  }

  after(num: number) {
    let currentMonthDays = YMD.mdays[YMD.isLeap(this.year) ? 1 : 0][this.month];
    if (this.day + num > currentMonthDays) {
      if (this.month + 1 > 12)
        return `${this.year + 1}年1月${this.day + num - currentMonthDays}`;
      else
        return `${this.year}年${this.month + 1}月${this.day +
          num -
          currentMonthDays +
          1}`;
    } else return `${this.year}年${this.month}月${this.day + num}`;
  }
  before(num: number) {
    let beforeMonthDays =
      YMD.mdays[YMD.isLeap(this.year) ? 1 : 0][this.month - 1];
    if (this.day - num < 1) {
      if (this.month - 1 < 1)
        return `${this.year - 1}年12月${beforeMonthDays -
          Math.abs(this.day - num)}`;
      else
        return `${this.year}年${this.month - 1}月${beforeMonthDays -
          Math.abs(this.day - num)}`;
    } else {
      return `${this.year}年${this.month}月${this.day - num}`;
    }
  }
}

const now = new YMD();
console.log(now.after(20));
console.log(now.before(20));
