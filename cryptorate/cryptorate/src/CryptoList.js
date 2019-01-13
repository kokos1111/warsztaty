import React, {Component} from 'react'

class CryptoList extends Component {
    render() {
        return(
            <ul>
                {this.props.cryptoList.map(waluta => 
                <li className={waluta.class} key={waluta.currency}>Last rate: {waluta.buy}
                <span>{`${waluta.currency} [${waluta.symbol}]`}</span>

                </li>
                )}
            </ul>
        )
    }
}



export default CryptoList;