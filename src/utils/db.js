import { IronDB } from 'iron-db'

import {
  RMS_STORAGE_KEY,
  RMS_STORAGE_DEFAULT_VALUE
} from "/constants"

const db = IronDB

const set = async value =>
  await db
    .set(RMS_STORAGE_KEY, JSON.stringify(value))

const get = async () =>
  await db
    .get(RMS_STORAGE_KEY, RMS_STORAGE_DEFAULT_VALUE)
    .then(res => JSON.parse(res))

const drop = async () =>
  await db
    .remove(RMS_STORAGE_KEY)

export const DB = {
  get,
  set,
  drop,
}