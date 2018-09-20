import Frame from '@/components/frame'

const Main = () => import('@/views/main')

export default [{
  path: '',
  component: Frame,
  redirect: '/main',
  name: 'main',
  meta: {
    title: 'main',
    icon: 'el-icon-tickets'
  },
  children: [{
    path: '/main',
    component: Main,
    meta: {
      title: 'main'
    }
  }]
}]
