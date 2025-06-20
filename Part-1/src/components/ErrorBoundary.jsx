import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (err) {
        return { hasError: true }
    }

    componentDidCatch(err, errInfo) {
        console.log(err, errInfo)
    }

    render() {
        if (this.state.hasError) {
            return <div>Error catched by error boundary</div>
        }

        return this.props.children
    }
}

export default ErrorBoundary