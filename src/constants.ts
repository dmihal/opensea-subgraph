/**
 * Main OpenSea smart contract address.
 * 
 * This contract mostly provides the atomicMatch_ method used when a
 * sale is being made on OpenSea martkeplace.
 */
export const WYVERN_EXCHANGE_ADDRESS = "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b";

/**
 * Librabry used by OpenSea for bundle sales.
 * 
 * This lib, afaik, takes as parameters the different abi encoded
 * calls of "transferFrom" methods of all the NFT contracts involved
 * in the sale.
 */
export const WYVERN_ATOMICIZER_ADDRESS = "0xc99f70bfd82fb7c8f8191fdfbfb735606b15e5c5";
