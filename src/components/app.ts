import cars from '../data/cars';
import brands from '../data/brands';
import models from '../data/models';
import CarsCollection from '../helpers/cars-collection';

// 1.3. ./components/app.ts
// 1.3.1. Sukurkite savybes:
// private htmlElement: HTMLElement;
// private carsCollection: CarsCollection;
// 1.3.2. Sukurkite konstruktorių, kuris
// priimtų selektorių ir pagal jį rastą elementą priskirtų į htmlElement savybę.
// sukurtų pradinį carsCollection objektą
// 1.3.3. Sukurkite metodą initialize, kuriame būtų atliekami komponento atvaizdavimo veiksmai
class App {
  // 1.3.1.
  private htmlElement: HTMLElement;

  private carsCollection: CarsCollection;

  // 1.3.2.
  public constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);

    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.htmlElement = foundElement;
    this.carsCollection = new CarsCollection({ cars, brands, models });
    console.log(this.carsCollection);
  }

  // 1.3.3.
  public initialize = (): void => {
    this.htmlElement.innerHTML = 'Čia bus pateiktas vaizdas';
  };
}

export default App;
