import {
  useState,
  useEffect,
} from "react"

export const useLifecycleHooks = ({ onMount, onUnmount }) => () =>
  useEffect(() => {
    onMount && onMount()
    return () => onUnmount && onUnmount()
  }, [])

export const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount()
  }, [])

export const useOnMount = onMount =>
  useEffect(() => {
    onMount && onMount()
  }, [])

export const useLogger = (name, props) => {
  useLifecycleHooks({
    onMount: () => console.log(`${name} has mounted`),
    onUnmount: () => console.log(`${name} has unmounted`)
  })

  useEffect(() => {
    console.log("Props updated", props)
  })
}

export const useSource = (init, terminate) => {
  const [sourceState, setSourceState] = useState(false)

  return [
    sourceState,
    () => {
      setSourceState(false)
      init && init()
    },
    () => {
      setSourceState(true)
      terminate && terminate()
    }
  ]
}