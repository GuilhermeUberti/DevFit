import { StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";

const PreLoad = (props) => {

    if (!props.name) {
        // enviar usuário para tela StarterStack
        props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'StarterStack' })
            ]
        }));
    } else {
        // enviar usuário para tela AppTab
        props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'AppTab' })
            ]
        }));
    }


    return null;
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name
    };
}

export default connect(mapStateToProps)(PreLoad);