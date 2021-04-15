import './App.css';
import {store} from "./index";
import {asyncIncrement, decrement, increment} from "./actions";
import {connect} from "react-redux";

function inc() {
    return store.dispatch(increment())
}

function dec() {
    return store.dispatch(decrement())
}

function asyncInc() {
    return store.dispatch(asyncIncrement())
}

function App({counter}) {
    store.dispatch({type: 'INIT'})

    return (
        <div className="wrapCounters">
            <div className="counter">Счетчик {counter}</div>
            <div className="buttons">
                <button onClick={() => inc()}>Add 1</button>
                <button onClick={() => dec()}>Minus 1</button>
                <button onClick={() => asyncInc()}>Async add 1</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    counter: state.counter,
})

export default connect(mapStateToProps, null)(App);
