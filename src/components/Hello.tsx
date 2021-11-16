import {defineComponent, ref, h, onActivated} from 'vue'
import styles from './hello.module.css'

interface ExampleProps {
  name?: string
}

const Hello = defineComponent<ExampleProps>(props => {
  //keep-alive = true 需要手动恢复初始状态
  onActivated(() => {

  })

  return () => (
    <div class={styles.main}>
      <div class={'abc ' + styles.abc_module}>
        css module :deep test  red
      </div>
    </div>
  )
})

Hello.props = {
  name: String
}

export default Hello
