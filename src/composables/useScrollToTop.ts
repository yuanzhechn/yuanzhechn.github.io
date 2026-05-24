import { ref, type Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

export function useScrollToTop(threshold = 300): { visible: Ref<boolean>; scrollToTop: () => void } {
  const visible = ref(false)

  function onScroll() {
    visible.value = window.scrollY > threshold
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => window.addEventListener('scroll', onScroll))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { visible, scrollToTop }
}
