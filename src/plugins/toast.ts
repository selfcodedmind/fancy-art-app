import { useToast } from 'vue-toastification'

const toast = useToast({
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  position: 'top-center',
  timeout: 2000,
  hideProgressBar: true
})

export default toast
