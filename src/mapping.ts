import {
    Deposit as DepositEvent,
    EmergencyWithdraw as EmergencyWithdrawEvent,
    ManualEpochInit as ManualEpochInitEvent,
    Withdraw as WithdrawEvent
} from '../generated/Staking/Staking'
import {EmergencyWithdraw, ManualEpochInit, StakingAction} from '../generated/schema'

export function handleDeposit(event: DepositEvent): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let d = new StakingAction(id)
    d.type = "DEPOSIT"
    d.user = event.params.user
    d.token = event.params.tokenAddress
    d.amount = event.params.amount
    d.blockNumber = event.block.number.toI32()
    d.blockTimestamp = event.block.timestamp.toI32()
    d.txHash = event.transaction.hash.toHex()
    d.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let w = new StakingAction(id)
    w.type = "WITHDRAW"
    w.user = event.params.user
    w.token = event.params.tokenAddress
    w.amount = event.params.amount
    w.blockNumber = event.block.number.toI32()
    w.blockTimestamp = event.block.timestamp.toI32()
    w.txHash = event.transaction.hash.toHex()
    w.save()
}

export function handleManualEpochInit(event: ManualEpochInitEvent): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let mei = new ManualEpochInit(id)
    mei.user = event.params.caller
    mei.epochId = event.params.epochId.toI32()

    let tokens = event.params.tokens

    let t: Array<string> = []
    for (let i = 0; i < tokens.length; i++) {
        t.push(tokens[i].toHex())
    }

    mei.blockNumber = event.block.number.toI32()
    mei.blockTimestamp = event.block.timestamp.toI32()
    mei.txHash = event.transaction.hash.toHex()
    mei.tokens = t
    mei.save()
}

export function handleEmergencyWithdraw(event: EmergencyWithdrawEvent): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let ew = new EmergencyWithdraw(id)
    ew.user = event.params.user
    ew.token = event.params.tokenAddress
    ew.amount = event.params.amount
    ew.blockNumber = event.block.number.toI32()
    ew.blockTimestamp = event.block.timestamp.toI32()
    ew.txHash = event.transaction.hash.toHex()
    ew.save()
}
