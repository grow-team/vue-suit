
// const rootPath = '@/views/components/'
/**
 * 本来想提取出rootPath来 发现不行，还需要在看看dynamic import的规范问题，还是babel编译的实现问题
 */
const Button = () => import('@/views/components/button')
const Form = () => import('@/views/components/form')
const Layout = () => import('@/views/components/layout')
const Pagination = () => import('@/views/components/pagination')
const Table = () => import('@/views/components/table')
const Tree = () => import('@/views/components/tree')

export default [
  {
    path: 'component/button',
    component: Button
  },
  {
    path: 'component/form',
    component: Form
  },
  {
    path: 'component/layout',
    component: Layout
  },
  {
    path: 'component/pagination',
    component: Pagination
  },
  {
    path: 'component/table',
    component: Table
  },
  {
    path: 'component/tree',
    component: Tree
  }
]
