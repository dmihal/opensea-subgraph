import { Address } from "@graphprotocol/graph-ts"

let ethAddress = Address.fromString('0x0000000000000000000000000000000000000000')
export let wethAddress = Address.fromString('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')
let daiAddress = Address.fromString('0x6b175474e89094c44da98b954eedeac495271d0f')
let usdcAddress = Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48')

export function getAssetName(address: Address): string {
  if (address == ethAddress || address == wethAddress) {
    return 'ETH'
  }
  if (address == daiAddress) {
    return 'Dai'
  }
  if (address == usdcAddress) {
    return 'USDC'
  }
  return ''
}