import { StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";

const PreLoad = (props) => {

    // Temporário
    props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'StarterStack' })
        ],
    }));

    /* if (!props.name) {
        // enviar usuário para tela StarterStack
        props.navigation.dispath(StackActions.reset({
            index: 0,
            actions: [
                NavigationAction.navigation({ routeName: 'StarterStack' })
            ]
        }));
    } else {
        // enviar usuário para tela AppTab
        props.navigation.dispath(StackActions.reset({
            index: 0,
            actions: [
                NavigationAction.navigation({ routeName: 'AppTab' })
            ]
        }));
    } */


    return null;
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name
    };
}

export default connect(mapStateToProps)(PreLoad);