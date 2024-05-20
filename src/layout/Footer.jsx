function Footer() {
    return (
        <footer className="bg-body-secondary py-3">
            <div className="container-xxl d-flex flex-wrap justify-content-between align-items-center border-top">
                <p className="col-md-4 mb-0 text-body-secondary">© {new Date().getFullYear()} Company, Inc</p>
                <a className="link-body-emphasis text-decoration-none" href="#">Repository</a>
            </div>
        </footer>
    );
}

export {Footer}