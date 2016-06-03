import createAll from './createAll'
import plain from './structure/plain'

export const {
  actionTypes,
  arrayInsert,
  arrayMove,
  arrayPop,
  arrayPush,
  arrayRemove,
  arrayRemoveAll,
  arrayShift,
  arraySplice,
  arraySwap,
  arrayUnshift,
  blur,
  change,
  destroy,
  Field,
  FieldArray,
  focus,
  formValueSelector,
  reducer,
  reduxForm,
  initialize,
  propTypes,
  reset,
  setSubmitFailed,
  startAsyncValidation,
  startSubmit,
  stopAsyncValidation,
  stopSubmit,
  SubmissionError,
  touch,
  untouch,
  values
} = createAll(plain)
