import React from 'react'
 import {Cards,Charts,CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import img from './images/cornavirus1.png'
class App extends React.Component{
    state={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetchdata=await fetchData();
        this.setState({data:fetchdata})
        
    }
    handleCountryChange=async(country)=>{
        const fetchdata=await fetchData(country);
        this.setState({data:fetchdata,country:country})
    
        
    }
    render(){
       const {data,country}=this.state
        return(

            <div className={styles.container}>
             <img src={img} alt="Logo" className={styles.img} />
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Charts data={data} country={country}/>
            
                
            </div>
        )
    }
}
export default App