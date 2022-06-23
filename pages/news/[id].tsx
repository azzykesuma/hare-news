import React from 'react'
import { createClient } from 'contentful'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { Props } from '../index'

const client = createClient({
    space : 'p18acd3wl84h',
    accessToken : 'iocD6zMzTZbEytD0Hu7alzU3Z7IJ-nHzyr2lhbmHwz0'
})

export const getStaticPaths : GetStaticPaths = async() => {
    const res = await client.getEntries({ content_type : 'id'});

    const paths = res.items.map((item : any) => ({
        params : { id : item.fields.id.toString()}
    }))

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps : GetStaticProps = async({params}) => {
    const { items } = await client.getEntries({
        content_type : 'id',
        'fields.id' : params?.id
    })

    if(!items.length) {
        return {
            redirect : {
                destination : '/',
                permanent : false
            }
        }
    }

    return {
        props : { news : items[0]},
        revalidate : 1
    }
}

const newsPage: NextPage<Props> = ({ news }) => {
  return (
    <div>{news.fields.author}</div>
  )
}

export default newsPage