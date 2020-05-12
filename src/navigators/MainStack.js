import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PreLoad from "../screens/PreLoad";
import StarterStack from "./StarterStack";
//import AppTab from "./AppTab";

const MainStack = createStackNavigator({
    PreLoad,
    StarterStack,
    //AppTab
}, {
    initialRouteName: 'PreLoad',
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(MainStack);