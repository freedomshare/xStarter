
const DEFAULT_CHAIN = process.env.IS_NETWORK === 'goerli' ? 5 : process.env.IS_NETWORK === 'xdai' ? 100 :  31337
export const LAUNCHPAD_ADDRESS = {
  // default: '0x684097E38F2d7D848cD9E66a4947d749a9E098cC',
  5: '0x4EB937e7523f8E64091f09B5B92846E005999b97',
  31337: '0x052D9775D73623d96105DD6FB5e6fC906D261999',
  100: ''
}
LAUNCHPAD_ADDRESS.default = LAUNCHPAD_ADDRESS[DEFAULT_CHAIN]

export const  CHAIN_ID = '31337'

// todo: make this dynamic based n change
export const SUPPORTED_FUNDING_TOKENS = {
  '0x0000000000000000000000000000000000000000': CHAIN_ID === '100' ? 'xDai' : 'ETH'
  // add xstarter token
}

export const CHAIN_ID_TO_NAME = {
  1: 'Ethereum Main Net',
  31337: 'Hardhat Localhost',
  100: 'xDai Layer 2',
  56: 'Binance Smart Chain',
  77: 'POA Sokol Testnet',
  5: 'GOERLI Testnet'
  // 137: 'Polygon Matic'
}

export const  ACCEPTED_CHAINS = {
  31337: true,
  100: true,
  5: true
  // 137: true
}

export const ACCEPTED_CHAINS_CHOICES = [
  {label: 'xDai', value: 100 }
]

console.log('process env')
export const JSON_RPC_ENDPOINT = process.env.IS_NETWORK === 'xdai' ?
  'https://rpc.xdaichain.com/' :  process.env.IS_NETWORK === 'goerli' ? 'https://rpc.goerli.mudit.blog/' : 'http://127.0.0.1:8545'

export const ILO_STATUS = {
  0: 'ILO PROPOSED',
  1: 'ILO HAS BEEN SET UP BY ADMIN',
  2: 'ILO HAS RECEIVED PROJECT FUNDS',
  3: 'ILO HAS BEEN VALIDATED',
  4: 'ILO TOKENS HAS BEEN APPROVED FOR LIQUIDITY POOL',
  5: 'ILO LIQUIDITY PAIR CREATED',
  6: 'ILO FINALIZED: LIQUIDITY POOL CREATED AND TIME LOCKS SET'
}


export const xStarter_ILO_Info = {
  about: {
    name: 'xStarter',
    logoURL: 'https://ipfs.io/ipfs/QmR9MLmwXTyXJ5J9eJQ2hXeY3oKzuwsvWqtuS6aFaszsBS',
    description: `xStarter is an ecosystem of smart contracts, that provides a decentralized way for businesses, of all sizes, to issue tokens and create a market for those tokens.`,
    socialMediaLinks: [
      {label: 'telegram', url: 'https://t.me/xStarterDev', icon: 'fab fa-telegram-plane' },
      {label: 'twitter', url: 'https://www.twitter.com/xStarterdev', icon: 'fab fa-twitter' },
      {label: 'discord', url: 'https://discord.com/invite/9rQCAkNy4e', icon: 'fab fa-discord' },
      {label: 'facebook', url: '', icon: 'fab fa-facebook'},
      {label: 'medium', url: 'https://medium.com/@xstarterdev', icon: 'fab fa-medium'},
    ]
    },
  ILOInfo: {
    access: 'Open to public',
  },
  tokenomics: {
    useCase: 'xStarter tokens are used for governance and early access of ILOs launched on the xStarter Platform. xStarter tokens can also be used as a funding token for ILOs.'
  }
}

export const xStarter_ILO_IPFS_CID = 'QmUEMTSMYwqXZZNGm4T6UVec9igJssgeKQpajJiCrTN9DF'
