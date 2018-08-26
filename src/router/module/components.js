
// const rootPath = '@/views/components/'
/**
 * 本来想提取出rootPath来 发现不行，还需要在看看dynamic import的规范问题，还是babel编译的实现问题
 */
import Frame from '@/components/frame'

const Button = () => import('@/views/components/button')
const Form = () => import('@/views/components/form')
const Layout = () => import('@/views/components/layout')
const Pagination = () => import('@/views/components/pagination')
const Table = () => import('@/views/components/table')
const Tree = () => import('@/views/components/tree')

export default[{
  path: '/component',
  component: Frame,
  meta: {
    title: 'components',
    icon: 'el-icon-menu'
  },
  children: [
    {
      path: 'button',
      component: Button,
      meta: {
        title: '按钮'
      }
    },
    {
      path: 'form',
      component: Form,
      meta: {
        title: '表单'
      }
    },
    {
      path: 'layout',
      component: Layout,
      meta: {
        title: '布局'
      }
    },
    {
      path: 'pagination',
      component: Pagination,
      meta: {
        title: '分页'
      }
    },
    {
      path: 'table',
      component: Table,
      meta: {
        title: '表格'
      }
    },
    {
      path: 'tree',
      component: Tree,
      meta: {
        title: '树'
      }
    }
  ]
}]
