import App from './components/app';
// import CarsCollection from './helpers/cars-collection';
// import cars from './data/cars';
// import brands from './data/brands';
// import models from './data/models';

// 1.2.1. Gautus duomenis išsaugokite objekte
// const carsCollection = new CarsCollection({
//     cars,
//     brands,
//     models,
// });

// console.log(carsCollection);
// 1.2.2. Viena apjungta mašina
// console.log(carsCollection.joinCar(cars[0]));
// 1.2.3. Gauti visas mašinas
// console.log(carsCollection.all);

const app = new App('#root');
app.initialize();
