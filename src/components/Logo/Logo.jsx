import portfolio from "../../config/portfolio";

const Logo = () => {
    return(
        <div className="logo">
            <div>
                <small>{portfolio.logo.fullName}</small>
            </div>
        </div>
    );
}

export default Logo;