import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home'
import Cart from '../pages/Cart'


const Routes = ()=>{

    return (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cart" component={Cart}/>
    </Switch>
    );
}

export default Routes