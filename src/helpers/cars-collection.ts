import type Car from '../types/car';
import type Brand from '../types/brand';
import type Model from '../types/model';
import type CarJoined from '../types/car-joined';

// 1.2 ./helpers/cars-collection.ts
// 1.2.1. Sukurkite konstruktorių, kuris priimtų markes, mašinas ir modelius.
// Gautus duomenis išsaugokite objekte

type CarsCollectionProps = {
    cars: Car[],
    brands: Brand[],
    models: Model[],
};

class CarsCollection {
    // 1.2.1
    // private cars: Car[];
    // private brands: Brand[];
    // private models: Model[];

    // public constructor({ cars, brands, models }: CarsCollectionProps) {
    //     this.cars = JSON.parse(JSON.stringify(cars));
    //     this.brands = JSON.parse(JSON.stringify(brands));
    //     this.models = JSON.parse(JSON.stringify(models));
    // }

    // 1.2.2. Sukurkite privatų metodą joinCar kuris apjungtų vieną mašiną
    private props: CarsCollectionProps;

    constructor(props: CarsCollectionProps) {
        this.props = props;
    }

    public joinCar = ({ modelId, ...car }: Car) => {
    const { brands, models } = this.props;
    const carModel = models.find((model) => model.id === modelId);
    const carBrand = brands.find((brand) => brand.id === carModel?.brandId);

    return {
      ...car,
      brand: (carBrand && carBrand.title) ?? 'unknown',
      model: (carModel && carModel.title) ?? 'unknown',
    };
  };

    // 1.2.3. Sukurkite metodą, kurį iškvietus gautumėte visas apjungtas mašinas.
    public get all(): CarJoined[] {
    return this.props.cars.map(this.joinCar);
  }
}

export default CarsCollection;
