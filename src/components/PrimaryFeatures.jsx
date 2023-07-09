import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from '@/components/StockLogos'
import AssementScreen from '@/images/assessment-screen.jpg'
import FeatureOneImg from '@/images/demo-img-2.png'
import FeatureThreeImg from '@/images/demo-img-3.png'
import FaceoffImg from '@/images/faceoff.jpeg'
import Goalie from '@/images/goalie.jpeg'
import Goalie2 from '@/images/goalie-2.jpeg'
import Drills from '@/images/drills.jpeg'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Complete monthly assessments',
    description:
      'Check in on a monthly basis to assess your progress. Your workouts will update to match your progress.',
    icon: DeviceUserIcon,
    screen: MonthlyAssessmentScreen,
  },
  {
    name: 'Flexible and tailored workouts',
    description:
      'Custom made time-based workouts at your fingertips to match your skill level and schedule.',
    icon: DeviceTouchIcon,
    screen: TailoredWorkoutsScreen,
  },
  {
    name: 'A populated drill library',
    description:
      'Tired of daily practices? Find your favorite exercises in our extensive library.',
    icon: DeviceNotificationIcon,
    screen: LibraryScreen,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function MonthlyAssessmentScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <div className="mb-4">
          <span className="relative block h-1 w-full rounded-full bg-gray-100/20">
            <span className="absolute left-0 top-0 h-1 w-1/5 rounded-full bg-brand"></span>
          </span>
          <span className="mt-1 text-sm font-medium tracking-wider text-brand">
            1/5
          </span>
        </div>
        <AppScreen.Title>Pass and catch</AppScreen.Title>
        <AppScreen.Subtitle>1 minute each side</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className=" my-1">
          <Image
            src={FeatureOneImg}
            alt="Image of Lacrosse player doing wallball"
          />
        </div>
        <ol className="my-4 space-y-4 px-4">
          <li className="flex items-center space-x-3">
            <svg
              className="h-5 w-5"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5C0 3.19531 2.67188 0.5 6 0.5C9.30469 0.5 12 3.19531 12 6.5C12 9.82812 9.30469 12.5 6 12.5C2.67188 12.5 0 9.82812 0 6.5ZM8.69531 5.46875C8.95312 5.21094 8.95312 4.8125 8.69531 4.55469C8.4375 4.29688 8.03906 4.29688 7.78125 4.55469L5.25 7.08594L4.19531 6.05469C3.9375 5.79688 3.53906 5.79688 3.28125 6.05469C3.02344 6.3125 3.02344 6.71094 3.28125 6.96875L4.78125 8.46875C5.03906 8.72656 5.4375 8.72656 5.69531 8.46875L8.69531 5.46875Z"
                fill="#FFC72C"
              />
            </svg>
            <span className="text-xs font-medium text-white/80">
              Stand 10 feet from the wall
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="h-5 w-5"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5C0 3.19531 2.67188 0.5 6 0.5C9.30469 0.5 12 3.19531 12 6.5C12 9.82812 9.30469 12.5 6 12.5C2.67188 12.5 0 9.82812 0 6.5ZM8.69531 5.46875C8.95312 5.21094 8.95312 4.8125 8.69531 4.55469C8.4375 4.29688 8.03906 4.29688 7.78125 4.55469L5.25 7.08594L4.19531 6.05469C3.9375 5.79688 3.53906 5.79688 3.28125 6.05469C3.02344 6.3125 3.02344 6.71094 3.28125 6.96875L4.78125 8.46875C5.03906 8.72656 5.4375 8.72656 5.69531 8.46875L8.69531 5.46875Z"
                fill="#FFC72C"
              />
            </svg>
            <span className="text-xs font-medium text-white/80">
              Begin passing and catching with one hand
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="h-5 w-5"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5C0 3.19531 2.67188 0.5 6 0.5C9.30469 0.5 12 3.19531 12 6.5C12 9.82812 9.30469 12.5 6 12.5C2.67188 12.5 0 9.82812 0 6.5ZM8.69531 5.46875C8.95312 5.21094 8.95312 4.8125 8.69531 4.55469C8.4375 4.29688 8.03906 4.29688 7.78125 4.55469L5.25 7.08594L4.19531 6.05469C3.9375 5.79688 3.53906 5.79688 3.28125 6.05469C3.02344 6.3125 3.02344 6.71094 3.28125 6.96875L4.78125 8.46875C5.03906 8.72656 5.4375 8.72656 5.69531 8.46875L8.69531 5.46875Z"
                fill="#FFC72C"
              />
            </svg>
            <span className="text-xs font-medium text-white/80">
              Count your reps and submit them here.
            </span>
          </li>
        </ol>
        <div className="relative mx-auto my-4 flex h-10 w-10 items-center justify-center rounded-full border  border-brand/20">
          <div className="absolute left-0 top-0 -ml-[.75px] -mt-[.75px] h-10 w-5 overflow-hidden">
            <span className="absolute left-0 top-0 h-10 w-10  rounded-full border border-brand"></span>
          </div>
          <span className="text-base font-semibold text-white ">30</span>
        </div>
        <div className="m-4 rounded-md bg-brand py-4 text-center text-sm font-black uppercase text-gray-900">
          Enter results
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function TailoredWorkoutsScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Daily Practice</AppScreen.Title>
        <div className="relative mt-4 h-32 w-full ">
          <Image
            className="h-full w-full rounded-lg object-cover"
            src={FeatureOneImg}
            alt="Image of Lacrosse player doing wallball"
          />
          <span className="absolute bottom-2 left-4 text-lg font-black tracking-wide text-white">
            Personalized Plan
          </span>
        </div>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4">
          <p className="text-lg font-black tracking-wide text-white">
            Workout Plan
          </p>
          <div className="mt-3 w-full rounded-lg border border-brand bg-brand/5 p-3 text-xs font-black uppercase text-brand">
            8 minutes
          </div>
          <div className="mt-4 ">
            <p className="text-lg font-black tracking-wide text-white">
              Required Equpiment
            </p>
            <p className="text-xs text-gray-200 ">
              Make sure you have all your gear before starting
            </p>
            <div className="mt-4 grid grid-cols-3 gap-x-4">
              <div
                className="item rounded-lg border border-brand bg-brand/5 p-3
              text-center text-xs font-black uppercase  text-brand"
              >
                <svg
                  width="100%"
                  height="32"
                  viewBox="0 0 29 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.875 22.25C16.0625 22.4375 16 22.75 15.75 22.9375L12.8125 25L15.75 27.125C16 27.3125 16.0625 27.625 15.875 27.8125C15.75 27.9375 15.625 28 15.5 28C15.375 28 15.25 28 15.1875 27.9375L12 25.625L8.75 27.9375C8.6875 28 8.5625 28 8.5 28C8.3125 28 8.1875 27.9375 8.0625 27.8125C7.875 27.625 7.9375 27.3125 8.1875 27.125L11.125 25L8.1875 22.9375C7.9375 22.75 7.875 22.4375 8.0625 22.25C8.25 22 8.5625 21.9375 8.75 22.125L11.9375 24.4375L15.1875 22.125C15.375 21.9375 15.6875 22 15.875 22.25ZM25 9.5625C27.1875 9.8125 28.9375 11.6875 28.9375 14C29 18.1875 27.0625 20.125 26.4375 20.75L22.9375 24.25V28.5C22.9375 30.4375 21.3125 32 19.4375 32H5.5C3.5625 32 2 30.4375 2 28.5V23.1875C0.6875 21.9375 0 20.25 0 18.5V6.375C0 2.875 2.875 0 6.5 0H18.4375C22 0 24.9375 2.9375 24.9375 6.5L25 9.5625ZM25.75 20C26.375 19.4375 28 17.8125 27.9375 14C27.9375 12.125 26.375 10.5 24.5 10.5H22C20.0625 10.5 18.5 12.125 18.5 14C18.5 15.9375 20.0625 17.5 22 17.5C22.25 17.5 22.5 17.75 22.5 18C22.5 18.3125 22.25 18.5 22 18.5C19.5 18.5 17.5 16.5 17.5 14C17.5 13.5 17.5625 13 17.75 12.5H9.75C7.25 12.5 5 11.0625 4 8.75C3.875 8.5 4 8.1875 4.25 8.0625C4.5 7.9375 4.8125 8.0625 4.9375 8.3125C5.75 10.25 7.6875 11.5 9.75 11.5H18.1875C19 10.3125 20.375 9.5 21.9375 9.5H23.9375V6.5C23.9375 3.5 21.4375 1 18.4375 1H6.5C3.4375 1 1 3.4375 1 6.375V18.5C1 20.125 1.625 21.5625 3 22.75V28.5C3 29.9375 4.0625 31 5.5 31H19.4375C20.875 31 21.9375 29.9375 21.9375 28.5V23.8125L25.75 20Z"
                    fill="#FFC72C"
                  />
                </svg>

                <p className="mt-2">Gloves</p>
              </div>

              <div
                className="item rounded-lg border border-brand bg-brand/5 p-3
              text-center text-xs font-black uppercase  text-brand"
              >
                <svg
                  width="100%"
                  height="32"
                  viewBox="0 0 38 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.375 4.5625C32.125 1.625 29 0 26.1875 0C24.6875 0 23.25 0.5 22.0625 1.375C21.375 1.9375 20.8125 2.5625 20.4375 3.3125C18.9375 6 17.5 7.8125 15.8125 9.125L15.4375 9.4375C13.75 10.6875 12.75 12.5625 12.5 14.625C12.4375 14.625 12.4375 14.75 12.4375 14.8125C12.125 16.9375 12.75 18.9375 14 20.4375L1.125 31.125C0.9375 31.3125 0.9375 31.625 1.0625 31.875C1.1875 31.9375 1.3125 32 1.4375 32C1.5 32 1.625 32 1.75 31.9375L14.5625 21.1875C15.6875 22.3125 17.1875 23.0625 18.875 23.25C19 23.25 19.0625 23.25 19.125 23.25C19.4375 23.3125 19.75 23.3125 20.0625 23.3125C21.75 23.3125 23.4375 22.8125 24.875 21.6875L25.25 21.375C26.9375 20.0625 29.0625 19.125 31.9375 18.375C32.75 18.125 33.5625 17.75 34.25 17.25C37.8125 14.5625 37.8125 9 34.375 4.5625ZM33.8125 16.4375C33.1875 16.875 32.5625 17.1875 31.875 17.375C28.8125 18.1875 26.5625 19.1875 24.75 20.625L24.375 20.9375C23.125 21.875 21.75 22.3125 20.1875 22.3125C19.9375 22.3125 19.625 22.3125 19.375 22.3125L19.125 22.25C17.375 22.0625 15.8125 21.1875 14.75 19.8125C13.6875 18.4375 13.1875 16.6875 13.4375 14.9375V14.75C13.6875 12.9375 14.625 11.3125 16 10.25L16.4375 9.9375C18.25 8.5 19.75 6.5625 21.3125 3.8125C21.625 3.1875 22.125 2.625 22.6875 2.1875C23.625 1.4375 24.875 1 26.1875 1C28.8125 1 31.5625 2.5625 33.5625 5.1875C36.6875 9.125 36.75 14.125 33.8125 16.4375ZM26.1875 3.5C25.4375 3.5 24.75 3.75 24.1875 4.1875C23.9375 4.375 23.6875 4.6875 23.5 5C21.8125 8.0625 20.0625 10.25 17.9375 11.8125L17.5625 12.125C16.6875 12.875 16.0625 13.875 15.9375 15.0625V15.3125C15.75 16.375 16.0625 17.4375 16.6875 18.25C17.375 19.125 18.3125 19.6875 19.375 19.75L19.6875 19.8125C19.8125 19.8125 20 19.875 20.1875 19.875C20.875 19.875 21.875 19.6875 22.8125 18.9375L23.1875 18.625C25.3125 17 27.8125 15.875 31.25 15C31.625 14.875 31.9375 14.6875 32.25 14.5C34.125 13 33.8125 9.5625 31.625 6.6875C30.0625 4.75 28 3.5 26.1875 3.5ZM31.625 13.6875C31.4375 13.8125 31.25 13.9375 31 14C27.4375 14.9375 24.8125 16.125 22.5625 17.875L22.1875 18.125C21.5 18.75 20.6875 18.8125 20.1875 18.8125C20.0625 18.8125 19.9375 18.8125 19.75 18.8125H19.5C18.6875 18.6875 18 18.3125 17.5 17.6875C17 17 16.8125 16.25 16.875 15.4375L16.9375 15.1875C17.0625 14.3125 17.5 13.5 18.1875 13L18.5625 12.6875C20.75 11 22.625 8.6875 24.375 5.5C24.5 5.25 24.625 5.125 24.8125 4.9375C25.1875 4.6875 25.625 4.5 26.1875 4.5C27.6875 4.5 29.5 5.5625 30.8125 7.3125C32.625 9.625 33 12.625 31.625 13.6875Z"
                    fill="#FFC72C"
                  />
                </svg>

                <p className="mt-2">Stick</p>
              </div>

              <div
                className="item rounded-lg border border-brand bg-brand/5 p-3
              text-center text-xs font-black uppercase text-brand"
              >
                <svg
                  width="100%"
                  height="32"
                  viewBox="0 0 28 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4C0 1.8125 1.75 0 4 0H24C26.1875 0 28 1.8125 28 4V24C28 26.25 26.1875 28 24 28H4C1.75 28 0 26.25 0 24V4ZM8 6H20V1H8V6ZM7 6V1H4C2.3125 1 1 2.375 1 4V6H7ZM1 7V13.5H13.5V7H1ZM7 21V14.5H1V21H7ZM1 22V24C1 25.6875 2.3125 27 4 27H13.5V22H1ZM8 21H20V14.5H8V21ZM27 21V14.5H21V21H27ZM27 22H14.5V27H24C25.625 27 27 25.6875 27 24V22ZM14.5 7V13.5H27V7H14.5ZM27 6V4C27 2.375 25.625 1 24 1H21V6H27Z"
                    fill="#FFC72C"
                  />
                </svg>

                <p className="mt-2">Wall</p>
              </div>
            </div>
          </div>
          <div className="my-6 rounded-md bg-brand py-4 text-center text-sm font-black uppercase text-gray-900">
            Start workout
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function LibraryScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Library</AppScreen.Title>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="grid grid-cols-2 gap-4 px-4">
          <div className="relative h-36 w-full rounded-md">
            <Image
              className="h-full rounded-md object-cover"
              src={FeatureThreeImg}
              alt="Man playing underhand wall ball"
            />
            <div class="absolute inset-0 bg-black/30"></div>
            <span className="absolute bottom-2 left-2 text-sm font-black text-white">
              Under Hand
            </span>
          </div>
          <div className="relative h-36 w-full rounded-md">
            <Image
              className="h-full rounded-md object-cover"
              src={FeatureOneImg}
              alt="Man playing underhand wall ball"
            />
            <div class="absolute inset-0 bg-black/30"></div>
            <span className="absolute bottom-2 left-2 text-sm font-black text-white">
              Off Hand
            </span>
          </div>
          <div className="relative h-36 w-full rounded-md">
            <Image
              className="h-full rounded-md object-cover"
              src={Drills}
              alt="Image of Balls in piles"
            />
            <div class="absolute inset-0 bg-black/30"></div>
            <span className="absolute bottom-2 left-2 text-sm font-black text-white">
              Ground Balls
            </span>
          </div>
          <div className="relative h-36 w-full rounded-md">
            <Image
              className="h-full rounded-md object-cover"
              src={FaceoffImg}
              alt="Man playing underhand wall ball"
            />
            <div class="absolute inset-0 bg-black/30"></div>
            <span className="absolute bottom-2 left-2 text-sm font-black text-white">
              Face offs
            </span>
          </div>

          <div className="relative h-36 w-full rounded-md">
            <Image
              className="h-full rounded-md object-cover"
              src={Goalie2}
              alt="Man playing underhand wall ball"
            />
            <div class="absolute inset-0 bg-black/30"></div>

            <span className="absolute bottom-2 left-2 text-sm font-black text-white">
              Mini stick goal
            </span>
          </div>
          <div className="relative h-36 w-full rounded-md">
            <Image
              className="h-full rounded-md object-cover"
              src={Goalie}
              alt="Man playing underhand wall ball"
            />
            <div class="absolute inset-0 bg-black/40"></div>
            <span className="absolute bottom-2 left-2 text-sm font-black text-white">
              Shots on goal
            </span>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#FFC72C" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#FFC72C"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Every feature you need to improve. Try it for yourself.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Leave training plans behind! LaxPro customizes workouts tailored to
            your skill set, maximizing your growth.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
