import { useEffect } from 'react'

const useMenuClose = (isOpen, closeMenu) => {
  useEffect(() => {
    if (!isOpen) return

    const handleOverlay = (event) => {
      if (event.target.classList.contains('popup_opened')) {
        closeMenu()
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleOverlay)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleOverlay)
    }
  }, [isOpen, closeMenu])
}

export default useMenuClose