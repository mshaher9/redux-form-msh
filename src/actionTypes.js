// @flow
export const prefix = '@@redux-form/'

export type ActionTypes = {
  ARRAY_INSERT: string,
  ARRAY_MOVE: string,
  ARRAY_POP: string,
  ARRAY_PUSH: string,
  ARRAY_REMOVE: string,
  ARRAY_REMOVE_ALL: string,
  ARRAY_SHIFT: string,
  ARRAY_SPLICE: string,
  ARRAY_UNSHIFT: string,
  ARRAY_SWAP: string,
  AUTOFILL: string,
  BLUR: string,
  CHANGE: string,
  CLEAR_SUBMIT: string,
  CLEAR_SUBMIT_ERRORS: string,
  CLEAR_ASYNC_ERROR: string,
  DESTROY: string,
  FOCUS: string,
  INITIALIZE: string,
  REGISTER_FIELD: string,
  RESET: string,
  SET_SUBMIT_FAILED: string,
  SET_SUBMIT_SUCCEEDED: string,
  START_ASYNC_VALIDATION: string,
  START_SUBMIT: string,
  STOP_ASYNC_VALIDATION: string,
  STOP_SUBMIT: string,
  SUBMIT: string,
  TOUCH: string,
  UNREGISTER_FIELD: string,
  UNTOUCH: string,
  UPDATE_SYNC_ERRORS: string,
  UPDATE_SYNC_WARNINGS: string
}

export const ARRAY_INSERT = `${prefix}ARRAY_INSERT`
export const ARRAY_MOVE = `${prefix}ARRAY_MOVE`
export const ARRAY_POP = `${prefix}ARRAY_POP`
export const ARRAY_PUSH = `${prefix}ARRAY_PUSH`
export const ARRAY_REMOVE = `${prefix}ARRAY_REMOVE`
export const ARRAY_REMOVE_ALL = `${prefix}ARRAY_REMOVE_ALL`
export const ARRAY_SHIFT = `${prefix}ARRAY_SHIFT`
export const ARRAY_SPLICE = `${prefix}ARRAY_SPLICE`
export const ARRAY_UNSHIFT = `${prefix}ARRAY_UNSHIFT`
export const ARRAY_SWAP = `${prefix}ARRAY_SWAP`
export const AUTOFILL = `${prefix}AUTOFILL`
export const BLUR = `${prefix}BLUR`
export const CHANGE = `${prefix}CHANGE`
export const CLEAR_SUBMIT = `${prefix}CLEAR_SUBMIT`
export const CLEAR_SUBMIT_ERRORS = `${prefix}CLEAR_SUBMIT_ERRORS`
export const CLEAR_ASYNC_ERROR = `${prefix}CLEAR_ASYNC_ERROR`
export const DESTROY = `${prefix}DESTROY`
export const FOCUS = `${prefix}FOCUS`
export const INITIALIZE = `${prefix}INITIALIZE`
export const REGISTER_FIELD = `${prefix}REGISTER_FIELD`
export const RESET = `${prefix}RESET`
export const SET_SUBMIT_FAILED = `${prefix}SET_SUBMIT_FAILED`
export const SET_SUBMIT_SUCCEEDED = `${prefix}SET_SUBMIT_SUCCEEDED`
export const START_ASYNC_VALIDATION = `${prefix}START_ASYNC_VALIDATION`
export const START_SUBMIT = `${prefix}START_SUBMIT`
export const STOP_ASYNC_VALIDATION = `${prefix}STOP_ASYNC_VALIDATION`
export const STOP_SUBMIT = `${prefix}STOP_SUBMIT`
export const SUBMIT = `${prefix}SUBMIT`
export const TOUCH = `${prefix}TOUCH`
export const UNREGISTER_FIELD = `${prefix}UNREGISTER_FIELD`
export const UNTOUCH = `${prefix}UNTOUCH`
export const UPDATE_SYNC_ERRORS = `${prefix}UPDATE_SYNC_ERRORS`
export const UPDATE_SYNC_WARNINGS = `${prefix}UPDATE_SYNC_WARNINGS`
