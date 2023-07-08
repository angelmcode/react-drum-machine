import '../stylesheets/display.css';

function Display({ volume }) {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <div id="display" className='display'>
          {volume}
        </div>
    </div>
  )
}

export default Display