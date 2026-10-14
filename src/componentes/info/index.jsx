import './style.css'
import poderes from '../../assets/poderes-pokemon.png'

function Info() {
  return (
    <main className="c-info">
      <h1>Info</h1>
      <img
        src={poderes}
        alt="Pokédex de poderes Pokémon: poderes ofensivos, defensivos, curativos, de apoyo y de estado"
        className="c-info-imagen"
      />
    </main>
  )
}

export default Info