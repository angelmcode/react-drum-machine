import '../stylesheets/switch.css';

function Switch({ title, buttonClic, manageClick }) {
  // const [count, setCount] = useState(0)

  return (
    <div className='container_switch'>
        <p className='p_switch'>{title}</p>
        <div className={buttonClic?"switch":"switch2"} onClick={manageClick}>
            <div className="switch_on_off"></div>
        </div>
    </div>
  )
}

export default Switch;