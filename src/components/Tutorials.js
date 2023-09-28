const Tutorials = (props) => {
    setTimeout(() => {
        console.log(props)
            props.history.push('/');
    }, 5000);

    return (
        <div className="container mt-3">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <h1>Tutoriel : intro à React</h1>
        </div>
    )
}

export default Tutorials;