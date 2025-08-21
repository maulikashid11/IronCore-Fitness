"use client"
import Mission from '@/components/Mission'
import Story from '@/components/Story'
import Training from '@/components/Training'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className=" ">
            <Mission />
            <Story />
            <Training />
        </div>
    )
}

export default page