// @flow
import type { Structure, GetFormState } from '../types'
import type { GetFormMetaInterface } from './getFormMeta.types'

const createGetFormMeta = ({ getIn, empty }: Structure<*, *>) => (
  form: string,
  getFormState: ?GetFormState
): GetFormMetaInterface => (state: any) => {
  const nonNullGetFormState: GetFormState =
    getFormState || (state => getIn(state, 'form'))
  return getIn(nonNullGetFormState(state), `${form}.fields`) || empty
}

export default createGetFormMeta
