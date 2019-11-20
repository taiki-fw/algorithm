class PhyscData {
  name: string;
  height: number;
  vision: number;
  constructor(name: string, height: number, vision: number) {
    this.name = name;
    this.height = height;
    this.vision = vision;
  }
  // static は　個々のインスタンスが持つべきものではなく、クラスとして持つべきものを示している。 => インスタンスによって不変なもの
  static aveHeight(data: PhyscData[]): number {
    let sum: number = 0;

    for (let i = 0; i < data.length; i++) {
      sum += data[i].height;
    }
    return sum / data.length;
  }

  static distVision(data: PhyscData[], vdist: string[], VMAX: number): void {
    for (let index = 0; index < data.length; index++) {
      if (data[index].vision >= 0 && data[index].vision <= VMAX / 10.0) {
        vdist[data[index].vision * 10] += "*";
      }
    }
  }
}

const data: PhyscData[] = [
  new PhyscData("山田一郎", 162, 0.3),
  new PhyscData("山田二郎", 173, 0.7),
  new PhyscData("山田三郎", 175, 2.0),
  new PhyscData("山田四郎", 171, 1.5),
  new PhyscData("山田五郎", 168, 0.4),
  new PhyscData("山田六郎", 174, 1.2),
  new PhyscData("山田七郎", 169, 0.8)
];
const VMAX = 21;
let vdist: string[] = new Array(VMAX + 1).fill("");
console.log(vdist);
PhyscData.distVision(data, vdist, VMAX);
for (let i = 0; i <= VMAX; i++) {
  console.log(`${i / 10.0} ~ ${vdist[i]}`);
}
