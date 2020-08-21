import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as Pg from './Pages/index';
import './styles/Body.css';
import './styles/Colors.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/comidas" component={Pg.FoodScreen} />
        <Route exact path="/" component={Pg.LoginScreen} />
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
    </BrowserRouter>
  );
}

export default App;
