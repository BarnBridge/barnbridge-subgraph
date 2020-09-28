import { SetAllowance } from '../generated/CommunityVault/CommunityVault'
import { CommunityVaultAllowance } from '../generated/schema'

export function handleSetAllowance(event: SetAllowance): void {
  let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

  let cva = new CommunityVaultAllowance(id)
  cva.caller = event.params.caller
  cva.spender = event.params.spender
  cva.amount = event.params.amount
  cva.save()
}
