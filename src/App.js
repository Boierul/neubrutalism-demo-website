import './App.css';
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./components/home/Home";
import ReactDOM from 'react-dom';
import Container from "./components/container/Container";

function App() {
    return (
        <ReactFullpage
            scrollingSpeed={1000}
            parallax={true}
            navigation={true}
            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Home handleClick={() => fullpageApi.moveSectionDown()}/>
                        </div>
                        <div className="section">
                            <Container/>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default App;
