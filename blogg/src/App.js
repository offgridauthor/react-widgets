import logo from './logo.svg';
import './App.css';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard"
import WarningMessage from "./WarningMessage";

function App() {
    return (
        <div className="App">
            <ApprovalCard>CONFIRM THIS MESSAGE.</ApprovalCard>
            <ApprovalCard><WarningMessage/></ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Dude" comment="Rest easy"/>
            </ApprovalCard>
        </div>
    );
}

export default App;
