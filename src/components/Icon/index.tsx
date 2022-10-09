import cls from 'classnames'
type TypeProps = {
  type: string
  clasName?: string
  onClick?: () => void
}

export const Icon = ({ type, clasName, onClick }: TypeProps) => {
  return (
    <svg className={cls('icon', clasName)} aria-hidden="true" onClick={onClick}>
      {/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}
