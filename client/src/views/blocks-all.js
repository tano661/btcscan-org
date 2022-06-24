import Snabbdom from 'snabbdom-pragma'
import layout from './layout'
import { blks } from './blocks'

const isTouch = process.browser && ('ontouchstart' in window)

const homeLayout = (body, { t, activeTab, ...S }) => layout(
  <div>
    { body }
  </div>
  , { t, isTouch, activeTab, ...S })

export const recentBlocks = ({ t, blocks, loading, ...S }) => homeLayout(
  <div className="container">
    { blks(blocks, false, true, { t, loading, ...S }) }
    <div style={{height: '400px', overflowY: 'scroll', marginTop: '50px'}}>
      <h1>Bitcoin Blocks</h1>
      <p>The history of Bitcoin starts with its creator, Satoshi Nakamoto. He created this new digital currency in 2008 as an open-source project so that it could be used to facilitate transactions without any central authority or bank involvement.</p>
      <p>The Bitcoin blockchain is a digital ledger of all transactions that have ever been executed using Bitcoin. It is constantly growing as "completed" blocks are added to it with a new set of recordings. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. </p>
      <p>Bitcoin users utulize blockchain explorers to track Bitcoin transactions when they send or receive funds. Bitcoin holds a unique status compared to incumbent fiat currencies, in that there are a finite number of them: 21 million BTC. </p>
      <p>The BTC blockchain is maintained by a network of nodes that collectively keep track of all the transactions. These nodes are run by individuals, companies, and groups all over the world who use their devices to help maintain the blockchain network.</p>
      <p>The Bitcoin blockchain is thought to be incredibly secure because of its decentralized nature, that is, no single person or entity has control over it. Transactions on the blockchain are verified by miners through cryptography, and once they are confirmed, they are added to the blockchain permanently. This makes it virtually impossible to tamper with or hack the Bitcoin blockchain without someone noticing.</p>
      <p>As of April 2022, over 19 million BTC have been mined and is in circulation. To ensure the safety and security of Bitcoin, each new block includes a unique transaction ID, or hash, that links it to the previous block. Bitcoin miners compete to solve complex mathematical problems with cryptographic hash functions that award new Bitcoin every 10 minutes to whoever solves them first. This process is known as mining.</p>
      <h2>Bitcoin Last Block</h2>
      <p>Bitcoin Block explorers can also be used to view information about the most recent block mined on the Bitcoin network. This block is also known as the "last block" or “latest block” as the case may be. To view information about the last block, simply click on “blocks” on the Bitcoin Block Explorer homepage, and it will show the latest approved blocks.</p>
      <h2>The BTC Explorer</h2>
      <p>Details about transactions including Transaction ID, Value, Size, can be viewed publicly on the BTC blockchain explorer. An explorer is a tool that allows you to search and browse the Bitcoin blockchain for transactions, addresses, and blocks. It contains a search bar where you can input the information you're looking for, and it returns the results in real-time.</p>
    </div>
  </div>
  , { ...S, t, activeTab: 'recentBlocks' })
