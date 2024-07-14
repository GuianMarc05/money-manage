import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlabalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<>
			<h3>Transaction History</h3>
			<ul className="list">
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	);
};
