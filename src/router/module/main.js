import Frame from '@/components/frame'

const Main = () => import('@/views/main')

export default [{
  path: '',
  component: Frame,
  redirect: '/main',
  name: 'main',
  meta: {
    title: '主页',
    icon: 'el-icon-menu'
  },
  children: [{
    path: '/main',
    component: Main,
    meta: {
      title: '主页一'
    }
  }]
} ]
