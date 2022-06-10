import Snabbdom from 'snabbdom-pragma'
import layout from './layout'
import { transactions } from './transactions'

const isTouch = process.browser && ('ontouchstart' in window)

const homeLayout = (body, { t, activeTab, ...S }) => layout(
    <div>
       { body }
     </div>
   , { t, isTouch, activeTab, ...S })

export const recentTxs = ({ mempoolRecent, t, ...S }) => homeLayout(
    <div className="container">
      {transactions( mempoolRecent, false, { t, ...S })}
      <div style="height: 400px; overflow-y: scroll;margin-top: 50px !important">
        <h1>Bitcoin Transactions | Btcscan</h1>
        <p>Btcscan is an online Bitcoin blockchain viewer. The site provides data about Bitcoin transactions and Bitcoin Blocks. This explorer also allows users to check Bitcoin blockchain activities in real-time.</p>
        <p>Bitcoin transactions are recorded on a public ledger called the blockchain. Transactions are verified by network nodes through cryptography, and every recorded transaction is immutable. Bitcoin users engage with block explorers to track their Bitcoin transactions.</p>
        <p>The sender of a transaction must pay a transaction fee. The amount of the fee varies depending on several factors, such as the number of transactions in the block, or the size of the transaction. In general, the higher the fee, the more likely a transaction is to be included in a block.</p>
        <p>When making a transaction, you can choose to include a larger or smaller fee. A larger fee results in a faster confirmation and is more likely to be included in the next block. A small fee may result in a slower confirmation. </p>
        <p>Merchants usually have to wait up to six confirmations for a transaction to be considered complete. Bitcoin payments are pseudonymous, offering strong protection against identity theft and tracking by centralized powers.</p>
        <h2>What Is Bitcoin Transaction Search?</h2>
        <p>Bitcoin transaction search is a process by which you track Bitcoin transactions on the blockchain. This can be useful for finding out when a particular transaction occurred or tracking down a specific address on the network.</p>
        <p>There are a few different ways to go about Bitcoin transaction search. One popular method is to use a block explorer, such as Btcscan. These block explorers maintain a database of all Bitcoin transactions and provide a search interface that allows you to check specific addresses or bitcoin transactions.</p>
        <p>Btcscan, for instance, is a bitcoin transaction search engine that allows users to check specific BTC transactions and its history by inputting various criteria, such as ID, block height, or address. </p>
      </div>
    </div>
  , { ...S, t, activeTab: 'recentTxs' })
  
