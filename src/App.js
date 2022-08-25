import './App.css';
import './scss/app.scss';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Sort from './components/sort/Sort';
import PizzaBlock from './components/pizzablock/PizzaBlock';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Bütün Pizzalar</h2>
            <div className="content__items">
              <PizzaBlock title={'Sucuk və Göbələk'} price={10} />
              <PizzaBlock title={'4 Mövsüm'} price={5} />
              <PizzaBlock title={'Toyuq Barbekü'} price={8} />
              <PizzaBlock title={'Deluxe Dönər'} price={10.9} />
              <PizzaBlock title={'Italyano'} price={16} />
              <PizzaBlock title={'Amercano'} price={17} />
              <PizzaBlock title={'Mexicano'} price={15} />
              <PizzaBlock title={'4 Pendirli'} price={19} />
              <PizzaBlock title={'Supreme'} price={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
