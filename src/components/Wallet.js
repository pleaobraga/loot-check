import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {

    constructor() {
        super();

        this.state = { balance: undefined };
    }

    updateBalance = event => this.setState({ balance: parseInt(event.target.value, 10) })

    deposit = () => this.props.deposit(this.state.balance)

    withdraw = () => this.props.withdraw(this.state.balance)

    render() {
        return (
            <div>
                <h3 className='balance' >Wallet Balance: US$ {this.props.balance},00</h3>
                <br/>
                <div className='center' >
                    <input type='number' className='input-wallet' onChange={ this.updateBalance } />
                    <div className='col-xs-12 col-md-6' >
                        <button className='btn-deposit btn-success btn-lg btn-block' onClick={ this.deposit }>Deposit</button>
                    </div>
                    <div className='col-xs-12 col-md-6' >
                        <button className='btn-withdraw btn-primary btn-lg btn-block' onClick={ this.withdraw }>Withdraw</button>
                    </div>
                </div>
            </div>
        )
    }
}

//mapeStateToProps() => {}

export default connect( state => { return { balance: state.balance } } ,{ deposit, withdraw })(Wallet);