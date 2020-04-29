import React,{useState,useEffect} from 'react'
import{NativeSelect,FormControl} from '@material-ui/core'
import styles from './country.module.css';
import {fetchcountries} from '../../api'

const CountryPicker=({handleCountryChange})=>{
    const[fetchCountries,SetfetchCountries]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            SetfetchCountries(await fetchcountries());
        }
        fetchApi();
    },[SetfetchCountries])
    
    return(
    <div className={styles.container}>
    
    
        <FormControl className={styles.formControl}>
        <h3>Country</h3>
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value='global'>global</option>
               {fetchCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
       
    )
}
export default CountryPicker