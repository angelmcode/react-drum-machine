import '../stylesheets/volume.css';

function Volume({ onChange, volume }) {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <input className='volume' onChange={onChange} value={volume * 100} type="range" />
    </div>
  )
}

export default Volume;