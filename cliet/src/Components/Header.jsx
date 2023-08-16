
function Header(props) {

    console.log(props);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                {props.prop}
            </h1>
        </div>
    )
}

export default Header;