import Brand from './brand';
import Model from './model';
import Car from './car';

type CarJoined = Omit<Car, 'modelId'> & {
  brand: Brand['title'],
  model: Model['title'],
};

export default CarJoined;

/* 1.1 Aplanke ./types duoti tipų 'griaučiai'.
Implementuokite tipus pagal schemą. car-joined.ts tipas turi turėti tokias savybes:
id: string
price: number
year: number
brand: string
model: string
*/

// type CarJoined = {
//     id: string
//     price: number
//     year: number
//     brand: string
//     model: string
// };

// export default CarJoined;
