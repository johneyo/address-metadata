import Joi from 'joi'

export class OverrideType {
  static readonly OverrideAll = new OverrideType(true, true)
  static readonly OnlyUpdates = new OverrideType(false, false)
  static readonly DeleteMissingKeysAndUpdate = new OverrideType(false, true)

  // private to disallow creating other instances of this type
  private constructor(
    public readonly shouldOverride: boolean,
    public readonly deleteMissingKeys: boolean,
  ) {}
}

export interface RTDBMetadata {
  data: any
  schema: Joi.Schema
  rtdbLocation: string
  overrideType: OverrideType
}

export interface Config {
  project: 'testnet' | 'mainnet'
  databaseUrl: string
}

export interface RawTokenInfo {
  address: string
  decimals: number
  name: string
  symbol: string
  imageUrl?: string
  isCoreToken?: boolean
  pegTo?: string
}

export type RawTokensInfo = RawTokenInfo[]
