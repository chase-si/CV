import { throttle } from 'lodash'

type Position = {
  x: number;
  y: number;
}

class Dot {
  position: Position

  width: number

  lag: number

  color: string

  constructor(x: number, y: number, width: number, lag: number, color: string) {
    this.position = { x, y }
    this.width = width
    this.lag = lag
    this.color = color
  }

  moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
    this.position.x += (x - this.position.x) / this.lag
    this.position.y += (y - this.position.y) / this.lag

    context.fillStyle = this.color
    context.beginPath()
    context.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI)
    context.fill()
    context.closePath()
  }
}

type FollowingDotCursorOptions = {
  element?: HTMLElement;
  dotWidth?: number;
  mixBlendMode?: string;
  color?: string;
}
export function FollowingDotCursor(options?: FollowingDotCursorOptions) {
  const hasWrapperEl = options && options.element
  const element = hasWrapperEl || document.body
  const dotWidth = options?.dotWidth || 10
  const mixBlendMode = options?.mixBlendMode
  const color = options?.color || '#323232'

  let width = window.innerWidth
  let height = window.innerHeight
  const cursor: Position = { x: width / 2, y: width / 2 }
  const dot = new Dot(width / 2, height / 2, dotWidth, dotWidth, color)
  let canvas: HTMLCanvasElement | null = null
  let context: CanvasRenderingContext2D | null = null
  let animationFrame: number

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  prefersReducedMotion.onchange = () => {
    if (prefersReducedMotion.matches) {
      destroy()
    } else {
      init()
    }
  }

  function init() {
    if (prefersReducedMotion.matches) {
      console.log('This browser has prefers reduced motion turned on, so the cursor did not init')
      return
    }

    canvas = document.createElement('canvas')
    context = canvas.getContext('2d')
    canvas.style.top = '0px'
    canvas.style.left = '0px'
    canvas.style.pointerEvents = 'none'

    if (mixBlendMode) {
      canvas.style.mixBlendMode = mixBlendMode
    }

    if (hasWrapperEl) {
      canvas.style.position = 'absolute'
      element.appendChild(canvas)
      canvas.width = element.clientWidth
      canvas.height = element.clientHeight
    } else {
      canvas.style.position = 'fixed'
      document.body.appendChild(canvas)
      canvas.width = width
      canvas.height = height
    }

    bindEvents()
    loop()
  }

  function bindEvents() {
    element.addEventListener('mousemove', throttledOnMouseMove)
    window.addEventListener('resize', onWindowResize)
  }

  function onWindowResize() {
    width = window.innerWidth
    height = window.innerHeight

    if (canvas) {
      if (hasWrapperEl) {
        canvas.width = element.clientWidth
        canvas.height = element.clientHeight
      } else {
        canvas.width = width
        canvas.height = height
      }
    }
  }

  function onMouseMove(e: MouseEvent) {
    if (hasWrapperEl) {
      const boundingRect = element.getBoundingClientRect()
      cursor.x = e.clientX - boundingRect.left
      cursor.y = e.clientY - boundingRect.top
    } else {
      cursor.x = e.clientX
      cursor.y = e.clientY
    }
  }

  const throttledOnMouseMove = throttle(onMouseMove, 100)
  function updateDot() {
    if (context) {
      context.clearRect(0, 0, width, height)
      dot.moveTowards(cursor.x, cursor.y, context)
    }
  }

  function loop() {
    updateDot()
    animationFrame = requestAnimationFrame(loop)
  }

  function destroy() {
    if (canvas) {
      canvas.remove()
      cancelAnimationFrame(animationFrame)
      element.removeEventListener('mousemove', throttledOnMouseMove)
      window.removeEventListener('resize', onWindowResize)
    }
  }

  init()

  return {
    destroy
  }
}
