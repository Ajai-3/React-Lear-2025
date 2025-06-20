import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    // gtd sfe
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error catched by the error boundary", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <div>Error catched by the error boundary</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary