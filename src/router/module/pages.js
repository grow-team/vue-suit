
const Login = () => import('@/views/page/login')
const Permission = () => import('@/views/page/permission')
const User = () => import('@/views/page/user')

export default [
  {
    path: 'page/login',
    component: Login
  },
  {
    path: 'page/permission',
    component: Permission
  },
  {
    path: 'page/user',
    component: User
  }
]
