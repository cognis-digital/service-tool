export const blockchainOptions = {
  platforms: [
    {
      id: 'ethereum',
      name: 'Ethereum',
      description: 'Leading smart contract platform',
      features: ['Smart contracts', 'DeFi ecosystem', 'NFT support'],
      price: 2999,
      frameworks: ['Hardhat', 'Truffle', 'Foundry']
    },
    {
      id: 'solana',
      name: 'Solana',
      description: 'High-performance blockchain platform',
      features: ['High throughput', 'Low fees', 'Fast finality'],
      price: 3499,
      frameworks: ['Anchor', 'Solana CLI']
    },
    {
      id: 'polygon',
      name: 'Polygon',
      description: 'Ethereum scaling solution',
      features: ['Low gas fees', 'EVM compatibility', 'Fast transactions'],
      price: 2499,
      frameworks: ['Hardhat', 'Truffle']
    }
  ],
  features: [
    {
      id: 'smart-contracts',
      name: 'Smart Contract Development',
      description: 'Custom smart contract development and auditing',
      price: 4999,
      options: [
        'Token creation',
        'DeFi protocols',
        'NFT marketplaces',
        'DAO frameworks'
      ]
    },
    {
      id: 'wallet-integration',
      name: 'Wallet Integration',
      description: 'Seamless crypto wallet integration',
      price: 1999,
      options: [
        'MetaMask',
        'WalletConnect',
        'Phantom',
        'Custom wallet'
      ]
    },
    {
      id: 'defi-features',
      name: 'DeFi Features',
      description: 'Decentralized finance functionality',
      price: 5999,
      options: [
        'Liquidity pools',
        'Yield farming',
        'Token swaps',
        'Lending protocols'
      ]
    }
  ],
  security: [
    {
      id: 'audit',
      name: 'Smart Contract Audit',
      description: 'Comprehensive security audit',
      price: 7999,
      features: [
        'Code review',
        'Vulnerability assessment',
        'Gas optimization',
        'Best practices'
      ]
    },
    {
      id: 'monitoring',
      name: 'Blockchain Monitoring',
      description: '24/7 blockchain monitoring solution',
      price: 2999,
      features: [
        'Transaction monitoring',
        'Smart contract events',
        'Alert system',
        'Analytics dashboard'
      ]
    }
  ]
};