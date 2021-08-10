import react,{Component} from 'react'
export default class Check extends Component {
    state = {
      planets: []
    };
  
    componentDidMount() {
      fetch("/miki/api")
        .then(res => res.json())
        .then(res => this.setState({planets: res }))
    }
   
  
    render() {
      return  <div>
          { console.log(this.state.planets.name)}
            {this.state.planets.map((planet=>{
              {  <ul key={planet.id}>
                    <li>{planet.name}</li>
                    <li>{planet.age}</li>
                    <li>{planet.title}</li>
                </ul>}
                }))
            }
        </div>
    }
  }