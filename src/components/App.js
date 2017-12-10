import React from 'react'
import Wallet from './Wallet'
import Loot from './Loot'

const bitcoinImage = require('../images/bitcoin.png');

const App = () =>  {
    return (
        <div>
            <h1>Bitcoin Conversor</h1>
            <Loot />
            <Wallet />
        </div>
    )
}

export default App;