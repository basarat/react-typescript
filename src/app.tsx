import * as React from "react";
import * as ReactDOM from "react-dom";

class Hello extends React.Component<{ compiler: string, framework: string }, {}> {
    render() {
        return (
            <div>
                <div>{this.props.compiler}</div>
                <div>{this.props.framework}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);
