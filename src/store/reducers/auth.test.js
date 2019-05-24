import reducer from './auth.js'
import * as actionTypes from '../actions/actionTypes.js'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })

  it('should store token upon login', () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: '/'
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          token: 'some-token',
          userId: 'some-userid'
        }
      )
    ).toEqual({
      token: 'some-token',
      userId: 'some-userid',
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })
})
