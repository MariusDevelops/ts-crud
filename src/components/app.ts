import Table from "./table";
import cars from "../data/cars";
import brands from "../data/brands";
import models from "../data/models";
import CarsCollection from '../helpers/cars-collection';
import SelectField from './select-field';

class App {
  private carsCollection: CarsCollection;

  private brandSelect: SelectField

  private htmlElement: HTMLElement;

  public constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.carsCollection = new CarsCollection({ cars, brands, models });
    this.carTable = new Table({
      title: 'Visi automobiliai',
      columns: {
        id: 'Id',
        brand: 'Markė',
        model: 'Modelis',
        price: 'Kaina',
        year: 'Metai',
      },
      rowsData: this.carsCollection.all.map(stringifyProps),
    });
    this.brandSelect = new SelectField({
      labelText: 'Markė',
      options: brands.map(({ id, title }) => ({ title, value: id })),
      onChange: this.handleBrandChange
    });
    this.selectedBrandId = null;

    this.htmlElement = foundElement;

    this.initialize();
  }

  private handleBrandChange = (brandId: string): void  => {
    this.selectedBrandId = brandId;

    this.update();
  }
  
  public initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'container my-4 d-flex  flex-column gap-3';
    container.append(
      this.brandSelect.htmlElement,
      this.carTable.htmlElement
    );

    this.htmlElement.append(container);
  };
}

export default App;

// import Table from './table';
// import cars from '../data/cars';
// import brands from '../data/brands';
// import models from '../data/models';
// import CarsCollection from '../helpers/cars-collection';
// import stringifyProps from '../helpers/stingify-object';

// // 1.3. ./components/app.ts
// // 1.3.1. Sukurkite savybes:
// // private htmlElement: HTMLElement;
// // private carsCollection: CarsCollection;
// // 1.3.2. Sukurkite konstruktorių, kuris
// // priimtų selektorių ir pagal jį rastą elementą priskirtų į htmlElement savybę.
// // sukurtų pradinį carsCollection objektą
// // 1.3.3. Sukurkite metodą initialize, kuriame būtų atliekami komponento atvaizdavimo veiksmai
// class App {
//   // 1.3.1.
//   private htmlElement: HTMLElement;

//   private carsCollection: CarsCollection;

//   // 1.3.2.
//   public constructor(selector: string) {
//     const foundElement = document.querySelector<HTMLElement>(selector);

//     if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

//     this.htmlElement = foundElement;
//     // 1.3.2.
//     this.carsCollection = new CarsCollection({ cars, brands, models });
//     // console.log(this.carsCollection);
//   }

//   // 1.3.3.
//   public initialize = (): void => {
//     // this.htmlElement.innerHTML = 'Čia bus pateiktas vaizdas';

//     // 1.5. ./components/app.ts
//     // 1.5.1. papildykite initialize metodą, jog būtų įterpiama lentelė
//       const carTable = new Table({
//       title: 'All Cars for Sale',
//       columns: {
//         id: 'Id',
//         brand: 'Brand',
//         model: 'Model',
//         price: 'Price',
//         year: 'Year',
//       },
//       rowsData: this.carsCollection.all.map(stringifyProps),
//     });

//     const container = document.createElement('div');
//     container.className = 'container my-5';
//     container.appendChild(carTable.htmlElement);

//     this.htmlElement.append(container);
//   };
// }

// export default App;
