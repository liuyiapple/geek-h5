import { Button } from 'antd-mobile'
import './index.scss'
const Login = () => {
  return (
    <div>
      <Button>登录

      <svg className="icon" aria-hidden="true">
        {/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
        <use xlinkHref="#iconbtn_like_sel"></use>
      </svg>

      </Button>
      <p className="p_item">11111111111111111</p>
    </div>
  )
}
export default Login
