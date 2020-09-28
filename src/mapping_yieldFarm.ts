import {Harvest as HarvestEvent, MassHarvest as MassHarvestEvent} from '../generated/YieldFarm/YieldFarm'
import {Harvest as HarvestEventLP, MassHarvest as MassHarvestEventLP} from '../generated/YieldFarmLP/YieldFarmLP'
import {Harvest, MassHarvest} from '../generated/schema'

export function handleMassHarvest(event: MassHarvestEvent): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let mh = new MassHarvest(id)
    mh.user = event.params.user
    mh.epochsHarvested = event.params.epochsHarvested.toI32()
    mh.amount = event.params.totalValue
    mh.blockNumber = event.block.number.toI32()
    mh.blockTimestamp = event.block.timestamp.toString()
    mh.txHash = event.transaction.hash.toHex()
    mh.save()
}

export function handleMassHarvestLP(event: MassHarvestEventLP): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let mh = new MassHarvest(id)
    mh.user = event.params.user
    mh.epochsHarvested = event.params.epochsHarvested.toI32()
    mh.amount = event.params.totalValue
    mh.blockNumber = event.block.number.toI32()
    mh.blockTimestamp = event.block.timestamp.toString()
    mh.txHash = event.transaction.hash.toHex()
    mh.save()
}

export function handleHarvest(event: HarvestEvent): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let h = new Harvest(id)
    h.user = event.params.user
    h.epochId = event.params.epochId.toI32()
    h.amount = event.params.amount
    h.blockNumber = event.block.number.toI32()
    h.blockTimestamp = event.block.timestamp.toString()
    h.txHash = event.transaction.hash.toHex()
    h.save()
}

export function handleHarvestLP(event: HarvestEventLP): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let h = new Harvest(id)
    h.user = event.params.user
    h.epochId = event.params.epochId.toI32()
    h.amount = event.params.amount
    h.blockNumber = event.block.number.toI32()
    h.blockTimestamp = event.block.timestamp.toString()
    h.txHash = event.transaction.hash.toHex()
    h.save()
}
