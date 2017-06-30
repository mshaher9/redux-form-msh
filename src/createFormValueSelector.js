// @flow
import invariant from 'invariant'
import plain from './structure/plain'
import type { Structure, GetFormState } from './types'

const createFormValueSelector = ({ getIn }: Structure<*, *>) => (
  form: string,
  getFormState: GetFormState = state => getIn(state, 'form')
) => {
  invariant(form, 'Form value must be specified')
  return (state: any, ...fields: string[]) => {
    invariant(fields.length, 'No fields specified')
    return fields.length === 1
      ? // only selecting one field, so return its value
        getIn(getFormState(state), `${form}.values.${fields[0]}`)
      : // selecting many fields, so return an object of field values
        fields.reduce((accumulator, field) => {
          const value = getIn(getFormState(state), `${form}.values.${field}`)
          return value === undefined
            ? accumulator
            : plain.setIn(accumulator, field, value)
        }, {})
  }
}

export default createFormValueSelector
