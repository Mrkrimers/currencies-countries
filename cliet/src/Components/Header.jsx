
function Header(props) {

    let XXX = ''
    for (let i = 0; i < props.lable.length; i++) {
        if (!XXX.length) { XXX = props.lable[i].Cur_Abbreviation }
    }
    console.log(props);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                {props.age}
            </h1>

            <p>
                {XXX}
            </p>
        </div >
    )
}

export default Header;