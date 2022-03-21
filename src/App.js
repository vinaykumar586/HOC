import React, {Component} from 'react';
import Hoc from './HOC';
import StockList from './StockList';
import UserList from './UserList';

const StocksData = [
    {
        id: 1,
        name: 'TCS'

    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
];
const UsersData = [
    {
        id: 1,
        name: 'Krunal'

    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
];
const Stocks =Hoc(
    StockList,
    StocksData
)
const Users = Hoc(
    UserList,
    UsersData
)
class App extends Component {
  render(){
    return (
        <div>
            <Users></Users>
        </div>
    )
  }
}
App = Hoc(App)
export  default  App;
