import * as actionTypes from '../constants/userinfo.js'

export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}
export function update(data){
  return {
    type:actionTypes.USERINFO_UPDATE,
    data
  }
}
