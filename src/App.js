import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import * as Pg from './Pages/index';

function App() {
  return (
    <BrowserRouter>
      <h1>começando a bagaça</h1>
      <Switch>
        <Route exact path="/" component={Pg.LoginScreen} />
        <Route exact path="/comidas" component={Pg.FoodScreen} />
        <Route exact path="/bebidas" component={Pg.DrinkScreen} />
        <Route exact path="/comidas/:id" component={Pg.FoodDetails} />
        <Route exact path="/bebidas/:id" component={Pg.DrinkDetails} />
        <Route exact path="/comidas/:id/in-progress" component={Pg.FoodProgress} />
        <Route exact path="/bebidas/:id/in-progress" component={Pg.DrinkProgress} />
        <Route exact path="/explorar" component={Pg.ExploreScreen} />
        <Route exact path="/explorar/comidas" component={Pg.ExploreFoods} />
        <Route exact path="/explorar/bebidas" component={Pg.ExploreDrinks} />
        <Route exact path="/explorar/comidas/ingredientes" component={Pg.IngredientsFoods} />
        <Route exact path="/explorar/bebidas/ingredientes" component={Pg.IngredientsDrinks} />
        <Route exact path="/explorar/comidas/area" component={Pg.FoodArea} />
        <Route exact path="/perfil" component={Pg.ProfileScreen} />
        <Route exact path="/receitas-feitas" component={Pg.RecipesDone} />
        <Route exact path="/receitas-favoritas" component={Pg.RecipesFavorites} />
        <Route path="/" component={Pg.NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
