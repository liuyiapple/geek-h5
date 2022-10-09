import { Button } from 'antd-mobile'
import { Icon } from '@/components/Icon'
import './index.scss'
const Login = () => {
  return (
    <div>
      <Button>
        登录
        <Icon
          type="iconbtn_like_sel"
          clasName="my-icon"
          onClick={() => {
            console.log('icon 被点击了')
          }}
        />
      </Button>
      <Icon
        type="iconbtn_like_sel"
        clasName="my-icon"
        onClick={() => {
          console.log('icon 被点击了')
        }}
      />
      <p className="p_item">11111111111111111</p>
    </div>
  )
}
export default Login
