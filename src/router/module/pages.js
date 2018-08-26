import Frame from '@/components/frame'

const Login = () => import('@/views/page/login')
const Permission = () => import('@/views/page/permission')
const User = () => import('@/views/page/user')

export default [{
  path: '/page',
  component: Frame,
  meta: {
    title: 'pages',
    icon: 'el-icon-goods'
  },
  children: [
    {
      path: 'login',
      component: Login,
      meta: {
        title: 'login'
      }
    },
    {
      path: 'permission',
      component: Permission,
      meta: {
        title: 'permission'
      }

    },
    {
      path: 'user',
      component: User,
      meta: {
        title: 'user'
      }
    }
  ]
}]
