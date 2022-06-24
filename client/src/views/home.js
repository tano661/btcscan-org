import Snabbdom from 'snabbdom-pragma'
import layout from './layout'
import { blks } from './blocks'
import { transactions } from './transactions'

const isTouch = process.browser && ('ontouchstart' in window)

const homeLayout = (body, { t, activeTab, ...S }) => layout(
  <div>
    { body }
  </div>
  , { t, isTouch, activeTab, ...S })

export const dashBoard = ({ t, blocks, dashboardState, loading, ...S }) => {
  const { dashblocks, dashTxs } = dashboardState || {}

  return (homeLayout(
      <div className="container dash-container">
        { blks( dashblocks, true, false, { t, ...S }) }
        {transactions( dashTxs, true, { t } )}
        <div style={{height: '400px', overflowY: 'scroll', marginTop: '50px'}}>
          <h1>Bitcoin Blockchain Explorer</h1>
          <p>A "block explorer" can be defined as an online portal that facilitates the sourcing of data relating to a certain blockchain. Additionally, an explorer gives useful updates regarding transactions happening and the addresses tied to the specified blocks. This data consists of details like the height of the block, timestamp of block mining, and extra details like the ID of transactions performed on the block, etc.</p>
          <p>A block explorer enables one to examine the transactions connected to a block. It can also be used to view the addresses involved with various transactions.</p>
          <p>The BTC block explorer, popularly known as Bitcoin tracker,  serves as an essential instrument for anyone who wants to use the Bitcoin blockchain. It is possible to check Bitcoin balance, gather info about blocks as well as the transactions encompassed in them by using a block explorer.</p>
          <p>One example of a bitcoin transaction tracker is Btcscan's block explorer.  This explorer can be utilized to browse data pertaining to any block on the Bitcoin blockchain.</p>
          <p>In order to gain access to info on a particular block, simply enter the block height or block hash into the search bar on the Block Explorer homepage.</p>
          <h2>How to Use Btcscan Block Explorer</h2>
          <p>1. Enter the block height, block hash, transaction, or address you wish to review into the search bar on the BTC Block Explorer homepage.</p>
          <p>2. Click on "Search."</p>
          <p>3. Review the information on the searched data that appears on the next page. This typically includes block height, timestamp, the number of transactions, and more.</p>
          <p>4. Click on a transaction to see further details relating to it. Although the details shown will not include the present or previous BTC price, it is a significant record reserve for info like the addresses included in the transaction, the quantity of BTC sent, and Bitcoin status.</p>
          <p>BTC Block explorer is a valuable instrument for anyone enthusiastic about knowing further about Bitcoin or investigating certain transactions. Using block explorers, one can acquire a decent knowledge of the working technique of the BTC Blockchain and see firsthand how it is used.</p>
        </div>
      </div>
      , { ...S, t, activeTab: 'dashBoard' })
  )}
