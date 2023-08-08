const Todo = ({todo}) => {
    const style = {
      bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#CB54C1] to-[#DDA5D8]`
    };


    return (
        <li className={style.li}>
            <div className={style.row}>
                <input type='checkbox'/>
                <p className={style.text}>{todo}</p>
            </div>
        </li>
    )
}

export default Todo

