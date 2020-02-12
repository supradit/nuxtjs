import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _619e1c92 = () => interopDefault(import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _0edec03a = () => interopDefault(import('../pages/sample01.vue' /* webpackChunkName: "pages/sample01" */))
const _0eecd7bb = () => interopDefault(import('../pages/sample02.vue' /* webpackChunkName: "pages/sample02" */))
const _0efaef3c = () => interopDefault(import('../pages/sample03.vue' /* webpackChunkName: "pages/sample03" */))
const _0f0906bd = () => interopDefault(import('../pages/sample04.vue' /* webpackChunkName: "pages/sample04" */))
const _0f171e3e = () => interopDefault(import('../pages/sample05.vue' /* webpackChunkName: "pages/sample05" */))
const _0f2535bf = () => interopDefault(import('../pages/sample06.vue' /* webpackChunkName: "pages/sample06" */))
const _0f334d40 = () => interopDefault(import('../pages/sample07.vue' /* webpackChunkName: "pages/sample07" */))
const _0f4164c1 = () => interopDefault(import('../pages/sample08.vue' /* webpackChunkName: "pages/sample08" */))
const _0f4f7c42 = () => interopDefault(import('../pages/sample09.vue' /* webpackChunkName: "pages/sample09" */))
const _10858158 = () => interopDefault(import('../pages/sample10.vue' /* webpackChunkName: "pages/sample10" */))
const _109398d9 = () => interopDefault(import('../pages/sample11.vue' /* webpackChunkName: "pages/sample11" */))
const _0e956c02 = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _52114830 = () => interopDefault(import('../pages/postsstore/_id.vue' /* webpackChunkName: "pages/postsstore/_id" */))
const _db4f485a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth",
    component: _619e1c92,
    name: "auth"
  }, {
    path: "/sample01",
    component: _0edec03a,
    name: "sample01"
  }, {
    path: "/sample02",
    component: _0eecd7bb,
    name: "sample02"
  }, {
    path: "/sample03",
    component: _0efaef3c,
    name: "sample03"
  }, {
    path: "/sample04",
    component: _0f0906bd,
    name: "sample04"
  }, {
    path: "/sample05",
    component: _0f171e3e,
    name: "sample05"
  }, {
    path: "/sample06",
    component: _0f2535bf,
    name: "sample06"
  }, {
    path: "/sample07",
    component: _0f334d40,
    name: "sample07"
  }, {
    path: "/sample08",
    component: _0f4164c1,
    name: "sample08"
  }, {
    path: "/sample09",
    component: _0f4f7c42,
    name: "sample09"
  }, {
    path: "/sample10",
    component: _10858158,
    name: "sample10"
  }, {
    path: "/sample11",
    component: _109398d9,
    name: "sample11"
  }, {
    path: "/posts/:id?",
    component: _0e956c02,
    name: "posts-id"
  }, {
    path: "/postsstore/:id?",
    component: _52114830,
    name: "postsstore-id"
  }, {
    path: "/",
    component: _db4f485a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
