# Barnbridge subgraph

## Intro
This subgraph captures the events emitted by the following contracts: 
- Staking 
- YieldFarm
- YieldFarmLP
- CommunityVault

For the Staking contract, we capture the Deposit and Withdraw actions into an entity called `StakingAction`. It stores a `type` fields with the following values: 
- DEPOSIT
- WITHDRAW

Check out [the graphql schema](schema.graphql) for the full list of entities.

## Deployment
Deployment docs can be found here: https://thegraph.com/docs/deploy-a-subgraph

TL;DR; this is the command
```
graph deploy \
      --debug \
      --node https://api.thegraph.com/deploy/ \
      --ipfs https://api.thegraph.com/ipfs/ \
  [user name]/[project name]
```

or, you can just 
```
yarn deploy
```
but make sure the project is set-up accordingly in thegraph's explorer.

## Example queries
### Get the latest 5 staking actions
```
{
  stakingActions(first: 5) {
    id
    type
    user
    token
    amount
    blockNumber
    blockTimestamp
    txHash
  }
}
```

### Get the staking actions for an user
```
{
  stakingActions(where:{user:"0x0000000000000000000000000000000000000000"}) {
    id
    type
    user
    token
    amount
    blockNumber
    blockTimestamp
    txHash
  }
}
```
