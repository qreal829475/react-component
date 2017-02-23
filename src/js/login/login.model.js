import { createReducer } from 'restack-core'
import { select } from 'redux-saga/effects'
import _ from 'lodash'
require('../../../lib/js/security');

const basePath = 'https://ssl.mall.changan.com.cn';
const generate_Public_Key = `${basePath}/main/user/generatePublicKey`;
const generate_LOGIN = `${basePath}/main/user/loginEncrypt`;
const generate_ImgCode = `${basePath}/main/auth/picCode`;
const generate_CheckPhone = `${basePath}/main/auth/phone`;

const model = {
  name: 'login',
  initialState: {
    loginExp: '',
    loginMod: '',
    loginKeyPwd: '',
    loginPhone: '',
    loginResult: 'none',
    ableLogin: true,
    pwdIsAbleSendSMSCode: true,
    pwdPhone: '',
    checkPhoneResult: false
  },
  reducers: createReducer([], {
    LOGIN_FAIL(state, action) {
      const loginResult = action.payload.result;
      const ableLogin = true;
      return {
        loginResult,
        ableLogin
      };
    },

    LOGIN_SUCCESS(state, action) {
      const loginResult = action.payload.result;
      const ableLogin = true;
      return {
        loginResult,
        ableLogin
      };
    },

    PWD_CHECKPHONE(state, action) {
      const checkPhoneResult = action.payload.result;
      return {
        checkPhoneResult
      }
    },

    IMG_CODE(state, action) {
      const imgCodeSrc = action.payload.result;
      console.log(imgCodeSrc);
      return {
        imgCodeSrc
      }
    }

  }),
  sagas: {
    *login(action, {update, put, call}) {
      yield update({
        ableLogin: false
      });
      let resultKeyData,
        resultLoginData;
      //请求密码加密的模和子数          
      const response = yield call(fetch, generate_Public_Key, {});
      if (response && response.status == 200) {
        resultKeyData = yield response.json().then(data => data);
      } else {
        yield put({
          type: "LOGIN_FAIL",
          payload: {
            result: '9999'
          }
        });
      }

      //密码加密
      const password = RSAUtils.encryptedString(RSAUtils.getKeyPair(resultKeyData.data.exp, '', resultKeyData.data.mod), encodeURIComponent(action.payload.pwd));

      // 密码加密信息请求成功 --> 请求登陆接口
      if (resultKeyData.result == '0') {
        var body = 'password=' + password + '&mobile=' + action.payload.phone + '&mod=' + resultKeyData.data.mod;
        var data = {
          method: 'POST',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body
        };
        const responseLogin = yield call(fetch, generate_LOGIN, data);
        if (responseLogin && responseLogin.status == 200) {
          resultLoginData = yield responseLogin.json().then(data => data);
        } else {
          //返回失败请求
          yield put({
            type: "LOGIN_FAIL",
            payload: {
              result: '9999'
            }
          });
        }
      } else {
        //返回失败请求
        yield put({
          type: "LOGIN_FAIL",
          payload: {
            result: '9999'
          }
        });
      }

      //登陆接口请求成功  -->  根据返回值返回相应的信息
      if (resultLoginData.result) {
        if (resultLoginData.result == '0') {
          window.localStorage.setItem('token', resultLoginData.data.token);
          window.localStorage.setItem('uName', resultLoginData.data.nickname);
          window.localStorage.setItem('uMobile', resultLoginData.data.mobile);
          window.localStorage.setItem('uImg', resultLoginData.data.img);
        }
        yield put({
          type: "LOGIN_SUCCESS",
          payload: {
            result: resultLoginData.result
          }
        });
      }
    },

    *checkPhone(action, {updata, put, call}) {
      var url = generate_CheckPhone + '?phone=' + action.payload.phone;

      const response = yield call(fetch, url, {});

      if (response && response.status == 200) {
        let result = yield response.json().then(data => data)
        yield put({
          type: "PWD_CHECKPHONE",
          payload: {
            result: result.result
          }
        });
      } else {

      }
    },

    *checkImgCode(action, {updata, put, call}){

    }



  }
}

export default model
