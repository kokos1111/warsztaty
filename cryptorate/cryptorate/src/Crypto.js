import React, {Component} from 'react';
import axios from 'axios'
import CryptoList from './CryptoList'

class Crypto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cryptoList: [],
            value: ''
        };

    }

    componentDidMount = () => {
        this.getData();

        setInterval(() =>{
         if (this.state.value === ''){
             this.getData();
         };
        },5000);
        
    }

    getData = () => {
        axios.get('https://blockchain.info/pl/ticker')

            .then(response => {
                // modyfikacja struktury
                // I sposób 
                let data = response.data;
                let cryptoList = this.state.cryptoList; //stary kurs
                let newCryptoList = []; //nowy kurs
                // for (let key in data) {
                //     let currentObject = {};
                //     currentObject.currency = key;
                //     currentObject.data = data[key];
                //     cryptoList.push(currentObject);
                    

                // }
                newCryptoList = Object.keys(data) .map(waluta => {
                    let currentObject = {};
                    currentObject.currency = waluta;
                    currentObject.buy = data[waluta].buy;
                    currentObject.sell = data[waluta].sell;
                    currentObject.symbol = data[waluta].symbol;
                    currentObject.last = data[waluta].last;

                    let lastCurrentObject = cryptoList.find(oldObject => oldObject.currency === currentObject.currency); //stary kurs

                    if (lastCurrentObject !== undefined) {
                        if (lastCurrentObject.last > currentObject.last) {
                            currentObject.class = "green";
                        } else if (lastCurrentObject.last < lastCurrentObject.last) {
                            currentObject.class = "red";
                        } else {
                            currentObject.class = "blue";
                        }

                    }    

                    return currentObject;
                });

                this.setState({
                    cryptoList: newCryptoList
                })


            })
            .catch(error => {
                console.log(error);
            });
    }
    onInputChange = event => {
        let filterValue = event.target.value.trim().toUpperCase(); //pozbywamy się spacji i usuwamy duże litery
        let cryptoList = this.state.cryptoList;

        cryptoList = cryptoList.filter(currObj => currObj.currency.search(filterValue) !== -1);


        this.setState({
            cryptoList: cryptoList,
            value: filterValue
        })
    }



    
        render() {
         return(
             
            <div>
                <input type="text" value={this.state.value} onChange={this.onInputChange}/>
                <CryptoList cryptoList={this.state.cryptoList} />
            </div>
                
             
            
         )
    }
}
    

export default Crypto;