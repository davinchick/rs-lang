import React, { useEffect } from 'react'

import 'reset-css'
import '../styles/main.less'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { getWords } from '../lib'

export const AppLayout = ({ children }) => {
  useEffect(() => {
    AOS.init()
  })

  return <>{children}</>
}
