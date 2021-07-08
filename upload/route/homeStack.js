import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../components/Home'
import task from '../components/task'

const screens = {
 TodoList:{
    screen:Home
 },
 details:{
    screen:task
 }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);