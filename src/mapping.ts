import { Deposit as DepositEvent, Withdraw as WithdrawEvent } from '../generated/Staking/Staking'
import { Deposit, Withdraw } from '../generated/schema'

export function handleDeposit(event: DepositEvent): void {
  let id = event.params._event.transaction.hash.toHex() + "_" + event.params._event.transactionLogIndex.toString()
  let deposit = new Deposit(id)
  deposit.user = event.params.user.toHex()
  deposit.token = event.params.tokenAddress.toHex()
  deposit.amount = event.params.amount.toString()
  deposit.blockNumber = event.block.number.toI32()
  deposit.blockTimestamp = event.block.timestamp.toString()
  deposit.txHash = event.transaction.hash.toHex()
  deposit.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let id = event.params._event.transaction.hash.toHex() + "_" + event.params._event.transactionLogIndex.toString()
  let w = new Withdraw(id)
  w.user =  event.params.user.toHex()
  w.token = event.params.tokenAddress.toHex()
  w.amount = event.params.amount.toString()
  w.blockNumber = event.block.number.toI32()
  w.blockTimestamp = event.block.timestamp.toString()
  w.txHash = event.transaction.hash.toHex()
  w.save()
}
